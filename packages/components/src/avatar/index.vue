<template>
  <div class="blink-avatar-wrapper">
    <div class="blink-avatar-container">
      <img
        v-if="currentSrc.length > 0"
        class="blink-avatar-img"
        :src="currentSrc"
        :alt="alt"
        @error="handleImgError"
      />
    </div>
    <span class="blink-avatar-indicator">{{ firstLetter }}</span>
  </div>
</template>

<style lang="less" scoped>
@import './index.less';
</style>

<script lang="ts">
import { computed, defineComponent, ref, watch, type PropType } from 'vue';
import type { GlobalComponentSize } from '../types';

export default defineComponent({
  name: 'BlinkAvatar',
  props: {
    src: {
      type: String,
      default: '',
    },
    fallback: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: '',
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String as PropType<GlobalComponentSize>,
      default: 'md',
    },
  },
  setup(props) {
    const currentSrc = ref(props.src);
    const firstLetter = computed(() => props.alt.charAt(0));

    const handleImgError = () => {
      if (props.fallback) {
        if (props.fallback === currentSrc.value) {
          currentSrc.value = '';
        } else {
          currentSrc.value = props.fallback;
        }
      }
    };

    watch(
      () => props.src,
      newSrc => (currentSrc.value = newSrc)
    );

    return {
      currentSrc,
      firstLetter,
      handleImgError,
    };
  },
});
</script>
