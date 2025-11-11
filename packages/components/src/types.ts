export * from '@blink-the-ui/theme';

export type InputPasswordCheckingTrigger = 'hold' | 'click' | 'hover';
export type BlinkProgressController = {
  suspend: () => void;
  resume: () => void;
  update: (_value: number) => void;
  clear: () => void;
  finish: () => void;
};
