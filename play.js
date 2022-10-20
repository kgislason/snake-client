/**
 * play.js
 * 
 * Description: main file that will launch the game client
 */
const { stdin } = require('process');
const { connect, conn } = require('./client');

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = (data) => {
  if (data === '\003') {
    process.exit();
  }
}

console.log("Connecting ...");

connect(setupInput());