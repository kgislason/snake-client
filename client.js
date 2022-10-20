const net = require("net");
const { PORT, IP, playerInitials, messages } = require("./constants");

// Create a new connection
const conn = net.createConnection({
  port: PORT,
  host: IP
});

// establishes a connection with the game server
const connect = function() {

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // Initiate our connection with the server
  conn.on("connect", () => {
    console.log(messages.connectMsg);
    // code that does something when the connection is first established

    conn.write(playerInitials);
  });

  conn.on('error', () => {
    console.log(messages.errMsg);
  });

  // Listen for data
  conn.on("data", (userInput) => {
    // remove outside space
    userInput = userInput.trim();
    console.log(userInput);
  });

  // Log a message to the console when the player disconnects from the game
  conn.on("end", () => {
    console.log(messages.endMsg);
  });

  process.stdin.on('data', (userInput) => {
    conn.write(userInput);
  });

  return conn;
};

module.exports = {
  connect,
  conn
};