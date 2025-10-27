<template>
  <div
    class="blink-overlay-dock-wrapper"
    :class="[
      `blink-overlay-dock--position-${position}`,
      `blink-overlay-dock--align-${align}`,
    ]"
  >
    <div class="blink-overlay-dock">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import './index.less';

.@{dock-class-name} {
  background-color: v-bind(background);

  &-wrapper {
    z-index: v-bind(zIndex);
  }
}
</style>

<script lang="ts">
import { computed, defineComponent, type PropType } from 'vue';
import type { BlinkOverlayDockAlign, BlinkOverlayDockPosition } from '.';

export default defineComponent({
  name: 'BlinkOverlayDock',
  props: {
    position: {
      type: String as PropType<BlinkOverlayDockPosition>,
      default: 'top',
    },
    alignment: {
      type: String as PropType<BlinkOverlayDockAlign>,
      default: 'start',
    },
    background: {
      type: String,
      default: 'transparent',
    },
    zIndex: {
      type: Number,
      default: 1000,
    },
  },
  setup(props) {
    const position = computed(() => props.position);
    const align = computed(() => props.alignment);
    const background = computed(() => props.background);
    const zIndex = computed(() => props.zIndex);

    return {
      position,
      align,
      background,
      zIndex,
    };
  },
});
</script>
