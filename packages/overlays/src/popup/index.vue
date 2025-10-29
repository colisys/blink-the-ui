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
          ref="popupRef"
          class="blink-overlay-popup"
          :class="[
            `blink-overlay-popup--position-${position}`,
            `blink-overlay-popup--align-${alignment}`,
          ]"
          :style="popupStyle"
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
  position: absolute;
  z-index: 1000;
}
</style>

<script lang="ts">
import {
  defineComponent,
  nextTick,
  onMounted,
  ref,
  type PropType,
  watch,
  reactive,
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
    margin: {
      type: Number,
      default: 0,
    },
  },
  components: {
    BlinkAnimFade,
  },
  setup(__props, { expose }) {
    const visible = ref(false);
    const contentRef = ref<HTMLDivElement | null>(null);
    const popupRef = ref<HTMLDivElement | null>(null);
    const targetRect = ref<DOMRect | null>(null);
    const popupRect = ref<DOMRect | null>(null);
    const margin = ref<number>(__props.margin);

    const popupStyle = reactive({
      top: `${targetRect.value?.top || 0}px`,
      left: `${targetRect.value?.left || 0}px`,
    });

    const updatePosition = () => {
      nextTick(() => {
        targetRect.value = contentRef.value?.getBoundingClientRect() || null;
        popupRect.value = popupRef.value?.getBoundingClientRect() || null;
        calculateAndSetPosition();
      });
    };

    const handlePopupShowup = () => {
      visible.value = true;
    };

    const handlePopupHidden = () => {
      visible.value = false;
    };

    const calculateAndSetPosition = () => {
      if (!targetRect.value || !popupRect.value) return;

      let top = 0;
      let left = 0;

      const target = targetRect.value;
      const popup = popupRect.value;

      switch (__props.position) {
        case 'top':
          top = target.top - popup.height - margin.value;
          left = target.left + target.width / 2 - popup.width / 2;
          break;
        case 'bottom':
          top = target.bottom + margin.value;
          left = target.left + target.width / 2 - popup.width / 2;
          break;
        case 'left':
          top = target.top + target.height / 2 - popup.height / 2;
          left = target.left - popup.width - margin.value;
          break;
        case 'right':
          top = target.top + target.height / 2 - popup.height / 2;
          left = target.right + margin.value;
          break;
      }

      popupStyle.top = `${top}px`;
      popupStyle.left = `${left}px`;
    };

    onMounted(() => {
      updatePosition();
    });

    watch(visible, newVisible => newVisible && updatePosition());

    watch(
      () => __props.position,
      () => visible.value && updatePosition()
    );

    watch(
      () => __props.margin,
      () => visible.value && updatePosition()
    );
    watch(
      () => __props.alignment,
      () => visible.value && updatePosition()
    );
    watch(
      () => __props.content,
      () => visible.value && updatePosition()
    );

    expose({
      show: handlePopupShowup,
      hide: handlePopupHidden,
    });

    return {
      visible,
      contentRef,
      popupRef,
      targetRect,
      popupRect,
      popupStyle,
      handlePopupShowup,
      handlePopupHidden,
    };
  },
});
</script>
