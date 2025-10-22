import type { DirectiveBinding, ObjectDirective } from 'vue';
import { i18n, type SupportedLocale } from '@blink-the-ui/i18n';

type DatetimeOptions = {
  locale?: SupportedLocale;
};

const defaultOptions: DatetimeOptions = {
  locale: 'zh',
};

const timeUnits = [
  { key: 'datetime.year', factor: 365 * 24 * 60 * 60 * 1000 },
  { key: 'datetime.month', factor: 30 * 24 * 60 * 60 * 1000 },
  { key: 'datetime.day', factor: 24 * 60 * 60 * 1000 },
  { key: 'datetime.hour', factor: 60 * 60 * 1000 },
  { key: 'datetime.minute', factor: 60 * 1000 },
  { key: 'datetime.second', factor: 1000 },
];

const parseTime = (timeString: string): Date | null => {
  // 尝试解析多种时间格式
  const date = new Date(timeString);
  if (!isNaN(date.getTime())) {
    return date;
  }

  // 简单的格式解析
  const isoFormat = timeString.replace(/\/|\s|:/g, match => {
    if (match === '/') return '-';
    if (match === ' ' || match === ':') return match;
    return match;
  });

  const isoDate = new Date(isoFormat);
  return isNaN(isoDate.getTime()) ? null : isoDate;
};

const formatTimeDiff = (diff: number, options: DatetimeOptions): string => {
  const t = i18n.global.t;
  i18n.global.locale.value = options.locale ?? 'zh';
  const absDiff = Math.abs(diff);
  const isPast = diff > 0;

  // 如果相差不到1秒，显示"刚刚"
  if (absDiff < 1000) {
    return t('datetime.justNowText');
  }

  // 特殊处理1秒的情况
  if (absDiff >= 1000 && absDiff < 2000) {
    return t(`datetime.${isPast ? 'past' : 'future'}Text`, [
      t('datetime.second', [1]),
    ]);
  }

  // 计算合适的时间单位
  for (let { key, factor } of timeUnits) {
    const unitValue = Math.floor(absDiff / factor);
    if (unitValue > 0) {
      if (unitValue > 1) key = `${key}s`;
      return t(`datetime.${isPast ? 'past' : 'future'}Text`, [
        t(key, [unitValue]),
      ]);
    }
  }

  // 默认情况显示"刚刚"
  return t('datetime.justNowText');
};

const updateTimeDisplay = (el: HTMLElement, binding: DirectiveBinding) => {
  const options: DatetimeOptions = { ...defaultOptions, ...binding.value };
  let timeString: string;

  console.log(binding);

  // 获取时间字符串
  if (binding.arg === 'textContent') {
    // 从绑定值获取文本内容
    timeString = binding.value?.time || binding.value;
  } else {
    // 从元素的文本内容获取
    timeString = el.textContent?.trim() || '';
  }

  if (!timeString) {
    console.warn('Prettier datetime directive: Empty time string');
    return;
  }

  const date = parseTime(timeString);
  if (!date) {
    console.warn(
      `Prettier datetime directive: Invalid time format "${timeString}"`
    );
    return;
  }

  const now = new Date();
  // 正数表示过去，负数表示未来
  const diff = now.getTime() - date.getTime();

  el.textContent = formatTimeDiff(diff, options);
};

const PrettierDatetimeDirective: ObjectDirective = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    updateTimeDisplay(el, binding);
  },

  updated(el: HTMLElement, binding: DirectiveBinding) {
    // 当元素更新时重新计算时间显示
    if (binding.value !== binding.oldValue) {
      updateTimeDisplay(el, binding);
    }
  },
};

export default PrettierDatetimeDirective;
