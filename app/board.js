const GameBoard = require('./classes/GameBoard').default;
const Pacman = require('./classes/Pacman');

// entry point of the app
// feed commands to the classes here and simulate user input

GameBoard.createGameBoard(4, 4);

module.exports = { createGameBoard, place };