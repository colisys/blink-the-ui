<template>
  <TransitionGroup
    name="blink-anim-stacked"
    tag="div"
    class="blink-anim-stacked-container"
  >
    <slot></slot>
  </TransitionGroup>
</template>

<style lang="less">
.blink-anim-stacked-container {
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  width: 100%;
}

.blink-anim-stacked-enter-active {
  transition: all 0.3s ease-out;
  transform-origin: center top;
}

.blink-anim-stacked-leave-active {
  transition: all 0.3s ease-out;
  position: absolute;
  transform-origin: center top;
}

.blink-anim-stacked-enter-from {
  opacity: 0;
  transform: translateY(-20px) scale(0.9);
}

.blink-anim-stacked-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.9);
}

.blink-anim-stacked-move {
  transition: all 0.3s ease-out;
}
</style>

<script lang="ts">
import { defineComponent, TransitionGroup } from 'vue';

export default defineComponent({
  name: 'BlinkAnimStackedAlerts',
  components: {
    TransitionGroup,
  },
});
</script>
