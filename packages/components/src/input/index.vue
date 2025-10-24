<template>
  <div class="blink-input-wrapper">
    <slot name="prepend"></slot>
    <slot name="prefix"></slot>
    <div
      class="blink-input"
      :class="{
        [`blink-input-disabled`]: disabled,
        [`blink-input--${size}`]: size,
        [`blink-input--clearable`]: clearable,
        [`blink-input--${type}`]: type,
      }"
    >
      <input
        ref="inputRef"
        :name="name"
        :type="password ? 'password' : type"
        :value="value"
        :disabled="disabled"
        :placeholder="placeholder"
        :maxlength="maxLength"
        @input="handleInput"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
        v-bind="$attrs"
      />
    </div>
    <div class="blink-input-toolbox">
      <span
        class="blink-input-toolbox-clear"
        v-if="value.length > 0"
        @click="handleClear"
        >&#215;</span
      >
      <span
        class="blink-input-toolbox-password"
        v-if="(value.length > 0 && memo.password) || memo.type == 'password'"
        @mousedown="handleHoverCheck"
        @mouseup="handleHoverCheck"
        @click="handleHoverCheck"
        @mouseenter="handleHoverCheck"
        @mouseleave="handleHoverCheck"
        >{{ password ? passwordHiddenIcon : passwordShownIcon }}</span
      >
    </div>
    <slot name="suffix"></slot>
    <slot name="append"></slot>
  </div>
</template>

<style lang="less" scoped>
@import './index.less';
</style>

<script lang="ts">
import {
  defineComponent,
  type InputTypeHTMLAttribute,
  ref,
  watch,
  type PropType,
  computed,
} from 'vue';
import type { GlobalComponentSize } from '../types';
import type { BlinkInputPasswordCheckingTrigger } from '.';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'BlinkInput',
  props: {
    name: {
      type: String,
      default: '',
    },
    password: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String as PropType<GlobalComponentSize>,
      default: 'md',
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    maxLength: {
      type: Number,
      default: undefined,
    },
    type: {
      type: String as PropType<InputTypeHTMLAttribute>,
      default: 'text',
    },
    passwordPeakingTrigger: {
      type: String as PropType<BlinkInputPasswordCheckingTrigger>,
      default: 'hold',
    },
    passwordHiddenIcon: {
      type: String,
      default: '👁️',
    },
    passwordShownIcon: {
      type: String,
      default: '🔒',
    },
  },
  emits: ['input', 'change', 'clear', 'focus', 'blur', 'update:modelValue'],
  setup(props, { emit }) {
    const { t } = useI18n();
    const password = ref<boolean>(false);
    const placeholder = ref<String>('');
    const value = ref<String>('');
    const disabled = ref<boolean>(false);
    const size = ref<GlobalComponentSize>('md');
    const clearable = ref<boolean>(false);
    const maxLength = ref<Number | undefined>(undefined);
    const type = ref<InputTypeHTMLAttribute>('text');
    const passwordPeakingTrigger =
      ref<BlinkInputPasswordCheckingTrigger>('hold');
    const inputRef = ref<HTMLElement | null>(null);

    password.value = props.password;
    placeholder.value = props.placeholder || t('components.input.placeholder');
    value.value = props.value;
    disabled.value = props.disabled;
    size.value = props.size;
    clearable.value = props.clearable;
    maxLength.value = props.maxLength;
    type.value = props.type;
    passwordPeakingTrigger.value = props.passwordPeakingTrigger;

    const memo = { password: password.value, type: type.value };

    const toolShowupCount = computed(
      () =>
        (clearable.value && value.value.length ? 1 : 0) +
        (memo.password || memo.type === 'password' ? 1 : 0)
    );

    const inputWidth = computed(
      () => `calc(100% - ${(toolShowupCount.value + 1) * 21}px)`
    );

    watch(
      () => props.password,
      val => (password.value = val)
    );

    watch(
      () => props.placeholder,
      val => (placeholder.value = val)
    );

    watch(
      () => props.value,
      val => (value.value = val)
    );

    watch(
      () => props.disabled,
      val => (disabled.value = val)
    );

    watch(
      () => props.size,
      val => (size.value = val)
    );

    watch(
      () => props.clearable,
      val => (clearable.value = val)
    );

    watch(
      () => props.maxLength,
      val => (maxLength.value = val)
    );

    watch(
      () => props.type,
      val => (type.value = val)
    );

    watch(
      () => props.passwordPeakingTrigger,
      val => (passwordPeakingTrigger.value = val)
    );

    const handleInput = (e: Event) => {
      value.value = (e.target as HTMLInputElement).value;
      emit('input', (e.target as HTMLInputElement).value);
      emit('update:modelValue', value.value);
    };

    const handleChange = (e: Event) => {
      emit('change', (e.target as HTMLInputElement).value);
    };

    const handleClear = () => {
      value.value = '';
      emit('clear');
      emit('update:modelValue', value.value);
    };

    const handleFocus = (e: Event) => {
      emit('focus', (e.target as HTMLInputElement).value);
    };

    const handleBlur = (e: Event) => {
      emit('blur', (e.target as HTMLInputElement).value);
    };

    const handleHoverCheck = (e: Event) => {
      switch (passwordPeakingTrigger.value) {
        case 'hold':
          if (e.type === 'mousedown') {
            password.value = false;
            type.value = 'text';
          }

          if (e.type === 'mouseup' || e.type === 'mouseleave') {
            password.value = memo.password;
            type.value = memo.type;
          }
          break;

        case 'click':
          if (e.type === 'mousedown') {
            password.value = false;
            type.value = 'text';
          }

          if (e.type === 'mouseup') {
            password.value = memo.password;
            type.value = memo.type;
          }
          break;

        case 'hover':
          if (e.type === 'mouseenter') {
            password.value = false;
            type.value = 'text';
          }

          if (e.type === 'mouseleave') {
            password.value = memo.password;
            type.value = memo.type;
          }
          break;
      }
    };

    return {
      inputRef,
      password,
      placeholder,
      value,
      disabled,
      size,
      clearable,
      maxLength,
      type,
      inputWidth,
      memo,
      t,
      handleInput,
      handleChange,
      handleClear,
      handleFocus,
      handleBlur,
      handleHoverCheck,
    };
  },
});
</script>
