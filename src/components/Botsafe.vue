<template>
    <a href=""
    class="botsafe"
    :data-botsafe="botsafeLink"
    :data-reassemble-on="props.reassemble ?? 'load'"
    >
    {{ text ?? 'Js required' }}
    </a>
</template>

<script setup lang="ts">
const props = defineProps<{
  element: string,
  text?: string,
  reassemble?: string,
}>()

const linkArray = props.element.split('')

function insertAt<T>(array: T[], index: number, element: T): T[] {
    array.splice(index, 0, element);

    return array;
}

for (let i = 0; i < linkArray.length; i++) {
    if (i % 2 === 0 || i % 5 === 0) {
        insertAt(linkArray, i, 'abcdefghijklmnopqrstuvwxyz'[Math.floor(Math.random() * 26)]);
    }
}

const botsafeLink = JSON.stringify(linkArray)
</script>
