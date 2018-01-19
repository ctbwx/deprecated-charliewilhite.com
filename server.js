const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const http = require('http');
const db = require('./db.js');

const app = express();
const server = http.createServer(app);

const enforceHttps = (req, res, next) => {
  if (!req.secure &&
    req.get("x-forwarded-proto") !== "https" &&
    process.env.NODE_ENV === "production") {
    res.redirect(301, `https://${req.get("host")}${req.url}`);
  } else {
    next();
  }
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride());

app.use(favicon(__dirname + '/public/images/favicon.ico'));
app.use(enforceHttps);
app.use(express.static('dist'));

/*-----------------------------------------------ROUTES-----------------------------------------*/

app.get('/api/blog', (req, res) => {
  return db('blogs').select('*')
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    console.error(err);
    res.send('Unable to fetch blogs.');
  });
});

// app.post('/api/blog', (req, res) => {
//   db('blogs').insert({
//     title: 'How to set up a vue.js app.',
//     teaser: 'First you download the vue cli, then you hit run. done. ez. The quick brown fox jumps over theThe quick brown fox jumps over the lThe quick brown fox jumps over the lThe quick brown fox jumps over the lThe quick brown fox jumps over the lThe quick brown fox jumps over the l lazy dog',
//     body: 'First you download the vue cli, then you hit run. done. ez.First you download the vue cli, then you hit run. donFirst you download the vue cli, then you hit run. done. ez.First you download the vue cli, then you hit run. done. ez.First you download the vue cli, then you hit run. done. ez.First you download the vue cli, then you hit run. done. ez.',
//   })
//   .catch(err => {
//     console.error(err);
//   });

//   res.end();
// });

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
/*----------------------------------------------------------------------------------------------*/

const port = process.env.PORT || 3001;
server.listen(port);

console.log(`Server listening on ${port}`);