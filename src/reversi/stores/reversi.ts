import { defineStore } from 'pinia'
import { createBoard } from '../game/board'
import { applyMove } from '../game/engine'
import { getLegalMoves } from '../game/rules'
import { Cell } from '../game/types'
import type { Player, Move } from '../game/types'
import { findBestMove } from '../game/ai'

export const useReversiStore = defineStore('reversi', {
    state: () => ({
        board: createBoard(),
        player: Cell.Black as Player,
        isGameOver: false,
    }),

    getters: {
        scores: (state) => {
        let black = 0
        let white = 0
        for (let x = 0; x < 8; x++) {
            for (let y = 0; y < 8; y++) {
            if (state.board[x][y] === Cell.Black) black++
            if (state.board[x][y] === Cell.White) white++
            }
        }
        return { black, white }
        }
    },

    actions: {
        play(move: Move) {
        if (this.isGameOver) return

        const next = applyMove(this.board, move, this.player)
        if (next === this.board) return

        this.board = next
        const opponent = -this.player as Player

        if (getLegalMoves(this.board, opponent).length > 0) {
            this.player = opponent
        } else if (getLegalMoves(this.board, this.player).length === 0) {
            this.isGameOver = true
        }
        },

        aiMove(depth = 4) {
        if (this.isGameOver) return

        const move = findBestMove(this.board, this.player, depth)
        if (!move) {
            const opponent = -this.player as Player
            if (getLegalMoves(this.board, opponent).length === 0) {
            this.isGameOver = true
            } else {
            this.player = opponent
            }
            return
        }

        this.play(move)
        },

        resetGame() {
        this.board = createBoard()
        this.player = Cell.Black as Player
        this.isGameOver = false
        }
    }
})
