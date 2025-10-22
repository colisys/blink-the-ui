import { createVNode, h, render, type App, type VNode } from 'vue';
import BlinkOverlay from './overlay';
import './index.less';

interface OverlayInstance {
  vnode: VNode;
  container: HTMLElement;
  destroy: () => void;
}

export type OverlayOptions = {
  id?: string;
  title?: string;
  body?: string;
  slot?: {
    header?: () => VNode;
    title?: () => VNode;
    content?: () => VNode;
    footer?: () => VNode;
  };
  pos_size?: {
    width?: number;
    height?: number;
    left?: number;
    top?: number;
  };
  listener?: {
    onClose?: (_id: string) => void;
    onMax?: (_id: string) => void;
    onMin?: (_id: string) => void;
    onRestored?: (_id: string) => void;
  };
};

const createOverlay = (options?: OverlayOptions): OverlayInstance => {
  const interceptOnClose = options?.listener?.onClose;
  const container = document.createElement('div');
  const slots = {
    header: options?.slot?.header,
    title: options?.slot?.title,
    default: options?.slot?.content,
    footer: options?.slot?.footer,
  };

  const vnode = createVNode(
    BlinkOverlay,
    {
      ...options,
      listener: {
        onClose: (id: string) => {
          interceptOnClose?.(id);
          setTimeout(() => {
            destroy();
          }, 300);
        },
      },
    },
    slots
  );

  render(vnode, container);
  document.body.appendChild(container);
  const destroy = () => {
    render(null, container);
    if (container.parentNode) {
      container.parentNode.removeChild(container);
    }
  };

  return {
    vnode,
    container,
    destroy,
  };
};

export { BlinkOverlay, createOverlay };

export default {
  install: (app: App) => {
    import('./overlay').then(mod =>
      app.component(mod.default.name!, mod.default)
    );
  },
};
