import { type Composer } from 'vue-i18n';
import en from './locales/en/common.json';
import type { App } from 'vue';
export type SupportedLocale = 'en' | 'zh';
export type LocaleMessages = typeof en;
export declare const locales: Record<SupportedLocale, LocaleMessages>;
export declare const i18n: import('vue-i18n').I18n<
  Record<
    SupportedLocale,
    {
      common: {
        confirm: string;
        cancel: string;
        save: string;
        delete: string;
        edit: string;
        add: string;
        close: string;
      };
      components: {
        button: {
          submit: string;
          reset: string;
        };
        alert: {
          info: string;
          warning: string;
          error: string;
          success: string;
        };
        input: {
          placeholder: string;
        };
        switch: {
          on: string;
          off: string;
        };
      };
    }
  >,
  {},
  {},
  string,
  false
>;
export type I18nInstance = typeof i18n;
export type { Composer };
declare const _default: {
  install: (app: App) => void;
};
export default _default;
