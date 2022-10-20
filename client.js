const net = require("net");

const config = {
  port: '50541',
  host: '192.168.0.14'
}

const conn = net.createConnection(config);

// establishes a connection with the game server
const connect = function () {

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("You've successfully connected to the game server!");
    // code that does something when the connection is first established

    conn.write("Name: KAG");

    // for (i = 1000; i < 7000; i += 1000) {
    //   setTimeout(() => {
    //     conn.write("Move: up");
    //   }, i);
    // }

    // for (i = 7000; i < 20000; i += 1000) {
    //   setTimeout(() => {
    //     conn.write("Move: left");
    //   }, i);
    // }

    // setTimeout(() => {
    //   conn.write("Move: down");
    // }, 20000);

    // for (i = 21000; i < 31000; i += 1000) {
    //   setTimeout(() => {
    //     conn.write("Move: right");
    //   }, i);
    // }
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
  connect,
  conn
}