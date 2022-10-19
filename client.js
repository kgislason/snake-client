const net = require("net");

const config = {
  port: '50541',
  host: '192.168.0.14'
}

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection(config);

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("You've successfully connected to the game server!");
    // code that does something when the connection is first established
  });

  conn.on("data", (data) => {
    console.log(data);
  });

  conn.on("end", () => {
    console.log("Ended!");
  });

  process.stdin.on('data', (userInput) => {
    conn.write(userInput);
  });

  return conn;
};

module.exports = {
  connect
}