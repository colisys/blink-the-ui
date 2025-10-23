<template>
  <div
    class="blink-layout-row"
    :class="{
      [`blink-layout-row--align-${align}`]: align,
      [`blink-layout-row--justify-${justify}`]: justify,
      [`blink-layout-row--wrap`]: wrap,
    }"
  >
    <slot></slot>
  </div>
</template>

<style lang="less" scoped>
@import './index.less';
</style>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import { type HorizontalAlignment, type VerticalAlignment } from '../types';

export default defineComponent({
  name: 'BlinkRow',
  props: {
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
      default: false,
    },
  },
  setup() {
    return {};
  },
});
</script>