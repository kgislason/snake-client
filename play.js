/**
 * play.js
 * 
 * Description: main file that will launch the game client
 */
const { stdin } = require('process');
const { connect, conn } = require('./client');
const { setupInput } = require('./input');

console.log("Connecting ...");

connect();
setupInput();