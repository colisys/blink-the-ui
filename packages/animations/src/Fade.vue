<template>
  <Transition
    :name="animName"
    @before-enter="e => $emit('before-show', e)"
    @enter="e => $emit('onshow', e)"
    @after-enter="e => $emit('after-show', e)"
    @before-leave="e => $emit('before-leave', e)"
    @leave="e => $emit('leave', e)"
    @after-leave="e => $emit('after-leave', e)"
    @leave-cancelled="e => $emit('show-cancelled', e)"
    @enter-cancelled="e => $emit('enter-cancelled', e)"
  >
    <slot></slot>
  </Transition>
</template>

<style lang="less">
@import './fade.less';
</style>

<script lang="ts">
import { computed, defineComponent, Transition, type PropType } from 'vue';

export default defineComponent({
  name: 'BlinkAnimFade',
  props: {
    animationName: {
      type: String as PropType<
        | 'simple'
        | 'scale'
        | 'scale-reverse'
        | 'slide'
        | 'slide-reverse'
        | 'from'
        | 'to'
      >,
      default: 'simple',
    },
  },
  emits: [
    'before-show',
    'onshow',
    'after-show',
    'before-leave',
    'leave',
    'after-leave',
    'show-cancelled',
    'enter-cancelled',
  ],
  setup(props) {
    const animName = computed(() => props.animationName + '-fade');
    return {
      animName,
    };
  },
});
</script>
