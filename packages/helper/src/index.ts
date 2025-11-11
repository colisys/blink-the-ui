// @ts-nocheck
import { useI18n } from 'vue-i18n';
import { getCurrentInstance, type AppContext } from 'vue';

export function slice<T>(array: T[], start: number, length: number): T[] {
  const result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = array[start + i];
  }
  return result;
}

export function sliceRight<T>(array: T[], start: number, length: number): T[] {
  const result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = array[start + i];
  }
  return result;
}

export function* window<T>(array: T[], size: number): Generator<T[]> {
  for (let i = 0; i <= array.length - size; i++) {
    yield slice(array, i, size);
  }
}

export function getColor(color: string, def: string = 'rgba(0, 0, 0, 0.1)') {
  switch (color) {
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
      return def;
  }
}

let appContext: AppContext | undefined = undefined;
export function useApplicationContext() {
  if (appContext) return appContext;
  const instance = getCurrentInstance();
  appContext = instance.appContext;
  return appContext;
}

export function setApplicationContext(context: AppContext) {
  appContext = context;
}

export function getI18n(): (key: string, _default?: string) => string {
  let t: ReturnType<typeof useI18n>['t'];
  try {
    const i18n = useI18n();
    t = i18n.t;
  } catch (e) {
    t = (key: string, _default?: string) => _default ?? key;
    console.warn('i18n not available, using default implementation');
  }
  return t;
}

export { FormBuilder } from './builder/form';
