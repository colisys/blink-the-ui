import { createVNode, render, type App, type VNode } from 'vue';
import BlinkOverlay from './overlay';
import BlinkOverlayDialog from './dialog';
import './index.less';
import {
  setApplicationContext,
  useApplicationContext,
} from '@blink-the-ui/helper';

interface OverlayInstance {
  vnode: VNode;
  container: HTMLElement;
  destroy: () => void;
}

export type OverlayOptions = {
  id?: string;
  title?: string;
  body?: string;
  minable?: boolean;
  maxable?: boolean;
  resizable?: boolean;
  display?: {
    header?: boolean;
    title?: boolean;
    default?: boolean;
    footer?: boolean;
    'header-buttons'?: boolean;
    'footer-buttons'?: boolean;
  };
  slot?: {
    header?: () => VNode | string;
    title?: () => VNode | string;
    default?: () => VNode | string;
    footer?: () => VNode | string;
    'header-buttons'?: () => VNode[];
    'footer-buttons'?: () => VNode[];
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

const createOverlay = (
  options?: OverlayOptions,
  doRender: Boolean = true
): OverlayInstance => {
  const interceptOnClose = options?.listener?.onClose;
  const container = document.createElement('div');
  const slots = {
    header: () => options?.slot?.header,
    title: options?.slot?.title,
    default: options?.slot?.default,
    footer: () => options?.slot?.footer,
    'header-buttons': options?.slot?.['header-buttons'],
    'footer-buttons': options?.slot?.['footer-buttons'],
  };

  // 使用应用上下文创建 VNode
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

  vnode.appContext = useApplicationContext();
  doRender && document.body.appendChild(container) && render(vnode, container);

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

export { BlinkOverlay, BlinkOverlayDialog, createOverlay };

export default {
  install: (app: App) => {
    setApplicationContext(app._context);

    import('./overlay').then(mod =>
      app.component(mod.default.name!, mod.default)
    );
    import('./dialog').then(mod =>
      app.component(mod.default.name!, mod.default)
    );
  },
};
