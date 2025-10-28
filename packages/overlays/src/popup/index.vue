<template>
  <div
    class="blink-overlay-popup-wrapper"
    @mouseover="handlePopupShowup"
    @mouseleave="handlePopupHidden"
    @mouseout="handlePopupHidden"
  >
    <div ref="contentRef" class="blink-overlay-anchor">
      <slot></slot>
    </div>
    <Teleport to="body">
      <BlinkAnimFade>
        <div
          class="blink-overlay-popup"
          :class="[
            `blink-overlay-popup--position-${position}`,
            `blink-overlay-popup--align-${alignment}`,
          ]"
          v-show="visible"
        >
          <slot name="popup">
            {{ content }}
          </slot>
        </div>
      </BlinkAnimFade>
    </Teleport>
  </div>
</template>

<style lang="less" scoped>
@import './index.less';

.blink-overlay-popup {
  background-color: color-mix(
    in srgb,
    var(--global-light-color) 100%,
    var(--global-dark-color) 25%
  );
  border-radius: var(--global-border-radius);
  padding: 4px 6px;

  &.blink-overlay-popup--position-top {
    top: calc(v-bind(targetTop) - v-bind(targetHeight));
    left: calc(v-bind(targetLeft) + v-bind(targetWidth) / 2);
    transform: translateX(-50%);
  }
}
</style>

<script lang="ts">
import {
  computed,
  defineComponent,
  nextTick,
  onMounted,
  ref,
  type PropType,
} from 'vue';
import { BlinkAnimFade } from '@blink-the-ui/animations';

export default defineComponent({
  name: 'BlinkOverlayPopup',
  props: {
    content: {
      type: String,
      default: '',
    },
    position: {
      type: String as PropType<'top' | 'bottom' | 'left' | 'right'>,
      default: 'top',
    },
    alignment: {
      type: String as PropType<'start' | 'center' | 'end'>,
      default: 'center',
    },
  },
  components: {
    BlinkAnimFade,
  },
  setup(__props, { expose }) {
    const visible = ref(false);
    const contentRef = ref<HTMLDivElement | null>(null);
    const handlePopupShowup = () => (visible.value = true);
    const handlePopupHidden = () => (visible.value = false);
    const targetRect = ref<DOMRect | null>(null);

    onMounted(() => {
      nextTick(() => {
        targetRect.value = contentRef.value?.getBoundingClientRect() || null;
      });
      console.log(targetRect);
    });

    const targetTop = computed(() => `${targetRect.value?.top || 0}px`);
    const targetLeft = computed(() => `${targetRect.value?.left || 0}px`);
    const targetWidth = computed(() => `${targetRect.value?.width || 0}px`);
    const targetHeight = computed(() => `${targetRect.value?.height || 0}px`);
    const targetBottom = computed(() => `${targetRect.value?.bottom || 0}px`);
    const targetRight = computed(() => `${targetRect.value?.right || 0}px`);

    expose({
      show: handlePopupShowup,
      hide: handlePopupHidden,
    });

    return {
      visible,
      contentRef,
      targetRect,
      targetTop,
      targetLeft,
      targetWidth,
      targetHeight,
      targetBottom,
      targetRight,
      handlePopupShowup,
      handlePopupHidden,
    };
  },
});
</script>
