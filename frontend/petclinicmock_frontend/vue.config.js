const path = require('path')

module.exports = {
  devServer: {
    allowedHosts: "all",
    proxy: 'https://39.107.248.10:3000',
    client: {
      overlay: false,
    },
  },
  css: {
    loaderOptions: {
      css: {
        url: false,
      },
    },
  },
  chainWebpack: config => {
    config.plugin('copy').tap(args => {
      const UNESCAPED_GLOB_SYMBOLS_RE = /(\\?)([()*?[\]{|}]|^!|[!+@](?=\())/g;
      const publicDir = path.resolve(process.VUE_CLI_SERVICE.context, 'public').replace(/\\/g, '/');
      const escapePublicDir= publicDir.replace(UNESCAPED_GLOB_SYMBOLS_RE, '\\$2');
      args[0].patterns[0].globOptions.ignore = args[0].patterns[0].globOptions.ignore.map(i => i.replace(publicDir, escapePublicDir));
      return args;
  });
  }
};