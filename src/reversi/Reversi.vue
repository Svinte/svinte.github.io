<script setup lang="ts">
import ReversiBoard from './components/Board.vue'
import { useReversiStore } from './stores/reversi'
import { computed, watch } from 'vue'
import { Cell } from './game/types'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const store = useReversiStore()

const currentPlayerLabel = computed(() =>
    store.player === Cell.Black ? t('reversi.black') : t('reversi.white')
)

watch(
    () => store.player,
    (player) => {
        if (!store.isGameOver && player === Cell.White) {
        setTimeout(() => store.aiMove(4), 300)
        }
    }
)
</script>

<template>
    <main class="app">
        <header class="header">
        <h1>{{ t('reversi.title') }}</h1>
        <p v-if="!store.isGameOver">{{ t('reversi.turn') }}: <strong>{{ currentPlayerLabel }}</strong></p>
        <p v-else>Peli päättyi!</p>
        <p>{{ t('reversi.score') }} — {{ t('reversi.black') }}: {{ store.scores.black }}, {{ t('reversi.white') }}: {{ store.scores.white }}</p>
        <button @click="store.resetGame()">{{ t('reversi.new_game') }}</button>
        </header>

        <ReversiBoard />
    </main>
</template>

<style scoped>
.app {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

.header {
    text-align: center;
}

button {
    margin-top: 0.5rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
}
</style>
