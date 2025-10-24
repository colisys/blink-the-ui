<template>
  <div class="blink-switch-wrapper">
    <slot name="prefix"></slot>
    <div
      class="blink-switch"
      :class="{
        [`blink-switch--${size}`]: size,
        [`blink-switch--${checkState}`]: checkState,
      }"
      @click="handleClick"
      @dblclick="handleClick"
      @contextmenu="handleClick"
    >
      <input
        type="checkbox"
        class="blink-switch-input"
        :checked="checked"
        @change="handleChange"
      />
      <div class="blink-switch-handle">
        <slot name="handle-icon"></slot>
      </div>
    </div>
    <slot name="suffix"></slot>
  </div>
</template>

<style lang="less" scoped>
@import './index.less';

.@{switch-class-name} {
  &--checked {
    background-color: v-bind(activeColor);
  }

  background-color: v-bind(inactiveColor);
}
</style>

<script lang="ts">
import { computed, defineComponent, type PropType, ref, watch } from 'vue';

export type SwitchSize = 'xs' | 'sm' | 'md' | 'lg';
export type SwitchCheckState = 'checked' | 'unchecked';
export type SwitchTriggering = 'click' | 'dblclick' | 'contextmenu';

export default defineComponent({
  name: 'BlinkSwitch',
  props: {
    size: {
      type: String as PropType<SwitchSize>,
      default: 'md',
    },
    checked: {
      type: Boolean,
      default: false,
    },
    triggering: {
      type: String as PropType<SwitchTriggering>,
      default: 'click',
    },
    activeColor: {
      type: String,
      default: 'var(--global-primary-color)',
    },
    inactiveColor: {
      type: String,
      default: 'var(--global-light-color)',
    },
  },
  emits: {
    change: (__value: boolean) => true,
    click: (__event: MouseEvent | TouchEvent) => true,
  },
  setup(props, { emit }) {
    const isChecked = ref(props.checked);
    const checkState = computed(() =>
      isChecked.value ? 'checked' : 'unchecked'
    );
    const activeColor = computed(() => props.activeColor);
    const inactiveColor = computed(() => props.inactiveColor);

    watch(
      () => props.checked,
      value => (isChecked.value = value)
    );

    return {
      isChecked,
      checkState,
      activeColor,
      inactiveColor,
      handleClick(event: MouseEvent | TouchEvent) {
        if (event.type === props.triggering) {
          event.preventDefault();
          isChecked.value = !isChecked.value;
          emit('change', isChecked.value);
          emit('click', event);
        }
      },
      handleChange(event: Event) {
        const target = event.target as HTMLInputElement;
        isChecked.value = target.checked;
        emit('change', target.checked);
      },
    };
  },
});
</script>
