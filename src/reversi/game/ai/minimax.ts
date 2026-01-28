import type { Board, Player, Move } from '../types'
import { getLegalMoves } from '../rules'
import { applyMove } from '../engine'
import { AI_CONFIG } from './config'

const corners = [
    [0, 0], [0, 7],
    [7, 0], [7, 7],
]

function evaluate(board: Board, player: Player): number {
    let cornerBonus = 0
    for (const [x, y] of corners) {
        if (board[x][y] === player) cornerBonus += AI_CONFIG.cornerWeight
        if (board[x][y] === -player) cornerBonus -= AI_CONFIG.cornerWeight
    }

    const movesPlayer = getLegalMoves(board, player).length
    const movesOpponent = getLegalMoves(board, -player as Player).length
    const isGameOver = movesPlayer === 0 && movesOpponent === 0
    if (!isGameOver) return cornerBonus

    let playerCount = 0
    let opponentCount = 0
    for (let x = 0; x < 8; x++) {
        for (let y = 0; y < 8; y++) {
        if (board[x][y] === player) playerCount++
        if (board[x][y] === -player) opponentCount++
        }
    }

    if (playerCount > opponentCount) return AI_CONFIG.wictoryWeight + cornerBonus
    if (playerCount < opponentCount) return AI_CONFIG.defeatWeight + cornerBonus
    return AI_CONFIG.tieWeight + cornerBonus
}



function minimax(
    board: Board,
    depth: number,
    player: Player,
    maximizing: boolean,
    alpha: number,
    beta: number,
    rootPlayer: Player
): number {
    const moves = getLegalMoves(board, player)

    if (depth === 0 || moves.length === 0) {
        return evaluate(board, rootPlayer)
    }

    if (maximizing) {
        let maxEval = -Infinity
        for (const move of moves) {
        const next = applyMove(board, move, player)
        const evalScore = minimax(
            next,
            depth - 1,
            -player as Player,
            false,
            alpha,
            beta,
            rootPlayer
        )
        maxEval = Math.max(maxEval, evalScore)
        alpha = Math.max(alpha, evalScore)
        if (beta <= alpha) break
        }
        return maxEval
    } else {
        let minEval = Infinity
        for (const move of moves) {
        const next = applyMove(board, move, player)
        const evalScore = minimax(
            next,
            depth - 1,
            -player as Player,
            true,
            alpha,
            beta,
            rootPlayer
        )
        minEval = Math.min(minEval, evalScore)
        beta = Math.min(beta, evalScore)
        if (beta <= alpha) break
        }
        return minEval
    }
}


export function findBestMove(board: Board, player: Player, depth = AI_CONFIG.depth): Move | null {
    const moves = getLegalMoves(board, player)
    if (moves.length === 0) return null

    let bestScore = -Infinity
    let bestMove: Move | null = null

    for (const move of moves) {
        const next = applyMove(board, move, player)
        const score = minimax(
        next,
        depth - 1,
        -player as Player,
        false,
        -Infinity,
        Infinity,
        player
        )

        if (score > bestScore) {
        bestScore = score
        bestMove = move
        }
    }

    return bestMove
}
