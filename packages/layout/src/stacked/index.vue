<template>
  <div
    class="blink-layout-stacked"
    :class="[
      `blink-layout-stacked--${direction}`,
      showOnHover ? 'blink-layout-stacked--show-on-hover' : '',
    ]"
    :style="{
      '--blink-stacked-gap': gap,
      '--blink-stacked-overlap': overlap,
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

export default defineComponent({
  name: 'BlinkLayoutStacked',
  props: {
    gap: {
      type: String,
      default: '4px',
    },
    direction: {
      type: String as PropType<'vertical' | 'horizontal'>,
      default: 'horizontal',
      validator: (value: string) => ['vertical', 'horizontal'].includes(value),
    },
    overlap: {
      type: String,
      default: '16px',
    },
    showOnHover: {
      type: Boolean,
      default: true,
    },
  },
  setup() {
    return {};
  },
});
</script>
