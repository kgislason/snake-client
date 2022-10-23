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

// Player will use keys on keyboard to move the snake around the board
// Player will also need keys to send messages to players and quit/exit the game
const handleUserInput = (data) => {
  // Handle all user input: Directions, Messages, Quit/Exit Game
  // Move up, left, down, right if the user types a key defined in contants.js
  handleDirection(data);
  
  // Close the program if user input CTRL+C
  handleExit(data);

  // Send some predefined messages to other players using keyboard shortcuts
  handleMessages(data);
};

const handleDirection = (data) => {
  // Handle snake movements on the board
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
  // Send a few messages that are assigned to keys
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
    // End the connection for the client
    conn.end();
    setTimeout(() => {
      // Delay: Exit the game
      process.exit();
    }, 100);
  } else if (data === keys.quit) {
    // broadcast bye message before quitting the game
    conn.write(messages.bye);
    setTimeout(() => {
      // end the game for the client
      conn.end();
    }, 1000);
  }
};

module.exports = {
  setupInput
};