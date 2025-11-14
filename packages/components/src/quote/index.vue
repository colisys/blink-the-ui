<template>
  <div
    class="blink-quote-wrapper"
    :class="[`blink-quote--position-${position}`]"
  >
    <div class="blink-quote">
      <slot name="title">
        <div class="blink-quote-title" v-if="title">
          {{ title }}
        </div>
      </slot>
      <div class="blink-quote-content">
        <slot></slot>
      </div>
      <div class="blink-quote-decor">
        <slot name="decor"></slot>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import './index.less';

.@{quote-class-name} {
  &-wrapper {
    box-shadow: v-bind(style);
  }
}
</style>

<script lang="ts">
import { getColor } from '@blink-the-ui/helper';
import type { GlobalPosition, GlobalVisual } from '@blink-the-ui/theme';
import { computed, defineComponent, type PropType } from 'vue';

export default defineComponent({
  name: 'BlinkQuote',
  props: {
    title: {
      type: String,
      default: '',
    },
    visual: {
      type: String as PropType<GlobalVisual>,
      default: 'primary',
    },
    position: {
      type: String as PropType<GlobalPosition>,
      default: 'left',
    },
  },
  setup(props) {
    const title = computed(() => props.title);
    const visual = computed(() => getColor(props.visual));
    const position = computed(() => props.position);
    const style = computed(() => {
      let x =
        position.value === 'left' ? 4 : position.value === 'right' ? -4 : 0;
      let y =
        position.value === 'top' ? 4 : position.value === 'bottom' ? -4 : 0;
      return `inset ${x}px ${y}px 0 0 ${visual.value}`;
    });
    return { title, visual, position, style };
  },
});
</script>
