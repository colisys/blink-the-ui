import { defineComponent } from 'vue';
import { createOverlay } from '..';

const BlinkOverlayToast = defineComponent({
  name: 'BlinkOverlayToast',
  props: {
    title: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    },
  },
  emits: {
    close: () => true,
  },
  setup(props, { emit }) {
    createOverlay({
      slot: {
        title: () => props.title,
        default: () => props.content,
      },
      display: {
        footer: false,
      },
      listener: {
        onClose: () => emit('close'),
      },
      pos_size: {
        
      },
    });
  },
});

export { BlinkOverlayToast };
export default BlinkOverlayToast;
