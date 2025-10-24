<template>
  <div :class="colClass">
    <slot></slot>
  </div>
</template>

<style lang="less" scoped>
@import './index.less';
</style>

<script lang="ts">
import { defineComponent, type PropType, computed } from 'vue';
import { type GlobalComponentSize, type ColSizeDescriptor } from '../types';

type ColSize = number | ColSizeDescriptor;

export default defineComponent({
  name: 'BlinkCol',
  props: {
    xs: {
      type: [Number, Object] as PropType<ColSize>,
      default: undefined,
    },
    sm: {
      type: [Number, Object] as PropType<ColSize>,
      default: undefined,
    },
    md: {
      type: [Number, Object] as PropType<ColSize>,
      default: undefined,
    },
    lg: {
      type: [Number, Object] as PropType<ColSize>,
      default: undefined,
    },
    span: {
      type: Number,
      default: 24,
    },
    offset: {
      type: Number,
      default: 0,
    },
    push: {
      type: Number,
      default: 0,
    },
    pull: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const colClass = computed(() => {
      const classes = ['blink-layout-col'];

      // 处理各尺寸属性
      const sizes: GlobalComponentSize[] = ['xs', 'sm', 'md', 'lg'];

      sizes.forEach(size => {
        const sizeProp = props[size];
        if (sizeProp !== undefined) {
          if (typeof sizeProp === 'number') {
            // 直接指定数字的情况
            classes.push(`blink-layout-col-${size}-${sizeProp}`);
          } else {
            // 指定对象的情况
            const { span = 24, offset = 0, push = 0, pull = 0 } = sizeProp;
            classes.push(`blink-layout-col-${size}-${span}`);

            if (offset > 0) {
              classes.push(`blink-layout-col-${size}-offset-${offset}`);
            }

            if (push > 0) {
              classes.push(`blink-layout-col-${size}-push-${push}`);
            }

            if (pull > 0) {
              classes.push(`blink-layout-col-${size}-pull-${pull}`);
            }
          }
        }
      });

      // 处理默认属性
      if (
        props.xs === undefined &&
        props.sm === undefined &&
        props.md === undefined &&
        props.lg === undefined
      ) {
        classes.push(`blink-layout-col-md-${props.span}`);

        if (props.offset > 0) {
          classes.push(`blink-layout-col-md-offset-${props.offset}`);
        }

        if (props.push > 0) {
          classes.push(`blink-layout-col-md-push-${props.push}`);
        }

        if (props.pull > 0) {
          classes.push(`blink-layout-col-md-pull-${props.pull}`);
        }
      }

      return classes;
    });

    return {
      colClass,
    };
  },
});
</script>
