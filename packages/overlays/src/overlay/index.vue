<template>
  <BlinkAnimFade @after-leave="$el.remove()" animation-name="scale">
    <div
      :id="id"
      ref="overlayWrapperRef"
      v-if="!isClosing && visible"
      class="blink-overlay-wrapper"
      :class="[
        `blink-overlay-wrapper-moving${isMoving ? '' : '-no'}`,
        `blink-overlay-wrapper-resizing${isResizing ? '' : '-no'}`,
        {
          [`blink-overlay-wrapper-max`]: isMax,
          [`blink-overlay-wrapper-min`]: isMin,
          [`blink-overlay-wrapper-active`]: isActive,
        },
      ]"
      :style="{ zIndex: currentZIndex }"
    >
      <div class="blink-overlay-container">
        <div
          class="blink-overlay-header"
          @mousedown="handleStartMoving"
          @mouseleave="handleEndMoving"
          @mouseup="handleEndMoving"
          @mousemove="handleMoving"
          @dblclick="handleMax"
          v-if="display.header"
        >
          <template v-if="slot?.header">
            <component
              v-for="(item, index) in Array.isArray(slot.header())
                ? slot.header()
                : [slot.header()]"
              :key="index"
              :is="item"
            />
          </template>
          <slot name="header" v-else>
            <template v-if="display.title">
              <template v-if="slot?.title">
                <component
                  v-for="(item, index) in Array.isArray(slot.title())
                    ? slot.title()
                    : [slot.title()]"
                  :key="index"
                  :is="item"
                />
              </template>
              <div class="blink-overlay-title" v-else>
                <template v-if="slot?.title">
                  <component
                    v-for="(item, index) in Array.isArray(slot.title())
                      ? slot.title()
                      : [slot.title()]"
                    :key="index"
                    :is="item"
                  />
                </template>
                <template v-else>{{ title }}</template>
              </div>
            </template>
            <template v-if="display['header-buttons']">
              <template v-if="slot?.['header-buttons']">
                <component
                  v-for="(item, index) in slot['header-buttons']()"
                  :key="index"
                  :is="item"
                />
              </template>
              <slot name="header-buttons" v-else>
                <div class="blink-overlay-header-buttons">
                  <span v-if="minable && resizable" @click="handleMin">{{
                    isMin ? '&plus;' : '&minus;'
                  }}</span>
                  <span v-if="closeable" @click="handleClose">&times;</span>
                </div>
              </slot>
            </template>
          </slot>
        </div>
        <template v-if="display.default">
          <div class="blink-overlay-body" v-show="!isMin">
            <template v-if="slot?.default">
              <component
                v-for="(item, index) in Array.isArray(slot.default())
                  ? slot.default()
                  : [slot.default()]"
                :key="index"
                :is="item"
              />
            </template>
            <slot v-else>{{ body }}</slot>
          </div>
        </template>
        <template v-if="display.footer">
          <div class="blink-overlay-footer" v-show="!isMin">
            <slot name="footer">
              <slot name="footer-title"> </slot>
              <template v-if="display['footer-buttons']">
                <div class="blink-overlay-footer-buttons">
                  <template v-if="slot?.['footer-buttons']">
                    <component
                      v-for="(item, index) in slot['footer-buttons']()"
                      :key="index"
                      :is="item"
                    />
                  </template>
                  <slot name="footer-buttons" v-else>
                    <BlinkButton
                      visual="primary"
                      size="sm"
                      @click="handleClose"
                    >
                      OK
                    </BlinkButton>
                  </slot>
                </div>
              </template>
            </slot>
            <div
              class="blink-overlay-footer-resize-handler"
              :class="[
                { [`blink-overlay-footer-resize-handler-active`]: isResizing },
              ]"
              v-if="!isMax && resizable"
              @mousedown="handleStartResizing"
              @mouseup="handleEndResizing"
              @mousemove="handleResizing"
              @mouseleave="handleEndResizing"
            ></div>
          </div>
        </template>
      </div>
      <div
        class="blink-overlay-right-resize-handler"
        v-if="!isMax && resizable"
      ></div>
      <div
        class="blink-overlay-bottom-resize-handler"
        v-if="!isMax && resizable"
      ></div>
      <div
        class="blink-overlay-left-resize-handler"
        v-if="!isMax && resizable"
      ></div>
      <div
        class="blink-overlay-top-resize-handler"
        v-if="!isMax && resizable"
      ></div>
    </div>
  </BlinkAnimFade>
</template>

<style lang="less" scoped>
@import './index.less';
</style>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  onUnmounted,
  ref,
  type PropType,
} from 'vue';
import { BlinkAnimFade } from '@blink-the-ui/animations';
import { BlinkButton } from '@blink-the-ui/components';

let maxZIndex = 1000;

