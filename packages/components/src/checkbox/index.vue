<template>
  <div class="blink-checkbox-wrapper">
    <div
      class="blink-checkbox"
      :class="[
        `blink-checkbox--size-${size}`,
        indeterminate ? `blink-checkbox-indeterminate` : '',
        checked ? 'blink-checkbox-checked' : '',
      ]"
      @click="handleCheck"
    >
      <BlinkAnimFade animation-name="scale">
        <i class="blink-checkbox-checked-icon" v-if="checked">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M5 12l5 6L20 6"
              fill="none"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              stroke-dasharray="22"
              stroke-dashoffset="22"
              class="checkmark-path"
            />
          </svg>
        </i>
        <i class="blink-checkbox-inde-icon" v-if="indeterminate && !checked">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M5 12h14"
              stroke="white"
              stroke-width="2"
              stroke-dasharray="14"
              stroke-dashoffset="14"
              class="indeterminate-path"
            />
          </svg>
        </i>
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

@keyframes blink-checkbox-checked-icon-animation {
  0% {
    opacity: 0;
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes blink-checkbox-inde-icon-animation {
  0% {
    opacity: 0;
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes checkmark-animation {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes indeterminate-animation {
  to {
    stroke-dashoffset: 0;
  }
}

.blink-checkbox-checked-icon,
.blink-checkbox-inde-icon {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.blink-checkbox-checked-icon {
  animation: blink-checkbox-checked-icon-animation 0.2s ease-out;
}

.blink-checkbox-inde-icon {
  animation: blink-checkbox-inde-icon-animation 0.2s ease-out;
}

.checkmark-path {
  animation: checkmark-animation 0.3s cubic-bezier(0.65, 0, 0.25, 1) forwards;
  transform: translate(0px, 0px);
}

.indeterminate-path {
  animation: indeterminate-animation 0.2s cubic-bezier(0.65, 0, 0.25, 1)
    forwards;
  stroke: var(--global-primary-color);
}

.blink-checkbox-checked-icon svg,
.blink-checkbox-inde-icon svg {
  width: 100%;
  height: 100%;
}
</style>

<script lang="ts">
import { defineComponent, ref, watch, type PropType } from 'vue';
import type { GlobalVisual, GlobalComponentSize } from '@blink-the-ui/theme';
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
    visual: {
      type: String as PropType<GlobalVisual>,
      default: 'primary',
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
