/**
 * play.js
 *
 * Description: main file that will launch the game client
 */
const { connect } = require('./client');
const { setupInput } = require('./input');

console.log("Connecting ...");

connect();
setupInput();