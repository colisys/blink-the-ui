<template>
  <div class="blink-quote-wrapper">
    <div class="blink-quote">
      <slot name="title">
        <div class="blink-quote-title" v-if="title">
          {{ title }}
        </div>
      </slot>
      <slot></slot>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import './index.less';

.@{quote-class-name} {
  background-color: v-bind(backgroundColor);
}
</style>

<script lang="ts">
import { getColor } from '@blink-the-ui/helper';
import type { GlobalVisual } from '@blink-the-ui/theme';
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
      default: 'default',
    },
  },
  setup(props) {
    const title = computed(() => props.title);
    const backgroundColor = computed(() => getColor(props.visual));
    return { title, backgroundColor };
  },
});
</script>
