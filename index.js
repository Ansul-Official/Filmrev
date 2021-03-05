const { request } = require('express');
const express = require('express');
const route = require('./route');
var cors = require('cors')
var app = express()
const port = 5000;

app.use(cors())



app.use(express.json());
// Ruter
app.use(route);

  // universal method
  app.use('*', (req, res) => {
      return res.end("Selamat Datang di filmrev API")
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});