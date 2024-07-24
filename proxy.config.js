const PROXY_CONFIG = [
  {
    context:['/api'],
    target:'https://coban-api.bb.com.br',
    pathRewrite:{'^/api':''},
    changeOrigin: true
  }
];

module.exports = PROXY_CONFIG;
