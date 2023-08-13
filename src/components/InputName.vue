<script setup>
import gsap from 'gsap'
import { onMounted, ref } from 'vue'

const input = ref(null)
const name = ref('')

// animation  ref
const greetingNameRef = ref(null)
const greetingTextOne = ref(null)
const greetingTextTwo = ref(null)

function onBtnClick() {
  const { value } = input
  setName(value.value)
}

async function setName(newName) {
  name.value = newName
  gsap.to(greetingNameRef.value, { opacity: 1, duration: 1 })

  console.log('test')
  animationSequence({ delay: 1 })
}

function animationSequence({ delay }) {
  const timeline = gsap.timeline({ delay })

  timeline.to(greetingNameRef.value, { opacity: 0 })
  timeline.to(greetingTextOne.value, { opacity: 1 }, 'greetingOne')
  timeline.to(greetingTextOne.value, { opacity: 0 }, 'greetingOne+=1')
  timeline.to(greetingTextTwo.value, { opacity: 1 }, 'greetingOne+=2')
  timeline.to(greetingTextTwo.value, { opacity: 0 }, 'greetingOne+=3')
}

onMounted(() => {
  gsap.set(greetingNameRef.value, { opacity: 0 })
  gsap.set(greetingTextOne.value, { opacity: 0 })
  gsap.set(greetingTextTwo.value, { opacity: 0 })
})
</script>

<template>
  <input ref="input" />
  <button @click="onBtnClick" v-motion="'submitBtn'">Click me</button>
  <h1 v-motion="'greetingName'" ref="greetingNameRef">Hi {{ name }}</h1>
  <h1 ref="greetingTextOne">You're invited to</h1>
  <h1 ref="greetingTextTwo">The gathering of Universitas Esa Unggul</h1>
</template>
