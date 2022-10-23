const { messages, commands, keys } = require("./constants");
const { conn } = require("./client");

// Allow keyboard input to be interpreted
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

// Player will use keys on keyboard to move the snack around the board
// Player will also need keys to send messages to players and quit the game
const handleUserInput = (data) => {
  // Move up, left, down, right if the user types a key defined in contants.js
  handleDirection(data);
  
  // Close the program if user input CTRL+C
  handleExit(data);

  // Send some predefined messages to other players using keyboard shortcuts
  handleMessages(data);
};

const handleDirection = (data) => {
  if (data === keys.up) {
    conn.write(commands.up);
  } else if (data === keys.left) {
    conn.write(commands.left);
  } else if (data === keys.down) {
    conn.write(commands.down);
  } else if (data === keys.right) {
    conn.write(commands.right);
  }
};

const handleMessages = (data) => {
  if (data === keys.msg1) {
    conn.write(messages.greeting);
  } else if (data === keys.msg2) {
    conn.write(messages.silly);
  } else if (data === keys.msg3) {
    conn.write(messages.bye);
  }
};

const handleExit = (data) => {
  if (data === keys.exit) {
    process.exit();
  } else if (data === keys.quit) {
    conn.end();
  }
};

module.exports = {
  setupInput
};