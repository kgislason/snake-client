const PORT = '50541';
const IP = '192.168.0.14';

// Player initials entered as commandline argument when joining the game
let initials = process.argv[2];

// If empty, set as guest
if (!initials) {
  initials = "Ano";
}

// Player Name
// To Do: get this input from the player before connecting
const playerInitials = `Name: ${initials}`;

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
  greeting: "Say: Hi Friends!!",
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
  quit: "q",
  exit: "\u0003"
};

module.exports = {
  PORT,
  IP,
  playerInitials,
  messages,
  commands,
  keys
};