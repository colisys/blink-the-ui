export * from '@blink-the-ui/theme';

export type HorizontalAlignment =
  | 'start'
  | 'center'
  | 'end'
  | 'between'
  | 'around'
  | 'evenly';

export type VerticalAlignment =
  | 'start'
  | 'center'
  | 'end'
  | 'baseline'
  | 'stretch';

export type ColSizeDescriptor = {
  span?: number;
  offset?: number;
  push?: number;
  pull?: number;
};
