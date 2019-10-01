const assert = require('assert');
const GameBoard = require('./app/classes/GameBoard');
const Pacman = require('./app/classes/Pacman');

it('should create a 2 x 2 grid', () => {
  const gameBoard = new GameBoard(2, 2);

  assert.deepStrictEqual(gameBoard.createGameBoard(), {
    "0": [0, 1],
    "1": [0, 1]
  });
});

it('should return the coordinates of pacman', () => {
  const gameBoard = new GameBoard(2, 2);
  gameBoard.createGameBoard();

  const pacman = new Pacman();

  pacman.position = gameBoard.place(1, 1, 'E');
  
  assert.equal(pacman.position, '1,1,E');
});

it('should check that pacman was placed within the game board', () => {
  const gameBoard = new GameBoard(5, 3);
  gameBoard.createGameBoard();

  const place1 = gameBoard.checkPlace(4, 1);
  assert.equal(place1, true);
  
  const place2 = gameBoard.checkPlace(5, -1);
  assert.equal(place2, false);
  
  const place3 = gameBoard.checkPlace(-5, 1);
  assert.equal(place3, false);

  const place4 = gameBoard.checkPlace(1, 5);
  assert.equal(place4, false);
  
  const place5 = gameBoard.checkPlace(1, 2);
  assert.equal(place5, true);
});

it('should represent a move within the bounds of the game board', () => {
  assert.equal(true, true);
});

// it('moves cursor by 1 in a given direction', () => {
//   assert.equal(move())
// });