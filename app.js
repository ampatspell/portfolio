const path = require('path');
const express = require('express');
const fastboot = require('fastboot-express-middleware');

let dist = path.join(__dirname, 'dist');

let app = express();
let proxy = require('http-proxy').createProxyServer({});

proxy.on('error', function(err, req) {
  console.error(err, req.url);
});

app.use('/api', function(req, res, next){
  proxy.web(req, res, { target: 'http://127.0.0.1:5984' });
});

app.use(express.static(dist));
app.get('/*', fastboot(dist));

app.listen(3000, () => {
  console.log('FastBoot app listening on port 3000');
});
