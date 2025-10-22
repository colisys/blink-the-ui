import Token from 'markdown-it/lib/token.mjs';

const totalImports = new Map<string, string>();

const renderer = (tokens: Token[], idx: number) => {
  // 关键行为：解析到代码块后，判断是哪一种Token，利用组件slot渲染Template和Code
  const currentToken = tokens[idx];
  const nextToken = tokens[idx + 1];

  if (currentToken.type === 'container_demo_close')
    return `</template></DemoCode>`;
  if (
    currentToken.type === 'container_demo_open' &&
    nextToken.type === 'fence'
  ) {
    const html = nextToken.content;
    const template = html.match(/<template>([\s\S]*)<\/template>/)?.[1] || '';

    return `<DemoCode><template #default>${template.trim()}</template><template #code>`;
  }
};

export { renderer };
