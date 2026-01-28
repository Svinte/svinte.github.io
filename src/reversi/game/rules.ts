import { Cell } from './types'
import type { Board, Player, Move } from './types'

const DIRS = [
    [-1,-1], [-1,0], [-1,1],
    [0,-1],          [0,1],
    [1,-1],  [1,0],  [1,1],
]

export function getFlips(
    board: Board,
    move: Move,
    player: Player
): Move[] {
    if (board[move.x][move.y] !== Cell.Empty) return []

    const flips: Move[] = []

    for (const [dx, dy] of DIRS) {
        let x = move.x + dx
        let y = move.y + dy
        const temp: Move[] = []

        while (x >= 0 && x < 8 && y >= 0 && y < 8) {
        const cell = board[x][y]
        if (cell === -player) {
            temp.push({ x, y })
        } else if (cell === player) {
            flips.push(...temp)
            break
        } else {
            break
        }
        x += dx
        y += dy
        }
    }

    return flips
}

export function getLegalMoves(board: Board, player: Player): Move[] {
    const moves: Move[] = []
    for (let x = 0; x < 8; x++) {
        for (let y = 0; y < 8; y++) {
        if (getFlips(board, { x, y }, player).length > 0) {
            moves.push({ x, y })
        }
        }
    }
    return moves
}
