<template>
  <div class="blink-overlays-dropdown-wrapper">
    <div
      @click="handleDropdownTrigger"
      ref="targetRef"
      class="blink-overlays-dropdown"
    >
      <slot></slot>
    </div>
    <keep-alive>
      <blink-anim-fade>
        <div
          v-if="visible"
          ref="innerRef"
          class="blink-overlays-dropdown-inner"
        >
          <slot name="dropdown"></slot>
        </div>
      </blink-anim-fade>
    </keep-alive>
  </div>
</template>

<style lang="less" scoped>
@import './index.less';
</style>

<script lang="ts">
import { getElementRelativePosition } from '@blink-the-ui/helper';
import { defineComponent, nextTick, onMounted, ref, watch } from 'vue';
import { BlinkAnimFade } from '@blink-the-ui/animations';

export default defineComponent({
  name: 'BlinkOverlayDropdown',
  components: {
    BlinkAnimFade,
  },
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
  },
  emits: {
    show: () => true,
    hide: () => true,
  },

  setup(props, { emit, expose }) {
    const targetRef = ref<HTMLElement | null>(null);
    const innerRef = ref<HTMLElement | null>(null);
    const visible = ref(props.visible);

    const handleDropdownTrigger = (e: MouseEvent) => {
      e.stopImmediatePropagation();
      e.stopPropagation();
      visible.value = !visible.value;
    };

    watch(
      () => props.visible,
      newVal => (visible.value = newVal)
    );

    watch(
      () => visible.value,
      newVal => (newVal ? emit('show') : emit('hide'))
    );

    const updatePosition = () => {
      let { top, left } = getElementRelativePosition(
        window,
        targetRef.value!,
        innerRef.value!,
        'bottom',
        8
      );

      console.log(top, left);
      return true;
    };

    onMounted(() => {
      nextTick(() => {
        updatePosition();
      });
    });

    expose({
      show: () => (visible.value = true),
      hide: () => (visible.value = false),
    });

    return {
      targetRef,
      innerRef,
      handleDropdownTrigger,
      visible,
    };
  },
});
</script>
