<template>
  <div
    class="blink-layout-grid"
    :class="{
      [`blink-layout-grid--gap-${gap}`]: gap,
      [`blink-layout-grid--cols-${cols}`]: cols,
      [`blink-layout-grid--justify-${justify}`]: justify,
      [`blink-layout-grid--align-${align}`]: align,
    }"
    :style="gridStyle"
  >
    <slot></slot>
  </div>
</template>

<style lang="less" scoped>
@import './index.less';
</style>

<script lang="ts">
import { defineComponent, type PropType, computed } from 'vue';
import {
  type GlobalComponentSize,
  type HorizontalAlignment,
  type VerticalAlignment,
} from '../types';

export default defineComponent({
  name: 'BlinkLayoutGrid',
  props: {
    cols: {
      type: Number,
      default: 24,
    },
    gap: {
      type: String as PropType<GlobalComponentSize | number>,
      default: undefined,
    },
    justify: {
      type: String as PropType<HorizontalAlignment>,
      default: 'start',
    },
    align: {
      type: String as PropType<VerticalAlignment>,
      default: 'stretch',
    },
    wrap: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const gridStyle = computed(() => {
      const style: Record<string, string> = {};

      if (props.gap !== undefined) {
        if (typeof props.gap === 'number') {
          style.gap = `${props.gap}px`;
        }
      }

      if (props.wrap === false) {
        style.flexWrap = 'nowrap';
      }

      return style;
    });

    return {
      gridStyle,
    };
  },
});
</script>
