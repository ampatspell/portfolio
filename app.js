const path = require('path');
const express = require('express');
const fastboot = require('fastboot-express-middleware');

let dist = path.join(__dirname, 'dist');

let app = express();

app.use(express.static(dist));
app.get('/*', fastboot(dist));

app.listen(3000, () => {
  console.log('FastBoot app listening on port 3000');
});
