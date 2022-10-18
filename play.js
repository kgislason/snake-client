/**
 * play.js
 * 
 * Description: main file that will launch the game client
 */

const PORT = '50541';
const HOST = '192.168.0.14';

const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: HOST,// IP address here,
    port: PORT, // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", (data) => {
    console.log(data);
    // code that does something when the connection is first established
  });

  return conn;
};

console.log("Connecting ...");
connect();