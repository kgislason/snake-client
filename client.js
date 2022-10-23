const net = require("net");
const { PORT, IP, playerInitials, messages } = require("./constants");

// establishes a connection with the game server
const conn = net.createConnection({
  port: PORT,
  host: IP
});

// collect events into a function
const connect = function() {

  // set the encoding
  conn.setEncoding("utf8");

  // Log a message to the console once connection has been established
  conn.on("connect", () => {
    console.log(messages.connectMsg);

    // Sound bell when joining the game
    process.stdout.write('\x07');

    // Set up our initials on the game board using keyword 'Name: ABC'
    conn.write(playerInitials);
  });

  // Log an error message on error
  conn.on('error', () => {
    console.log(messages.errMsg);
  });

  // Listen for data
  conn.on("data", (userInput) => {

    // remove outside space
    userInput = userInput.trim();

    // Log data input from user to the console
    console.log(userInput);
  });

  // Log a message to the console when the player disconnects from the game
  conn.on("end", () => {
    console.log(messages.endMsg);
  });

  // Send user input to the server to communicate with other game players
  process.stdin.on('data', (userInput) => {
    conn.write(userInput);
  });
};

module.exports = {
  connect,
  conn
};