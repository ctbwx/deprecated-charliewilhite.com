const connect = require('./herokuconfig.js');

module.exports = {
  client: 'pg',
  connection: connect
};