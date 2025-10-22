import DefaultTheme from 'vitepress/theme';

// 导入组件库组件
import BlinkUi from '@blink-the-ui/components';
import { EnhanceAppContext } from 'vitepress';
import DemoWithCode from '../../components/DemoWithCode.vue';

export default {
  ...DefaultTheme,
  enhanceApp(ctx: EnhanceAppContext) {
    DefaultTheme.enhanceApp(ctx);

    // 注册Demo组件，显示一个代码块和对应的预览
    ctx.app.component('DemoCode', DemoWithCode);

    // 注册组件库组件
    BlinkUi.install(ctx.app);
  },
};
