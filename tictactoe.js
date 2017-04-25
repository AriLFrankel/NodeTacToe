const prompt = require('prompt')

const board = [null,
  '1', '2', '3',
  '4', '5', '6',
  '7', '8', '9',
]

function render(board){
  return `${board[1]} | ${board[2]} | ${board[3]} \n` +
  `${board[4]} | ${board[5]} | ${board[6]} \n` +
  `${board[7]} | ${board[8]} | ${board[9]}`
}

function checkColWinner (board) {
  for(var i = 1; i <= 3; i++){
    if(board[i] === board[i + 3] && board[i] === board[i + 6]) return board[i]
  }
  return false
}

function checkRowWinner (board) {
  for(var i = 1; i <= 7; i+= 3){
    if(board[i] === board[i + 1] && board[i] === board[i + 2]) return board[i]
  }
  return false
}

function checkDiagonalWinner (board) {
  return board[1] === board[5] && board[1] === board[9] ? board[1]
    : board[7] === board[5] && board[7] === board[3] ? board[7]
    : false
}

function turn(player, num){
  const positionQuery = `${player}'s turn. choose a position 1-9`
  const position = {
    properties: {
      [positionQuery]: {
        pattern: /^[1-9]$/,
        message: 'Choose a position 1-9',
        required: true
      }
    }
  }
  prompt.start()
  prompt.get([position], (err, result) => {
    // no writing over squares
    if(board[result[positionQuery]] === 'X' || board[result[positionQuery]] === 'O'){
      turn(player)
      return
    }
    board[result[positionQuery]] = player
    
    // render board
    console.log(render(board))
    
    // check for winners
    if(checkColWinner(board) || checkRowWinner(board) || checkDiagonalWinner(board) ){
      console.log(`${player} wins!`)
      return
    }

    if(num === 9){
      console.log('it\'s a tie game!')
      return
    }

    player = player === 'X' ? 'O' : 'X'
    turn(player, num + 1)
  })
}

turn('X', 1)

module.exports = {
  checkDiagonalWinner,
  checkRowWinner,
  checkColWinner,
  turn
}