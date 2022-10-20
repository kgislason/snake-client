const { conn } = require("./client");

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = (data) => {
  // Close the program if user input CTRL+C
  if (data === 'w') {
    conn.write("Move: up");
  } else if (data === 'a') {
    conn.write("Move: left");
  } else if (data === 's') {
    conn.write("Move: down");
  } else if (data === 'd') {
    conn.write("Move: right");
  } else if (data === '\003') {
    process.exit();
  } else if (data === 'm') {
    conn.write("Say: Hey!");
  } else if (data === 'n') {
    conn.write("Say: No you didn't!");
  } else if (data === 'b') {
    conn.write("Say: Bye!");
  }
};

module.exports = {
  setupInput
};