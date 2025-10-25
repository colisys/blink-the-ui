import type { GlobalVisual } from '@blink-the-ui/theme';
import { defineComponent, Fragment, h, ref, type PropType } from 'vue';
import { BlinkButton, BlinkInput } from '@blink-the-ui/components';
import { createOverlay } from '..';

const BlinkOverlayDialog = defineComponent({
  name: 'BlinkOverlayDialog',
  props: {
    title: {
      type: String,
      default: '',
    },
    type: {
      type: String as PropType<
        'simple' | 'confirm' | 'input' | 'password' | 'alert'
      >,
      default: 'simple',
    },
    content: {
      type: String,
      default: '',
    },
    customize: {
      type: Object as PropType<{
        icon?: string;
        confirmText?: string;
        confirmVisual?: GlobalVisual;
        cancelText?: string;
        cancelVisual?: GlobalVisual;
      }>,
      default: () => ({}),
    },
    clickClose: {
      type: Boolean,
      default: true,
    },
  },
  emits: {
    confirm: (__value: string) => true,
    cancel: (__value: string) => true,
    close: () => true,
  },
  setup(props, { emit, slots }) {
    const inputValue = ref<string>('');

    const btnCancel = h(
      // @ts-ignore
      BlinkButton,
      {
        type: 'button',
        onClick: () => {
          emit('cancel', inputValue.value);
          props.clickClose && vnode.component?.exposed?.handleClose();
        },
        visual: props.customize.cancelVisual ?? 'default',
      },
      {
        default: () => props.customize.cancelText ?? 'Cancel',
      }
    );
    const btnConfirm = h(
      // @ts-ignore
      BlinkButton,
      {
        type: 'button',
        visual: props.customize.confirmVisual ?? 'primary',
        onClick: () => {
          emit('confirm', inputValue.value);
          props.clickClose && vnode.component?.exposed?.handleClose();
        },
      },
      {
        default: () => props.customize.confirmText ?? 'Confirm',
      }
    );

    const { vnode } = createOverlay({
      title: props.title,
      body: props.content,
      minable: false,
      maxable: false,
      resizable: false,
      slot: {
        'footer-buttons': () => [btnCancel, btnConfirm],
        default: () => {
          if (props.type === 'input' || props.type === 'password') {
            return h(BlinkInput, {
              'onUpdate:modelValue': (val: string) => (inputValue.value = val),
              password: props.type === 'password',
              placeholder: props.content,
            });
          }

          const defaultSlot = slots.default?.();
          if (Array.isArray(defaultSlot)) {
            return h(Fragment, {}, defaultSlot);
          }

          return defaultSlot ?? '';
        },
      },
    });

    return () => null;
  },
});

export { BlinkOverlayDialog };
export default BlinkOverlayDialog;
