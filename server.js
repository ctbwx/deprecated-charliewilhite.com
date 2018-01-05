const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const http = require('http');

const app = express();
const server = http.createServer(app);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride());

app.use(favicon(__dirname + '/public/images/favicon.ico'));
app.use(express.static(path.join(__dirname, './dist')));

/*-----------------------------------------------ROUTES-----------------------------------------*/
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './dist/index.html'));
});
/*----------------------------------------------------------------------------------------------*/

const port = 3001;
server.listen(port);

console.log(`Server listening on ${port}`);