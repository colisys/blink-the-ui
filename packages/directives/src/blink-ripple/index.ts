import type { DirectiveBinding, ObjectDirective, VNode } from 'vue';
import './index.less';

type RippleDirectiveOptions = {
  color?: string;
  duration?: number;
  centered?: boolean;
  type?:
    | 'primary'
    | 'danger'
    | 'warning'
    | 'success'
    | 'info'
    | 'dark'
    | 'light';
  flexible?: boolean;
};

const eventHandlers = new WeakMap<
  HTMLElement,
  {
    mousedown: (event: MouseEvent) => void;
    touchstart: (event: TouchEvent) => void;
  }
>();

const handleMouseDown = (
  event: MouseEvent,
  binding: DirectiveBinding,
  __vnode: VNode
) => {
  const el = event.currentTarget as HTMLElement;
  const options: RippleDirectiveOptions = binding.value || {};

  const rippleContainer = el;

  const ripple = document.createElement('div');
  ripple.className = 'blink-ripple';

  const type = options.type || 'light';
  if (type) {
    ripple.classList.add(`ripple-${type}`);
  }

  const rect = rippleContainer.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const size = Math.max(rect.width, rect.height);

  ripple.style.left = `${x - size / 2}px`;
  ripple.style.top = `${y - size / 2}px`;
  ripple.style.width = `${size}px`;
  ripple.style.height = `${size}px`;
  ripple.style.backgroundColor = options.color || getDefaultColor(type);
  ripple.style.animationDuration = `${options.duration || 600}ms`;
  ripple.style.borderRadius = '100%';
  ripple.style.pointerEvents = 'none';
  ripple.style.position = 'absolute';
  ripple.style.animationName = 'blink-ripple-effect';
  ripple.style.animationTimingFunction = 'ease-out';
  ripple.style.animationFillMode = 'forwards';

  rippleContainer.appendChild(ripple);

  const handleAnimationEnd = () => {
    ripple.remove();
  };

  ripple.addEventListener('animationend', handleAnimationEnd);
  ripple.addEventListener('animationcancel', handleAnimationEnd);

  setTimeout(() => {
    ripple.remove();
  }, options.duration || 600);
};

const getDefaultColor = (type: string) => {
  switch (type) {
    case 'primary':
      return 'var(--global-primary-color)';
    case 'danger':
      return 'var(--global-danger-color)';
    case 'warning':
      return 'var(--global-warning-color)';
    case 'success':
      return 'var(--global-success-color)';
    case 'info':
      return 'var(--global-info-color)';
    case 'dark':
      return 'var(--global-dark-color)';
    default:
      return 'rgba(0, 0, 0, 0.1)';
  }
};

const handleTouchStart = (
  event: TouchEvent,
  binding: DirectiveBinding,
  vnode: VNode
) => {
  // @ts-ignore
  const touch = event.touches[0] || event.changedTouches[0] || null;
  if (touch) {
    const mouseEvent = new MouseEvent('mousedown', {
      clientX: touch.clientX,
      clientY: touch.clientY,
    });
    handleMouseDown(mouseEvent, binding, vnode);
  }
};

const mounted = (el: HTMLElement, binding: DirectiveBinding, vnode: VNode) => {
  const wrapper = document.createElement('div');
  wrapper.className = 'blink-ripple-container';
  
  const options: RippleDirectiveOptions = binding.value || {};
  if (options.flexible) {
    wrapper.classList.add('blink-ripple-flexible');
  }

  if (el.parentNode) {
    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);
  }

  const handlers = {
    mousedown: (event: MouseEvent) => handleMouseDown(event, binding, vnode),
    touchstart: (event: TouchEvent) => handleTouchStart(event, binding, vnode),
  };

  eventHandlers.set(wrapper, handlers);

  wrapper.addEventListener('mousedown', handlers.mousedown);
  wrapper.addEventListener('touchstart', handlers.touchstart);
};

const unmounted = (el: HTMLElement) => {
  const handlers = eventHandlers.get(el);
  if (handlers) {
    el.removeEventListener('mousedown', handlers.mousedown);
    el.removeEventListener('touchstart', handlers.touchstart);
    eventHandlers.delete(el);
  }
  
  if (el.parentNode && el.classList.contains('blink-ripple-container')) {
    const parent = el.parentNode;
    const childNodes = Array.from(el.childNodes);
    childNodes.forEach(node => parent.insertBefore(node, el));
    parent.removeChild(el);
  }
};

const RippleDirective: ObjectDirective = {
  mounted,
  unmounted,
};

export default RippleDirective;
