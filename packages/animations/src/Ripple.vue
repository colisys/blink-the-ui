<template>
  <div
    ref="rippleContainer"
    class="blink-ripple-container"
    :class="[
      { 'blink-ripple-flexible': flexible },
      `blink-ripple-shrink-${shrink}`,
    ]"
    @mousedown="createRipple"
    @touchstart="createRipple"
  >
    <slot v-bind="$attrs"></slot>
    <div
      v-for="(ripple, index) in ripples"
      :key="index"
      class="blink-ripple"
      :class="rippleClass"
      :style="{
        left: ripple.x + 'px',
        top: ripple.y + 'px',
        width: ripple.size + 'px',
        height: ripple.size + 'px',
        backgroundColor: color || defaultColor,
      }"
      @animationend="handleRippleEnd"
      @animationcancel="handleRippleEnd"
    ></div>
  </div>
</template>

<style lang="less">
@blink-ripple-class-name: ~'blink-ripple';

@keyframes blink-ripple-effect {
  0% {
    transform: scale(0);
    opacity: 0.6;
  }

  100% {
    transform: scale(2);
    opacity: 0;
  }
}

.@{blink-ripple-class-name} {
  position: absolute;
  border-radius: 100%;
  pointer-events: none;
  animation-name: blink-ripple-effect;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  animation-duration: v-bind(duration);

  &-container {
    border-radius: var(--global-border-radius);
    position: relative;
    overflow: hidden;
    display: inline-block;
    width: auto;
    height: auto;

    &.@{blink-ripple-class-name}-flexible {
      display: block;
      width: 100%;
      height: 100%;
    }

    &.@{blink-ripple-class-name}-shrink-no {
      flex-shrink: 0;
    }
  }
}
</style>

<script lang="ts">
import {
  defineComponent,
  ref,
  onBeforeUnmount,
  computed,
  type PropType,
} from 'vue';
import { getColor } from '@blink-the-ui/helper';

interface Ripple {
  x: number;
  y: number;
  size: number;
  scale: number;
  opacity: number;
}

export default defineComponent({
  name: 'BlinkAnimRipple',
  props: {
    color: {
      type: String,
      default: '',
    },
    duration: {
      type: Number,
      default: 600,
    },
    centered: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String as PropType<
        'primary' | 'danger' | 'warning' | 'success' | 'info' | 'dark' | 'light'
      >,
      default: 'light',
    },
    flexible: {
      type: Boolean,
      default: false,
    },
    shrink: {
      type: String as PropType<'yes' | 'no'>,
      default: 'no',
    },
  },
  emits: ['ripple-start', 'ripple-end'],
  setup(props, { emit }) {
    const rippleContainer = ref<HTMLElement | null>(null);
    const ripples = ref<Ripple[]>([]);
    const duration = computed(() => `${props.duration}ms`);
    const shrink = computed(() => props.shrink);
    const rippleClass = computed(() => {
      return props.type ? `ripple-${props.type}` : '';
    });

    const defaultColor = computed(() => getColor(props.color));

    const createRipple = (event: MouseEvent | TouchEvent) => {
      emit('ripple-start');

      const container = rippleContainer.value;
      if (!container) return;

      const rect = container.getBoundingClientRect();

      let x = 0;
      let y = 0;

      if (props.centered) {
        x = rect.width / 2;
        y = rect.height / 2;
      } else if (event instanceof MouseEvent) {
        x = event.clientX - rect.left;
        y = event.clientY - rect.top;
      } else if (event instanceof TouchEvent) {
        // @ts-ignore
        const touch = event.touches[0] || event.changedTouches[0] || null;
        if (touch) {
          x = touch.clientX - rect.left;
          y = touch.clientY - rect.top;
        } else {
          x = rect.width / 2;
          y = rect.height / 2;
        }
      }

      const size = Math.max(rect.width, rect.height);
      const ripple: Ripple = {
        x: x - size / 2,
        y: y - size / 2,
        size: size,
        scale: 0,
        opacity: 0.5,
      };

      ripples.value.push(ripple);

      setTimeout(() => {
        ripples.value = ripples.value.filter(r => r !== ripple);
      }, props.duration);
    };

    const handleRippleEnd = (e: AnimationEvent) => {
      const target = e.target as HTMLElement;
      emit('ripple-end', e);
      target.remove();
    };

    onBeforeUnmount(() => {
      ripples.value = [];
    });

    return {
      shrink,
      duration,
      rippleContainer,
      ripples,
      rippleClass,
      defaultColor,
      createRipple,
      createRippleByCoords: (x: number, y: number) => {
        createRipple({
          clientX: x,
          clientY: y,
        } as MouseEvent);
      },
      handleRippleEnd,
    };
  },
});
</script>
