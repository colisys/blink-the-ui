<template>
  <div 
    class="blink-layout-stacked"
    :class="`blink-layout-stacked--${direction}`"
    :style="{
      '--blink-stacked-gap': gap,
      '--blink-stacked-overlap': overlap
    }"
  >
    <slot></slot>
  </div>
</template>

<style lang="less" scoped>
@import './index.less';
</style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BlinkStacked',
  props: {
    gap: {
      type: String,
      default: '4px',
    },
    direction: {
      type: String,
      default: 'column',
      validator: (value: string) => ['column', 'row'].includes(value),
    },
    overlap: {
      type: String,
      default: '16px',
    },
  },
  setup() {
    return {};
  },
});
</script>