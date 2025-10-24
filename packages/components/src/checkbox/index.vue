<template>
  <div class="blink-checkbox-wrapper">
    <div
      class="blink-checkbox"
      :class="[
        `blink-checkbox--size-${size}`,
        checked ? 'blink-checkbox-checked' : '',
      ]"
      @click="handleCheck"
    >
      <BlinkAnimFade animation-name="scale">
        <i class="blink-checkbox-checked-icon" v-if="checked"></i>
        <i class="blink-checkbox-inde-icon" v-if="indeterminate"></i>
      </BlinkAnimFade>
    </div>
    <input
      class="blink-checkbox-input"
      type="checkbox"
      v-model="checked"
      v-bind="$attrs"
    />
  </div>
</template>

<style lang="less" scoped>
@import './index.less';
</style>

<script lang="ts">
import { defineComponent, ref, watch, type PropType } from 'vue';
import type { GlobalComponentSize } from '../types';
import { BlinkAnimFade } from '@blink-the-ui/animations';

export default defineComponent({
  name: 'BlinkCheckbox',
  components: {
    BlinkAnimFade,
  },
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
    indeterminate: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String as PropType<GlobalComponentSize>,
      default: 'md',
    },
  },
  emits: ['change', 'update:checked', 'update:indeterminate'],
  setup(props, { emit }) {
    const checked = ref(props.checked);
    const indeterminate = ref(props.indeterminate);

    watch(
      () => props.checked,
      value => (checked.value = value)
    );

    watch(
      () => checked.value,
      newValue => {
        emit('change', newValue);
        emit('update:checked', newValue);
      }
    );

    watch(
      () => props.indeterminate,
      value => (indeterminate.value = value)
    );

    watch(
      () => indeterminate.value,
      value => {
        emit('update:indeterminate', value);
      }
    );

    const handleCheck = () =>
      (checked.value = !checked.value) && (indeterminate.value = false);

    return {
      checked,
      handleCheck,
    };
  },
});
</script>
