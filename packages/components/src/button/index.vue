<template>
  <button
    class="blink-button"
    :class="{
      [`blink-button--visual-${visual}`]: visual,
      [`blink-button--outline-${outline}`]: outline,
      [`blink-button--disabled`]: disabled,
      [`blink-button--size-${size}`]: size,
      [`blink-button--focus-shadow`]: focusShadow,
    }"
    :disabled="disabled"
    @click="handleClick"
    @dblclick="handleDblClick"
    @contextmenu="handleContextMenu"
    type="button"
    v-bind="$attrs"
  >
    <slot name="prefix"></slot>
    <slot></slot>
    <slot name="suffix"></slot>
  </button>
</template>

<style lang="less">
@import './override.less';
</style>

<style lang="less" scoped>
@import './index.less';
</style>

<script lang="ts">
import {
  defineComponent,
  ref,
  watch,
  type ButtonHTMLAttributes,
  type PropType,
} from 'vue';
import { type BlinkButtonOutline, type BlinkButtonVisual } from '.';
import type { GlobalComponentSize } from '../types';

const disabled = ref(false);
const type = ref<BlinkButtonVisual>('default');
const size = ref<GlobalComponentSize>('md');

export default defineComponent({
  name: 'BlinkButton',
  props: {
    outline: {
      type: String as PropType<BlinkButtonOutline>,
      default: 'ghost',
    },
    visual: {
      type: String as PropType<BlinkButtonVisual>,
      default: 'default',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String as PropType<GlobalComponentSize>,
      default: 'md',
    },
    type: {
      type: String as PropType<ButtonHTMLAttributes['type']>,
      default: 'button',
    },
    focusShadow: {
      type: Boolean,
      default: false,
    },
  },
  emits: {
    click: (__event: Event) => true,
    clickWhenDisabled: (__event: Event) => true,
    dblclick: (__event: Event) => true,
    contextmenu: (__event: Event) => true,
  },
  setup(props, { emit }) {
    watch(
      () => props.disabled,
      val => (disabled.value = val)
    );
    watch(
      () => props.visual,
      val => (type.value = val)
    );
    watch(
      () => props.size,
      val => (size.value = val)
    );

    const handleClick = (event: MouseEvent) => {
      if (props.disabled) {
        emit('clickWhenDisabled', event);
      } else {
        emit('click', event);
      }
    };

    const handleDblClick = (event: MouseEvent) => {
      emit('dblclick', event);
    };

    const handleContextMenu = (event: MouseEvent) => {
      emit('contextmenu', event);
    };

    return {
      handleClick,
      handleDblClick,
      handleContextMenu,
    };
  },
});
</script>
