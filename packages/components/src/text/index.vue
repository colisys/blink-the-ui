<template>
  <div
    class="blink-text"
    :class="{
      [`blink-text--${type}`]: type,
      [`blink-text--allowSelect`]: allowSelect,
    }"
    @click="handleClick"
  >
    <slot></slot>
  </div>
</template>

<style scoped lang="less">
@import './index.less';
</style>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
export type TextType = 'default' | 'link' | 'disabled';
export type TextTriggering = 'click' | 'dblclick' | 'contextmenu';

export default defineComponent({
  name: 'BlinkText',
  props: {
    type: {
      type: String as PropType<TextType>,
      default: 'default',
    },
    allowSelect: {
      type: Boolean,
      default: true,
    },
    triggering: {
      type: String as PropType<TextTriggering>,
      default: 'click',
    },
  },
  emits: {
    click: (__event: MouseEvent) => true,
  },
  setup(props, { emit }) {
    return {
      handleClick(event: MouseEvent) {
        if (event.type === props.triggering) {
          event.preventDefault();
          emit('click', event);
        }
      },
    };
  },
});
</script>
