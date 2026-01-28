import { Cell } from './types'
import type { Board } from './types'

export function createBoard(): Board {
    const board = Array.from({ length: 8 }, () =>
        Array(8).fill(Cell.Empty)
    )

    board[3][3] = Cell.White
    board[3][4] = Cell.Black
    board[4][3] = Cell.Black
    board[4][4] = Cell.White

    return board
}

export function cloneBoard(board: Board): Board {
    return board.map(row => [...row])
}
