<template>
<div class="board">
	<div
		v-for="(row, x) in board"
		:key="x"
		class="row"
	>
		<div
			v-for="(cell, y) in row"
			:key="y"
			class="cell"
			:class="{
				black: cell === Cell.Black,
				white: cell === Cell.White,
				highlight: canHighlight(x, y)
			}"
			@click="playMove(x, y)"
		></div>
	</div>
</div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useReversiStore } from '../stores/reversi'
import { getLegalMoves } from '../game/rules'
import { Cell, type Move } from '../game/types'

const store = useReversiStore()

const board = computed(() => store.board)
const currentPlayer = computed(() => store.player)

const legalMoves = computed(() => getLegalMoves(board.value, currentPlayer.value))

function canHighlight(x: number, y: number) {
	return legalMoves.value.some(m => m.x === x && m.y === y)
}

function playMove(x: number, y: number) {
	const move: Move = { x, y }
	if (canHighlight(x, y)) store.play(move)
}
</script>

<style scoped>
.board {
	display: grid;
	grid-template-rows: repeat(8, 50px);
	gap: 2px;
}

.row {
	display: grid;
	grid-template-columns: repeat(8, 50px);
}

.cell {
	width: 50px;
	height: 50px;
	border-radius: 4px;
	border: 1px solid #004000;
	position: relative;
	background-color: #006400;
}

.cell:not(.highlight) {
	background: linear-gradient(135deg, #006400 0%, #007000 50%, #006400 100%);
}

.cell.highlight {
	background-color: #228B22;
}

.cell.black::after,
.cell.white::after {
	content: '';
	position: absolute;
	top: 5px;
	left: 5px;
	right: 5px;
	bottom: 5px;
	border-radius: 50%;
}

.cell.black::after {
	background-color: black;
}

.cell.white::after {
	background-color: white;
}
</style>
