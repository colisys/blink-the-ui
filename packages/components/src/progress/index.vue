<template>
  <div
    class="blink-progress-wrapper"
    :class="[{ 'blink-progress--with-text': showProgressText }]"
  >
    <div class="blink-progress-background"></div>
    <div
      class="blink-progress-bar"
      :class="{
        striped: striped,
        animated: animated,
        infinite: infinite,
      }"
      :style="[{ width: infinite ? '30%' : `${value}%` }]"
    ></div>
    <div class="blink-progress-progress-text">{{ `${value}%` }}</div>
  </div>
</template>

<style lang="less" scoped>
@import './index.less';

.@{progress-class-name} {
  &-background {
    background-color: color-mix(
      in srgb,
      v-bind(color) 20%,
      var(--global-light-color) 80%
    );
  }

  &-bar {
    background-color: v-bind(color);
  }
}
</style>

<script lang="ts">
import { defineComponent, ref, watch, type PropType } from 'vue';
import type { GlobalVisual } from '../types';
import { getColor } from '../../../helper/src';
import { BlinkProgressController } from '.';

export default defineComponent({
  name: 'BlinkProgress',
  props: {
    color: {
      type: String as PropType<GlobalVisual>,
      default: 'primary',
    },
    value: {
      type: Number,
      default: 10,
    },
    showProgressText: {
      type: Boolean,
      default: true,
    },
    striped: {
      type: Boolean,
      default: false,
    },
    animated: {
      type: Boolean,
      default: false,
    },
    infinite: {
      type: Boolean,
      default: false,
    },
    updater: {
      type: Function as PropType<
        (_controller: BlinkProgressController) => void
      >,
      default: null,
    },
  },
  emits: ['update'],
  setup(props, { emit }) {
    const color = ref(getColor(props.color));
    const value = ref(props.value);
    const infinite = ref<boolean>(props.infinite);
    const animated = ref<boolean>(props.animated);
    const striped = ref<boolean>(props.striped);
    const showProgressText = ref<boolean>(props.showProgressText);

    watch(
      () => props.value,
      newValue => (value.value = newValue)
    );

    const controller = {
      suspend: () => (infinite.value = false),
      resume: () => (infinite.value = true),
      update: (newValue: number) =>
        (value.value = newValue) && emit('update', newValue),
      clear: () => (value.value = 0),
      finish: () => (value.value = 100),
    };

    if (props.updater) {
      props.updater(controller);
    }

    return {
      color,
      value,
      infinite,
      animated,
      striped,
      showProgressText,
    };
  },
});
</script>
