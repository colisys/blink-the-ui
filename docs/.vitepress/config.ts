import { defineConfig } from 'vitepress';
import container from 'markdown-it-container';
import Token from 'markdown-it/lib/token.mjs';
import { renderer } from '../plugins/demo_code';

export default defineConfig({
  title: 'Blink UI',
  description: 'A Vue 3 based UI component library',
  srcDir: 'src',

  markdown: {
    config: md => {
      md.use(container, 'demo', {
        render: renderer,
      });

      md.core.ruler.push('pre_create_demo_script', state => {
        state.tokens
          .filter(
            t => t.type === 'fence' && t.tag === 'code' && t.info === 'vue'
          )
          .forEach(t => {
            // 预处理所有的脚本，生成Token并且修改流
            const script =
              t.content.match(/<script[^>]*>([\s\S]*)<\/script>/) || [];
            const token = new Token('html_block', '', 0);
            token.content = script.at(0) ?? '';
            token.block = true;
            token.hidden = false;
            token.markup = '';
            state.tokens.push(token);
          });
      });
    },
  },

  locales: {
    root: {
      label: 'Simplified Chinese',
      lang: 'zh-CN',
      themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          { text: '指南', link: '/guide/' },
          { text: '组件', link: '/components/' },
          { text: '示例', link: '/examples/' },
        ],
        sidebar: {
          '/guide/': [
            {
              text: '介绍',
              items: [{ text: '开始使用', link: '/guide/' }],
            },
            {
              text: '安装',
              items: [{ text: '安装', link: '/guide/installation' }],
            },
            {
              text: '使用',
              items: [{ text: '使用', link: '/guide/usage' }],
            },
          ],
          '/components/': [
            {
              text: '组件',
              items: [
                { text: 'Button 按钮', link: '/components/button' },
                { text: 'Input 输入框', link: '/components/input' },
                { text: 'Switch 开关', link: '/components/switch' },
                { text: 'Alert 提示', link: '/components/alert' },
                { text: 'Text 文本', link: '/components/text' },
                { text: 'Label 标签', link: '/components/label' },
                { text: 'Group 组合', link: '/components/group' },
              ],
            },
          ],
          '/examples/': [
            {
              text: '示例',
              items: [
                { text: '表单示例', link: '/examples/form' },
                { text: '布局示例', link: '/examples/layout' },
              ],
            },
          ],
        },
        socialLinks: [
          { icon: 'github', link: 'https://github.com/your-org/blink-the-ui' },
        ],
      },
    },
    en: {
      label: 'English',
      lang: 'en',

      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide/' },
          { text: 'Components', link: '/components/' },
          { text: 'Examples', link: '/examples/' },
        ],

        sidebar: {
          '/guide/': [
            {
              text: 'Introduction',
              items: [
                { text: 'Getting Started', link: '/guide/' },
                { text: 'Installation', link: '/guide/installation' },
                { text: 'Usage', link: '/guide/usage' },
              ],
            },
          ],
          '/components/': [
            {
              text: 'Components',
              items: [
                { text: 'Button', link: '/components/button' },
                { text: 'Input', link: '/components/input' },
                { text: 'Switch', link: '/components/switch' },
                { text: 'Alert', link: '/components/alert' },
                { text: 'Text', link: '/components/text' },
                { text: 'Label', link: '/components/label' },
                { text: 'Group', link: '/components/group' },
              ],
            },
          ],
          '/examples/': [
            {
              text: 'Examples',
              items: [
                { text: 'Form Examples', link: '/examples/form' },
                { text: 'Layout Examples', link: '/examples/layout' },
              ],
            },
          ],
        },

        socialLinks: [
          { icon: 'github', link: 'https://github.com/your-org/blink-the-ui' },
        ],
      },
    },
  },
});
