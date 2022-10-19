const net = require("net");
const PORT = '50541';
const HOST = '192.168.0.14';

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: HOST,// IP address here,
    port: PORT, // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("You're connected!");
    // code that does something when the connection is first established
  });

  conn.on("data", (data) => {
    console.log(data);
  });

  conn.on("end", () => {
    console.log("Ended!");
  });

  conn.on("close", () => {
    console.log("Closed");
  });

  return conn;
};

module.exports = {
  connect
}