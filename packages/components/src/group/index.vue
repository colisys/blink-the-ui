<template>
  <div class="blink-group-wrapper">
    <slot name="title" v-if="$slots.title">
      <div class="blink-group-title">{{ title }}</div>
      <hr />
    </slot>
    <div
      class="blink-group"
      :class="{
        [`blink-group--${direction}`]: direction,
        [`blink-group--justify-${justify}`]: justify,
        [`blink-group--align-${alignment}`]: alignment,
        [`blink-group--${wrap}`]: wrap,
        [`blink-group--fill`]: fill,
      }"
      :style="{
        gap,
      }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import './index.less';
</style>

<script lang="ts">
import { defineComponent, ref, watch, type PropType } from 'vue';

export type GroupDirection = 'horizontal' | 'vertical';
export type GroupJustify =
  | 'start'
  | 'end'
  | 'center'
  | 'between'
  | 'around'
  | 'stretch'
  | 'evenly'
  | 'self-start'
  | 'self-end'
  | 'baseline'
  | 'initial'
  | 'inherit'
  | 'unset';
export type GroupAlign =
  | 'start'
  | 'end'
  | 'center'
  | 'baseline'
  | 'stretch'
  | 'self-start'
  | 'self-end'
  | 'initial'
  | 'inherit'
  | 'unset'
  | 'flex-start';

export default defineComponent({
  name: 'BlinkGroup',
  props: {
    title: {
      type: String,
      default: '',
    },
    direction: {
      type: String as PropType<GroupDirection>,
      default: 'horizontal',
    },
    justify: {
      type: String as PropType<GroupJustify>,
      default: 'start',
    },
    alignment: {
      type: String as PropType<GroupAlign>,
      default: 'start',
    },
    wrap: {
      type: Boolean,
      default: false,
    },
    gap: { type: String, default: '4px' },
    fill: { type: Boolean, default: false },
  },
  setup(props) {
    const direction = ref<GroupDirection>(props.direction);
    const justify = ref<GroupJustify>(props.justify);
    const align = ref<GroupAlign>(props.alignment);
    const wrap = ref<boolean>(props.wrap);
    const fill = ref<boolean>(props.fill);
    const gap = ref<string>(props.gap);
    const title = ref<string>(props.title);

    watch(
      () => props.direction,
      val => (direction.value = val)
    );
    watch(
      () => props.justify,
      val => (justify.value = val)
    );
    watch(
      () => props.alignment,
      val => (align.value = val)
    );
    watch(
      () => props.wrap,
      val => (wrap.value = val)
    );
    watch(
      () => props.fill,
      val => (fill.value = val)
    );
    watch(
      () => props.gap,
      val => (gap.value = val)
    );
    watch(
      () => props.title,
      val => (title.value = val)
    );

    return {
      direction,
      justify,
      align,
      wrap,
      fill,
      gap,
      title,
    };
  },
});
</script>
