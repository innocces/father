export default {
    entry: ['components/index.vue.ts', 'components/index.react.ts'],
    esm: {
      type: 'babel',
      file: 'demo',
      mjs: true,
      minify: true,
    },
    cjs: {
      type: 'babel',
      file: 'demo',
      lazy: true,
      minify: true,
    },
    umd: {
      name: 'demo',
      file: 'demo',
      minFile: true,
      sourcemap: true,
    },
    overridesByEntry: {
      'components/index.react.ts': {
        umd: { name: 'reactEntry', file: 'reactEntry', globals: { react: 'React' } },
      },
      'components/index.vue.ts': {
        umd: { name: 'vueEntry', file: 'vueEntry', vueCompile: true , globals: { vue: 'Vue' }},
      },
    },
    injectCSS: false, // 不注入css
    extractCSS: false, // 单独提取css
    disableTypeCheck: true,
  };