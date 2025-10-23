<template>
  <div class="blink-container"><slot></slot></div>
</template>

<style lang="less" scoped>
@import './index.less';
</style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BlinkContainer',
  props: {},
  setup() {
    return {};
  },
});
</script>
