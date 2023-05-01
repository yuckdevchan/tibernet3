// Create a 2D array to represent the game board
var gameBoard = [];
for (var i = 0; i < 20; i++) {
  gameBoard[i] = [];
  for (var j = 0; j < 10; j++) {
    gameBoard[i][j] = 0;
  }
}

// Define the different types of Tetris blocks
var blockTypes = [
  {
    type: 'i',
    blocks: [[1,1,1,1]]
  },
  {
    type: 'j',
    blocks: [[1,0,0],[1,1,1]]
  },
  {
    type: 'l',
    blocks: [[0,0,1],[1,1,1]]
  },
  {
    type: 'o',
    blocks: [[1,1],[1,1]]
  },
  {
    type: 's',
    blocks: [[0,1,1],[1,1,0]]
  },
  {
    type: 't',
    blocks: [[0,1,0],[1,1,1]]
  },
  {
    type: 'z',
    blocks: [[1,1,0],[0,1,1]]
  }
];

// Define a function to create a new block
function createBlock() {
  // Randomly choose a block type
  var typeIndex = Math.floor(Math.random() * blockTypes.length);
  var blockType = blockTypes[typeIndex];
  // Create a new block object
  var block = {
    type: blockType.type,
    blocks: blockType.blocks,
    x: 3,
    y: 0
  };
  return block;
}

// Define the current block and the next block
var currentBlock = createBlock();
var nextBlock = createBlock();

// Define a function to draw the game board
function drawBoard() {
  var gameBoardElem = document.getElementById('game-board');
  gameBoardElem.innerHTML = '';
  // Draw the blocks on the game
