<template>
  <div class="blink-layout-list-wrapper">
    <div class="blink-layout-list-container">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import './index.less';
</style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BlinkLayoutList',
  setup() {
    return {};
  },
});
</script>
