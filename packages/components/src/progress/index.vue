<template>
  <div
    class="blink-progress-wrapper"
    :class="[{ 'blink-progress--with-text': showProgressText }]"
  >
    <div class="blink-progress-container">
      <div class="blink-progress-background"></div>
      <div
        class="blink-progress-bar"
        :class="{
          striped: striped,
          animated: animated,
          infinite: infinite,
        }"
        :style="[{ width: infinite ? '30%' : `${value}%` }]"
      ></div>
    </div>
    <div
      class="blink-progress-progress-text"
      :style="{
        left: getTextPosition(value),
      }"
      v-if="showProgressText"
    >
      {{ `${value}%` }}
    </div>
  </div>
</template>

<style lang="less" scoped>
@import './index.less';

.@{progress-class-name} {
  &-background {
    background-color: color-mix(
      in srgb,
      v-bind(color) 20%,
      var(--global-light-color) 80%
    );
  }

  &-bar {
    background-color: v-bind(color);
  }

  &-progress-text {
    backdrop-filter: drop-shadow(0 0 10px var(--global-light-color));
    color: v-bind(color);
  }
}
</style>

<script lang="ts">
import { defineComponent, ref, watch, type PropType } from 'vue';
import type { BlinkProgressController, GlobalVisual } from '../types';
import { getColor } from '@blink-the-ui/helper';

export default defineComponent({
  name: 'BlinkProgress',
  props: {
    color: {
      type: String as PropType<GlobalVisual>,
      default: 'primary',
    },
    value: {
      type: Number,
      default: 10,
    },
    showProgressText: {
      type: Boolean,
      default: true,
    },
    striped: {
      type: Boolean,
      default: false,
    },
    animated: {
      type: Boolean,
      default: false,
    },
    infinite: {
      type: Boolean,
      default: false,
    },
    updater: {
      type: Function as PropType<
        (_controller: BlinkProgressController) => void
      >,
      default: null,
    },
  },
  emits: ['update'],
  setup(props, { emit }) {
    const color = ref(getColor(props.color));
    const value = ref(props.value);
    const infinite = ref<boolean>(props.infinite);
    const animated = ref<boolean>(props.animated);
    const striped = ref<boolean>(props.striped);
    const showProgressText = ref<boolean>(props.showProgressText);

    watch(
      () => props.value,
      newValue => (value.value = newValue)
    );

    // 计算文本位置，确保不超出进度条范围
    const getTextPosition = (val: number) => {
      if (val <= 0) return '0%';
      if (val >= 100) return '100%';

      // 文本宽度大约为40px，将其居中对齐到进度条末端
      // 为了保证文本不会超出边界，需要根据百分比调整位置
      const textWidthPercent = 2; // 假设文字宽度占总长度的2%
      if (val < textWidthPercent) {
        return `${textWidthPercent}%`;
      } else if (val > 100 - textWidthPercent) {
        return `${100 - textWidthPercent}%`;
      } else {
        return `${val}%`;
      }
    };

    const controller = {
      suspend: () => (infinite.value = false),
      resume: () => (infinite.value = true),
      update: (newValue: number) =>
        (value.value = newValue) && emit('update', newValue),
      clear: () => (value.value = 0),
      finish: () => (value.value = 100),
    };

    if (props.updater) {
      props.updater(controller);
    }

    return {
      color,
      value,
      infinite,
      animated,
      striped,
      showProgressText,
      getTextPosition,
    };
  },
});
</script>
