<template>
  <form class="blink-form">
    <slot></slot>
  </form>
</template>

<style lang="less" scoped>
@import './index.less';
</style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BlinkForm',
});
</script>
