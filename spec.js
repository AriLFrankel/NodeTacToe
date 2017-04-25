/* eslint-env mocha */
const { 
  checkRowWinner, 
  checkDiagonalWinner,
  checkColWinner
  } = require('./tictactoe')

const assert = require('assert')

describe('Should check for winners and ties', () => {
  const tieBoard = [null,
    'O', 'O', 'X',
    'X', 'X', 'O',
    'O', 'O', 'X',
  ]

  it('should find row winner', () => {
    const board = [null,
      'X', 'X', 'O',
      'O', 'O', 'O',
      '7', 'X', '9',
    ]
    assert(checkRowWinner(board) === 'O')
  })

  it('should not find row winner when there is none', () => {
    assert(checkRowWinner(tieBoard) === false)
  })

  it('should find col winner in col 1', () => {
    const board = [null,
      'X', 'O', '3',
      'X', 'O', '6',
      'X', '8', '9',
    ]
    assert(checkColWinner(board) === 'X')
  })

  it('should not find col winner when there is none', () => {
    assert(checkColWinner(tieBoard) === false)
  })

  it('should find diagonal winner along minor diagonal', () => {
    const board = [null,
      'X', 'X', 'O',
      'X', 'O', '6',
      'O', '8', '9',
    ]
    assert(checkDiagonalWinner(board) === 'O')
  })

  it('should not find diagonal winner when there is none', () => {
    assert(checkDiagonalWinner(tieBoard) === false)
  })
})