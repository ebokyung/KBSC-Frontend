const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://172.20.10.11:8080',
      changeOrigin: true,
    }),
  );
};