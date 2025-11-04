import { h, type App } from 'vue';
import { BlinkIcon } from './component';

const tsxMods = import.meta.glob('./icons/*.tsx', { eager: true });
const vueMods = import.meta.glob('./icons/*.vue', { eager: true });
const pngMods = import.meta.glob('./icons/*.png', { eager: true });
const svgMods = import.meta.glob('./icons/*.svg', { eager: true });

export default {
  install: (app: App) => {
    Object.entries({ ...tsxMods, ...vueMods }).forEach(([__path, module]) => {
      const component = (module as any).default;
      const name =
        component.name.charAt(0).toUpperCase() + component.name.slice(1);
      app.component(`Blink${name}`, component);
    });

    Object.entries({ ...pngMods, ...svgMods }).forEach(([__path, module]) => {
      const component = (module as any).default;
      const originalName = __path.split('/').pop()!.split('.')[0]!;
      const name = originalName.charAt(0).toUpperCase() + originalName.slice(1);
      app.component(`Blink${name}`, {
        render() {
          return h(
            BlinkIcon,
            {},
            {
              default: () =>
                h('img', {
                  src: component,
                }),
            }
          );
        },
      });
    });
  },
};
