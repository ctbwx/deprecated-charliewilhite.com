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

app.get('/api/blog/:id', (req, res) => {
  return db('blogs').where({ id: req.params.id }).select('*')
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    console.error(err);
    res.end('Unable to fetch blog.');
  });
});

app.post('/api/blog', (req, res) => {
  console.log('posting body');
  return db('blogs').insert(req.body)
  .then(data => {
    console.log('success');
    res.send(data);
  })
  .catch(err => {
    console.error(err);
    res.end('Unable to post with this body.')
  })
});


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
/*----------------------------------------------------------------------------------------------*/

const port = process.env.PORT || 3001;
server.listen(port);

console.log(`Server listening on ${port}`);