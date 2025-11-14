type GlobalVisual =
  | 'default'
  | 'primary'
  | 'danger'
  | 'warning'
  | 'success'
  | 'info'
  | 'light'
  | 'dark';

type GlobalComponentSize = 'xs' | 'sm' | 'md' | 'lg';
type GlobalTheme = 'light' | 'dark';
type GlobalPosition = 'top' | 'right' | 'bottom' | 'left';

export type { GlobalVisual, GlobalComponentSize, GlobalTheme, GlobalPosition };
