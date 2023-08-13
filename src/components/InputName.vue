<script setup>
import { useMotions, useMotion } from '@vueuse/motion'
import { ref } from 'vue'

const input = ref(null)
const greetingNameRef = ref(null)
const name = ref('')

const { title } = useMotions()
const { apply } = useMotion(greetingNameRef, {
  initial: {
    opacity: 0,
  }
})

function onBtnClick() {
  const { value } = input
  setName(value.value)
}

async function setName(newName) {
  name.value = newName

  await apply({
    opacity: 1
  })
}

function animationSequence(){
  
}
</script>

<template>
  <input
    ref="input"
    v-motion="'title'"
    :initial="{
      opacity: 0,
      y: -100,
      x: 0
    }"
    :enter="{
      opacity: 1,
      y: 0
    }"
  />
  <button @click="onBtnClick" v-motion="'submitBtn'">Click me</button>
  <h1 v-motion="'greetingName'" ref="greetingNameRef">Hi {{ name }}</h1>
</template>