export default defineComponent({
  name: 'BlinkOverlay',
  components: {
    BlinkAnimFade: BlinkAnimFade as any,
    BlinkButton: BlinkButton as any,
  },
  props: {
    closeable: {
      type: Boolean,
      default: true,
    },
    maxable: {
      type: Boolean,
      default: true,
    },
    minable: {
      type: Boolean,
      default: true,
    },
    resizable: {
      type: Boolean,
      default: true,
    },
    allowOverflow: {
      type: Boolean,
      default: true,
    },
    refParent: {
      type: Object as PropType<HTMLElement | null>,
      default: null,
    },
    id: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    body: {
      type: String,
      default: '',
    },
    slot: {
      type: Object as PropType<{
        header?: Function;
        title?: Function;
        content?: Function;
        footer: Function;
        'header-buttons'?: Function;
        'footer-buttons'?: Function;
        default?: Function;
      }>,
      default: () => ({}),
    },
    display: {
      type: Object as PropType<{
        header: boolean;
        title: boolean;
        default: boolean;
        footer: boolean;
        'header-buttons': boolean;
        'footer-buttons': boolean;
      }>,
      default: () => ({
        header: true,
        title: true,
        default: true,
        footer: true,
        'header-buttons': true,
        'footer-buttons': true,
      }),
    },
    pos_size: {
      type: Object as PropType<{
        width?: number;
        height?: number;
        left?: number;
        top?: number;
        right?: number;
        bottom?: number;
      }>,
      default: () => ({}),
    },
    listener: {
      type: Object as PropType<{
        onClose?: (_id: string) => void;
        onMax?: (_id: string) => void;
        onMin?: (_id: string) => void;
        onRestored?: (_id: string) => void;
      }>,
      default: () => ({}),
    },
  },
  emits: {
    closed: (_id: string) => true,
    maxed: (_id: string) => true,
    mined: (_id: string) => true,
    restored: (_id: string) => true,
  },
  setup(props, { emit, expose }) {
    const id = ref<string>(
      props.id ||
        `blink-overlay-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`
    );

    const isActive = ref<boolean>(true);
    const overlayWrapperRef = ref<HTMLElement | null>(null);
    const bodyClientHeight = ref<number>(
      props.refParent?.clientHeight ?? window.innerHeight
    );
    const bodyClientWidth = ref<number>(
      props.refParent?.clientWidth ?? window.innerWidth
    );
    const isMax = ref<boolean>(false);
    const isMin = ref<boolean>(false);
    const isClosing = ref<boolean>(false);
    const visible = ref<boolean>(false);
    // 添加当前z-index的响应式引用
    const currentZIndex = ref<number>(maxZIndex++);
    const memo = ref<{
      isLastMax: boolean;
      isLastMin: boolean;
      left: number;
      top: number;
      width: number;
      height: number;
    }>({
      isLastMax: false,
      isLastMin: false,
      left: props.pos_size?.left ?? 0,
      top: props.pos_size?.top ?? 0,
      width: bodyClientWidth.value,
      height: bodyClientHeight.value,
    });
    const isMoving = ref<boolean>(false);

    if (props.pos_size.right && props.pos_size.width)
      props.pos_size.left = bodyClientWidth.value - props.pos_size.width;

    const handleStartMoving = () => {
      if (isMax.value) return;
      isMoving.value = true;
      // 当开始移动时，将当前overlay置于最前
      currentZIndex.value = ++maxZIndex;
    };

    const handleEndMoving = () => {
      if (!isMoving.value) return;
      isMoving.value = false;
    };

    const handleMoving = (ev: MouseEvent) => {
      if (!isMoving.value || isClosing.value) return;
      ev.stopImmediatePropagation();
      ev.preventDefault();
      const moveX = ev.movementX;
      const moveY = ev.movementY;
      overlayWrapperRef.value!.style.left = `${overlayWrapperRef.value!.offsetLeft + moveX}px`;
      overlayWrapperRef.value!.style.top = `${overlayWrapperRef.value!.offsetTop + moveY}px`;
    };

    const isResizing = ref<boolean>(false);
    const handleStartResizing = () => {
      if (isMax.value || isMin.value || isClosing.value) return;
      isResizing.value = true;
      currentZIndex.value = ++maxZIndex;
    };

    const handleEndResizing = () => {
      if (!isResizing.value || isClosing.value) return;
      isResizing.value = false;
    };

    const handleResizing = (ev: MouseEvent) => {
      if (!isResizing.value || isClosing.value || !props.resizable) return;
      ev.preventDefault();
      const moveX = ev.movementX;
      const moveY = ev.movementY;
      overlayWrapperRef.value!.style.width = `${overlayWrapperRef.value!.clientWidth + moveX}px`;
      overlayWrapperRef.value!.style.height = `${overlayWrapperRef.value!.clientHeight + moveY}px`;
    };

    const handleMax = () => {
      if (isClosing.value || isMin.value || !props.maxable) return;
      const { width, height, left, top, isLastMax } = memo.value;
      if (isLastMax) {
        isMax.value = false;
        overlayWrapperRef.value!.style.left = `${left}px`;
        overlayWrapperRef.value!.style.top = `${top}px`;
        overlayWrapperRef.value!.style.width = `${width}px`;
        overlayWrapperRef.value!.style.height = `${height}px`;
        memo.value.isLastMax = false;
        props.listener.onRestored?.(id.value);
        emit('restored', id.value);
      } else {
        isMax.value = true;
        memo.value.isLastMax = true;
        memo.value.left = overlayWrapperRef.value!.offsetLeft;
        memo.value.top = overlayWrapperRef.value!.offsetTop;
        memo.value.width = overlayWrapperRef.value!.offsetWidth;
        memo.value.height = overlayWrapperRef.value!.offsetHeight;
        overlayWrapperRef.value!.style.left = '0px';
        overlayWrapperRef.value!.style.top = '0px';
        overlayWrapperRef.value!.style.width = `${bodyClientWidth.value}px`;
        overlayWrapperRef.value!.style.height = `${bodyClientHeight.value}px`;
        props.listener.onMax?.(id.value);
        emit('maxed', id.value);
      }
    };

    const handleMin = () => {
      if (isClosing.value || !props.minable) return;
      const { width, height, left, top, isLastMin } = memo.value;
      if (isLastMin) {
        isMin.value = false;
        overlayWrapperRef.value!.style.left = `${left}px`;
        overlayWrapperRef.value!.style.top = `${top}px`;
        overlayWrapperRef.value!.style.width = `${width}px`;
        overlayWrapperRef.value!.style.height = `${height}px`;
        memo.value.isLastMin = false;
        props.listener.onRestored?.(id.value);
        emit('restored', id.value);
      } else {
        isMin.value = true;
        memo.value.isLastMin = true;
        memo.value.left = overlayWrapperRef.value!.offsetLeft;
        memo.value.top = overlayWrapperRef.value!.offsetTop;
        memo.value.width = overlayWrapperRef.value!.offsetWidth;
        memo.value.height = overlayWrapperRef.value!.offsetHeight;
        overlayWrapperRef.value!.style.left = `0px`;
        overlayWrapperRef.value!.style.height = `40px`;
        overlayWrapperRef.value!.style.width = `300px`;
        overlayWrapperRef.value!.style.top = `${bodyClientHeight.value - 40}px`;
        props.listener.onMin?.(id.value);
        emit('mined', id.value);
      }
    };

    const listenBodyResize = () => {
      bodyClientHeight.value = window.innerHeight;
      bodyClientWidth.value = window.innerWidth;

      if (isMax.value) {
        overlayWrapperRef.value!.style.left = '0px';
        overlayWrapperRef.value!.style.top = '0px';
        overlayWrapperRef.value!.style.width = `${bodyClientWidth.value}px`;
        overlayWrapperRef.value!.style.height = `${bodyClientHeight.value}px`;
      }
    };

    const listenBlur = (ev: Event) => {
      // TODO: 检查元素焦点
      isActive.value = ev.type == 'focus';
    };

    // 添加点击事件处理函数，用于将overlay置于最前
    const handleClick = () => {
      currentZIndex.value = ++maxZIndex;
    };

    const handleClose = () => {
      isClosing.value = true;
      props.listener?.onClose?.(id.value);
      emit('closed', id.value);
    };

    onMounted(() => {
      window.addEventListener('resize', listenBodyResize);
      setTimeout(() => (visible.value = true));
      overlayWrapperRef.value?.addEventListener('blur', listenBlur);
      overlayWrapperRef.value?.addEventListener('mouseout', listenBlur);
      overlayWrapperRef.value?.addEventListener('mousedown', handleClick);

      setTimeout(() => {
        overlayWrapperRef.value!.style.width =
          overlayWrapperRef.value!.clientWidth + 'px';
        overlayWrapperRef.value!.style.height =
          overlayWrapperRef.value!.clientHeight + 'px';
        overlayWrapperRef.value!.style.left =
          overlayWrapperRef.value!.clientLeft + 'px';
        overlayWrapperRef.value!.style.top =
          overlayWrapperRef.value!.clientTop + 'px';
      }, 0);
    });

    onUnmounted(() => {
      window.removeEventListener('resize', listenBodyResize);
      overlayWrapperRef.value?.removeEventListener('blur', listenBlur);
      overlayWrapperRef.value?.removeEventListener('mousedown', handleClick);
    });

    expose({
      handleClose,
      handleMin,
      handleMax,
    });

    return {
      id,
      visible,
      overlayWrapperRef,
      handleStartMoving,
      handleEndMoving,
      handleMoving,
      handleStartResizing,
      handleEndResizing,
      handleResizing,
      handleMax,
      handleMin,
      handleClose,
      bodyClientHeight,
      bodyClientWidth,
      isMoving,
      isResizing,
      isMin,
      isMax,
      isClosing,
      isActive,
      currentZIndex, // 返回currentZIndex以便在模板中使用
    };
  },
});
</script>
