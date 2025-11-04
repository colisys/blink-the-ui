<template>
  <form class="blink-form" v-bind="$attrs" @submit="handleSubmit">
    <slot></slot>
  </form>
</template>

<style lang="less" scoped>
@import './index.less';
</style>

<script lang="ts">
import { defineComponent, onUnmounted, provide, ref, type PropType } from 'vue';
import Schema, {
  type RuleItem,
  type Rules,
  type ValidateError,
} from 'async-validator';
export const BlinkFormContainerSymbol = Symbol.for('BlinkFormContainer');
export type BlinkFormItems = Array<BlinkFormItemInterface>;
export interface BlinkFormItemInterface {
  name: string;
  value: () => any;
  validate?: RuleItem;
}

export default defineComponent({
  name: 'BlinkForm',
  props: {
    rules: {
      type: Object as PropType<Rules>,
      default: () => ({}),
    },
  },
  emits: {
    submit: (__data: Record<string, any>) => true,
    validateFailed: (__errors: ValidateError[]) => true,
  },
  setup(props, { emit }) {
    const formItems = ref<BlinkFormItems>([]);
    provide(BlinkFormContainerSymbol, formItems);

    const handleSubmit = (e: SubmitEvent) => {
      e.preventDefault();
      e.stopImmediatePropagation();

      const data: Record<string, any> = {};
      const schema = { ...props.rules };
      for (const item of formItems.value) {
        data[item.name] = item.value();
        if (item.validate) schema[item.name] = item.validate;
      }

      const validator = new Schema(schema as Rules);

      validator.validate(data, (errors: ValidateError[] | null) => {
        !errors && emit('submit', data);
        errors && emit('validateFailed', errors);
      });
    };

    onUnmounted(() => {
      formItems.value = [];
    });

    return {
      handleSubmit,
    };
  },
});
</script>
