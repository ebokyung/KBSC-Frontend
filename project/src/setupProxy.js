const { createProxyMiddleware } = require('http-proxy-middleware');
import { APIURL } from './axios';

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: `http://${APIURL}:8080`,
      changeOrigin: true,
    }),
  );
};