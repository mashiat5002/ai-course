// script.js

// Game state variables
let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

let player = '';
let ai = '';
let gameOver = false;
let difficulty = 'medium'; // default difficulty

$(document).ready(() => {
  $('#x').click(() => {
    player = 'X';
    ai = 'O';
    $('#difficulty').removeClass('hidden');
  });
  $('#o').click(() => {
    player = 'O';
    ai = 'X';
    $('#difficulty').removeClass('hidden');
  });
  
  $('#easy').click(() => startGameWithDifficulty('easy'));
  $('#medium').click(() => startGameWithDifficulty('medium'));
  $('#hard').click(() => startGameWithDifficulty('hard'));
  
  $('#new-game').click(() => resetGame());

  $('td').click(function () {
    if (gameOver) return;

    const id = $(this).attr('id');
    const row = parseInt(id[1]);
    const col = parseInt(id[2]);

    if (board[row][col] === '') {
      board[row][col] = player;
      $(this).text(player);

      if (checkWinner(board, player)) return endGame(player);
      if (isBoardFull(board)) return endGame('Tie');

      const aiMove = getAIMove(board);
      board[aiMove.row][aiMove.col] = ai;
      $(`#c${aiMove.row}${aiMove.col}`).text(ai); //not done

      if (checkWinner(board, ai)) return endGame(ai);
      if (isBoardFull(board)) return endGame('Tie');
    }
  });
});

function startGameWithDifficulty(diff) {
  difficulty = diff;
  $('#choice').addClass('hidden');
  $('#board').removeClass('hidden');
  $('#final-screen').addClass('hidden');
}

function startGame(p) {
  $('#choice').addClass('hidden');
  $('#board').removeClass('hidden');
  $('#final-screen').addClass('hidden');
}

function resetGame() {
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  gameOver = false;
  $('td').text('');
  $('#final-screen').addClass('hidden');
  $('#choice').removeClass('hidden');
  $('#difficulty').addClass('hidden');
  $('#board').addClass('hidden');
}

function endGame(winner) {
  gameOver = true;
  $('#winner').text(winner === 'Tie' ? "It's a Tie!" : `${winner} wins!`);
  
  $('#final-screen').removeClass('hidden').css('z-index', 1000);
}

function isBoardFull(b) {
  return b.every(row => row.every(cell => cell !== ''));
}

function checkWinner(b, player) {
  for (let i = 0; i < 3; i++) {
    if (b[i][0] === player && b[i][1] === player && b[i][2] === player) return true;
    if (b[0][i] === player && b[1][i] === player && b[2][i] === player) return true;
  }
  if (b[0][0] === player && b[1][1] === player && b[2][2] === player) return true;
  if (b[0][2] === player && b[1][1] === player && b[2][0] === player) return true;

  return false;
}

// Main function to get AI's move based on difficulty
function getAIMove(board) {
  switch(difficulty) {
    case 'easy':
      return getEasyModeMove(board);
    case 'medium':
      return getMediumModeMove(board);
    case 'hard':
      return getHardModeMove(board);
    default:
      return getRandomMove(board);
  }
}

// Easy Mode: Blocks straight-line wins, otherwise random
function getEasyModeMove(board) {
  // First check if player is about to win in a straight line
  for (let i = 0; i < 3; i++) {
    // Check horizontal lines
    if (board[i][0] === player && board[i][1] === player && board[i][2] === '') {
      return { row: i, col: 2 };
    }
    if (board[i][0] === player && board[i][2] === player && board[i][1] === '') {
      return { row: i, col: 1 };
    }
    if (board[i][1] === player && board[i][2] === player && board[i][0] === '') {
      return { row: i, col: 0 };
    }

    // Check vertical lines
    if (board[0][i] === player && board[1][i] === player && board[2][i] === '') {
      return { row: 2, col: i };
    }
    if (board[0][i] === player && board[2][i] === player && board[1][i] === '') {
      return { row: 1, col: i };
    }
    if (board[1][i] === player && board[2][i] === player && board[0][i] === '') {
      return { row: 0, col: i };
    }
  }

  // Check diagonals
  if (board[0][0] === player && board[1][1] === player && board[2][2] === '') {
    return { row: 2, col: 2 };
  }
  if (board[0][0] === player && board[2][2] === player && board[1][1] === '') {
    return { row: 1, col: 1 };
  }
  if (board[1][1] === player && board[2][2] === player && board[0][0] === '') {
    return { row: 0, col: 0 };
  }

  if (board[0][2] === player && board[1][1] === player && board[2][0] === '') {
    return { row: 2, col: 0 };
  }
  if (board[0][2] === player && board[2][0] === player && board[1][1] === '') {
    return { row: 1, col: 1 };
  }
  if (board[1][1] === player && board[2][0] === player && board[0][2] === '') {
    return { row: 0, col: 2 };
  }

  // If no blocking needed, make a random move
  return getRandomMove(board);
}

// Medium Mode: Mix of random and optimal moves
function getMediumModeMove(board) {
  // 70% chance of random move, 30% chance of best move
  return Math.random() < 0.7 ? getRandomMove(board) : getOptimalMove(board);
}

// Hard Mode: Always makes the optimal move using minimax
function getHardModeMove(board) {
  return getOptimalMove(board);
}

// Helper function to get a random move
function getRandomMove(board) {
  const emptyCells = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === '') {
        emptyCells.push({ row: i, col: j });
      }
    }
  }
  return emptyCells[Math.floor(Math.random() * emptyCells.length)];
}

// Gets the optimal move using minimax algorithm
function getOptimalMove(board) {
  let bestScore = -Infinity;
  let bestMove = null;
  let alpha = -Infinity;
  let beta = Infinity;

  // First, check for immediate winning moves
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === '') {
        board[i][j] = ai;
        if (checkWinner(board, ai)) {
          board[i][j] = '';
          return { row: i, col: j };
        }
        board[i][j] = '';
      }
    }
  }

  // Then, check for blocking opponent's winning moves
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === '') {
        board[i][j] = player;
        if (checkWinner(board, player)) {
          board[i][j] = '';
          return { row: i, col: j };
        }
        board[i][j] = '';
      }
    }
  }

  // If no immediate winning or blocking moves, use minimax
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === '') {
        board[i][j] = ai;
        let score = minimax(board, 0, false, alpha, beta);
        board[i][j] = '';
        
        if (score > bestScore) {
          bestScore = score;
          bestMove = { row: i, col: j };
        }
        alpha = Math.max(alpha, bestScore);
      }
    }
  }

  return bestMove;
}

// Minimax algorithm with alpha-beta pruning
function minimax(board, depth, isMaximizing, alpha, beta) {
  // Check for terminal states
  if (checkWinner(board, ai)) return 10 - depth;
  if (checkWinner(board, player)) return depth - 10;
  if (isBoardFull(board)) return 0;

  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === '') {
          board[i][j] = ai;
          let score = minimax(board, depth + 1, false, alpha, beta);
          board[i][j] = '';
          bestScore = Math.max(bestScore, score);
          alpha = Math.max(alpha, bestScore);
          if (beta <= alpha) break; // Alpha cutoff
        }
      }
      if (beta <= alpha) break; // Alpha cutoff
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === '') {
          board[i][j] = player;
          let score = minimax(board, depth + 1, true, alpha, beta);
          board[i][j] = '';
          bestScore = Math.min(bestScore, score);
          beta = Math.min(beta, bestScore);
          if (beta <= alpha) break; // Beta cutoff
        }
      }
      if (beta <= alpha) break; // Beta cutoff
    }
    return bestScore;
  }
}