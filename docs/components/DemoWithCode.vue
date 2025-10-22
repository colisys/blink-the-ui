<template>
  <div
    class="blink-demo-wrapper"
    :class="[`blink-demo-wrapper-showcode${isShowCode ? '' : '-no'}`]"
  >
    <div class="blink-demo-demo">
      <slot></slot>
    </div>
    <div class="blink-demo-tools">
      <BlinkGroup justify="end" alignment="center" fill>
        <BlinkButton size="xs" visual="primary" @click="handleCheckCode"
          >查看代码</BlinkButton
        >
      </BlinkGroup>
    </div>
    <BlinkAnimFade animation-name="scale">
      <div class="blink-demo-code" v-show="isShowCode">
        <slot name="code"></slot>
      </div>
    </BlinkAnimFade>
  </div>
</template>

<style lang="less">
.blink-demo {
  transition: all 0.3s ease;

  &-wrapper {
    &-showcode-no {
      .blink-demo-tools {
        border-bottom-left-radius: 8px !important;
        border-bottom-right-radius: 8px !important;
      }
    }
  }

  &-demo {
    background-color: #fdfdfd;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    padding: 10px 12px;
    position: relative;
  }

  &-tools {
    padding: 12px;
    background-color: color-mix(
      in srgb,
      var(--global-light-color) 100%,
      var(--global-dark-color) 5%
    );
  }

  &-code {
    [class*='language-'] {
      margin: unset !important;
      border-radius: 0 !important;
      border-bottom-left-radius: 8px !important;
      border-bottom-right-radius: 8px !important;
    }
  }
}
</style>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { BlinkButton, BlinkGroup } from '@blink-the-ui/components';
import { BlinkAnimFade } from '@blink-the-ui/animations';

export default defineComponent({
  name: 'DemoWithCode',
  components: {
    BlinkButton,
    BlinkGroup,
    BlinkAnimFade,
  },
  setup() {
    const isShowCode = ref(false);
    const handleCheckCode = () => (isShowCode.value = !isShowCode.value);

    return { isShowCode, handleCheckCode };
  },
});
</script>
