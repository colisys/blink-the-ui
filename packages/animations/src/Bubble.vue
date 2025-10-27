<template>
  <Transition name="blink-anim-bubble">
    <slot></slot>
  </Transition>
</template>

<style lang="less" scoped>
@transition-override: all 0.3s ease!important;

.blink-anim-bubble-enter-active,
.blink-anim-bubble-leave-active {
  transform: scale(1.2);
  transition: @transition-override;
}

.blink-anim-bubble-enter-from,
.blink-anim-bubble-leave-to {
  transform: scale(0.8);
  transition: @transition-override;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BlinkAnimBubble',
  setup() {
    return {};
  },
});
</script>
