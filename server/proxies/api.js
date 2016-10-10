/*jshint node:true*/
var proxyPath = '/api';

module.exports = function(app) {
  var proxy = require('http-proxy').createProxyServer({});

  proxy.on('error', function(err, req) {
    console.error(err, req.url);
  });

  app.use(proxyPath, function(req, res, next){
    proxy.web(req, res, { target: 'http://127.0.0.1:5984' });
  });
};
