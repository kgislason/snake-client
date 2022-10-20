const PORT = '50541';
const IP = '192.168.0.14';

// Player Name
// To Do: get this input from the player before connecting
const playerInitials = "Name: KAG";

// Commands
const commands = {
  up: "Move: up",
  left: "Move: left",
  down: "Move: down",
  right: "Move: right"
};

const messages = {
  connectMsg: "You've successfully connected to the game server!",
  endMsg: "GAME OVER!",
  errMsg: "Connection error.",
  greeting: "Say: Hey!",
  silly: "Say: No you didn't!",
  bye: "Say: Bye, bye"
};

// Keyboard keys for each movement in the game
const keys = {
  up: "w",
  left: "a",
  down: "s",
  right: "d",
  msg1: "m",
  msg2: "n",
  msg3: "b",
  exit: "\003"
};

module.exports = {
  PORT,
  IP,
  playerInitials,
  messages,
  commands,
  keys
};