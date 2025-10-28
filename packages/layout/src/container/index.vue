<template>
  <div class="blink-layout-container">
    <slot></slot>
  </div>
</template>

<style lang="less" scoped>
@import './index.less';
</style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BlinkLayoutContainer',
  props: {},
  setup() {
    return {};
  },
});
</script>
