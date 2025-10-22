<template>
  <BlinkAnimFade @after-leave="$el.remove()">
    <div
      ref="self"
      class="blink-alert"
      :class="{
        [`blink-alert--visual-${visual}`]: visual,
        [`blink-alert--size-${size}`]: size,
      }"
      v-if="!closing && visible"
      :style="{ backgroundColor: color }"
    >
      <slot name="prefix"></slot>
      <div class="blink-alert-content">
        <slot></slot>
      </div>
      <slot name="suffix"></slot>
      <span v-if="closable" @click="handleClickClose" style="user-select: none"
        >&times;</span
      >
    </div>
  </BlinkAnimFade>
</template>

<style lang="less" scoped>
@import './index.less';
</style>

<script lang="ts">
import { defineComponent, ref, watch, onMounted, type PropType } from 'vue';
import { BlinkAnimFade } from '@blink-the-ui/animations';
import type { GlobalVisual, GlobalComponentSize } from '..';

export default defineComponent({
  name: 'BlinkAlert',
  components: { BlinkAnimFade },
  props: {
    visual: {
      type: String as PropType<GlobalVisual>,
      default: 'default',
    },
    closable: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String as PropType<GlobalComponentSize>,
      default: 'md',
    },
    checkClosable: {
      type: [Boolean, Function] as PropType<boolean | (() => boolean)>,
      default: true,
    },
    color: {
      type: String,
      default: undefined,
    },
  },
  emits: {
    closed: () => true,
  },
  setup(props, { emit }) {
    const closing = ref(false);
    const visible = ref(false);
    const isClosable = ref(false);

    isClosable.value =
      typeof props.checkClosable === 'function'
        ? (props.checkClosable() ?? true)
        : props.checkClosable;

    watch(
      () => props.checkClosable,
      val =>
        (isClosable.value = typeof val === 'function' ? (val() ?? true) : val)
    );

    onMounted(() => {
      visible.value = true;
    });

    return {
      closing,
      visible,
      isClosable,
      handleClickClose: () =>
        isClosable.value && (closing.value = true) && emit('closed'),
    };
  },
});
</script>
