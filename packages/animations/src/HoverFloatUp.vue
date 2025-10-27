<template>
  <div
    :class="[
      `blink-anim-hover-float-up--side-${side}`,
      `blink-anim-hover-float-up--shadow-${shadow}`,
    ]"
  >
    <slot></slot>
  </div>
</template>

<style lang="less" scoped>
.blink-anim-hover-float-up {
  transition: all 0.3s ease-in-out;

  &--side-up {
    & > :hover {
      transform: translateY(-4px) translateZ(-10px);
    }

    & > :active {
      transform: translateY(0) translateZ(0);
    }
  }

  &--side-down {
    & > :hover {
      transform: translateY(4px) translateZ(-10px);
    }
    & > :active {
      transform: translateY(0) translateZ(0);
    }
  }

  &--side-left {
    & > :hover {
      transform: translateX(-4px) translateZ(10px);
    }
    & > :active {
      transform: translateX(0) translateZ(0);
    }
  }

  &--side-right {
    & > :hover {
      transform: translateX(4px) translateZ(10px);
    }
    & > :active {
      transform: translateX(0) translateZ(0);
    }
  }

  &--shadow-top {
    & > :hover {
      box-shadow: 0 -4px 2px rgba(0, 0, 0, 0.2);
    }
    & > :active {
      box-shadow: none;
    }
  }

  &--shadow-bottom {
    & > :hover {
      box-shadow: 0 4px 2px rgba(0, 0, 0, 0.2);
    }
    & > :active {
      box-shadow: none;
    }
  }

  &--shadow-left {
    & > :hover {
      box-shadow: -4px 0 2px rgba(0, 0, 0, 0.2);
    }
    & > :active {
      box-shadow: none;
    }
  }

  &--shadow-right {
    & > :hover {
      box-shadow: 4px 0 2px rgba(0, 0, 0, 0.2);
    }
    & > :active {
      box-shadow: none;
    }
  }
}
</style>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';

export default defineComponent({
  name: 'BlinkAnimHoverFloatUp',
  props: {
    side: {
      type: String as PropType<'top' | 'bottom' | 'left' | 'right'>,
      default: 'top',
    },
    shadow: {
      type: String as PropType<'top' | 'bottom' | 'left' | 'right'>,
      default: 'bottom',
    },
  },
  setup() {
    return {};
  },
});
</script>
