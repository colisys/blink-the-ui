import { createI18n, type Composer } from 'vue-i18n';

import en from './locales/en/common.json';
import zh from './locales/zh/common.json';

import en_datetime from './locales/en/datetime.json';
import zh_datetime from './locales/zh/datetime.json';
import type { App } from 'vue';

export type SupportedLocale = 'en' | 'zh';
export type LocaleMessages = typeof en;

export const locales: Record<SupportedLocale, LocaleMessages> = {
  en: {
    ...en,
    ...en_datetime,
  },
  zh: {
    ...zh,
    ...zh_datetime,
  },
};

export const i18n = createI18n({
  legacy: false,
  locale: 'zh',
  fallbackLocale: 'en',
  messages: locales,
});

export type I18nInstance = typeof i18n;
export type { Composer };
export default {
  install: (app: App) => {
    i18n.install(app);
  },
};
