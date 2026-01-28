import type { Board, Player, Move } from './types'
import { getFlips, getLegalMoves } from './rules'
import { cloneBoard } from './board'
import  { Cell } from './types'

export function applyMove(
    board: Board,
    move: Move,
    player: Player
): Board {
    const flips = getFlips(board, move, player)
    if (flips.length === 0) return board

    const next = cloneBoard(board)
    next[move.x][move.y] = player
    for (const f of flips) {
        next[f.x][f.y] = player
    }
    return next
}

export function isGameOver(board: Board): boolean {
    return (
        getLegalMoves(board, Cell.Black).length === 0 &&
        getLegalMoves(board, Cell.White).length === 0
    )
}
