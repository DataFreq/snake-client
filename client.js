const net = require('net');
const { IP, PORT } = require('./constants');

const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding('utf8');

  conn.on('connect', () => {
    conn.write('Name: Neo');
  });

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  return conn;
};

module.exports = connect;