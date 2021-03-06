'use strict';

const express = require('express');
const app = express();

//aquí le decimos que use los archivos estáticos
// y que se muestren al llamar a la ruta '/'
app.use('/', express.static('public'));
app.get('/', function(req, res) {
  res.sendfile('./public/index.html');
});

app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});