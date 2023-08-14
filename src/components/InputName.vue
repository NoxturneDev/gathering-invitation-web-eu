<script setup>
import gsap from 'gsap'
import { onMounted, ref } from 'vue'
import { store } from '../store'

const input = ref(null)
const name = ref('')

// animation  ref
const greetingNameRef = ref(null)
const greetingTextOne = ref(null)
const greetingTextTwo = ref(null)
const btnNext = ref(null)

function onBtnClick() {
  const { value } = input
  setName(value.value)
}

async function setName(newName) {
  name.value = newName
  gsap.to(greetingNameRef.value, { opacity: 1, duration: 1 })

  animationSequence({ delay: 1 })
}

function animationSequence({ delay }) {
  const timeline = gsap.timeline({ delay })

  timeline.to(input.value, { opacity: 1 })
  timeline.to(greetingTextOne.value, { opacity: 1 }, 'greetingOne')
  timeline.to(greetingTextTwo.value, { opacity: 1 }, 'greetingOne+=1')
  timeline.to(btnNext.value, { opacity: 1 }, 'greetingOne+=3')
}

function proceedNext() {
  store.nextAnimationStep()
}

onMounted(() => {
  gsap.set(btnNext.value, { opacity: 0 })
  gsap.set(greetingNameRef.value, { opacity: 0 })
  gsap.set(greetingTextOne.value, { opacity: 0 })
  gsap.set(greetingTextTwo.value, { opacity: 0 })
  gsap.fromTo(input.value, { opacity: 0 }, { opacity: 1 })
})
</script>

<template>
  <input ref="input" id="input" />
  <button @click="onBtnClick" v-motion="'submitBtn'">Click me</button>
  <h1 v-motion="'greetingName'" ref="greetingNameRef">Hi {{ name }}</h1>
  <h1 ref="greetingTextOne">You're invited to</h1>
  <h1 ref="greetingTextTwo">The gathering of Universitas Esa Unggul</h1>
  <button @click="proceedNext" ref="btnNext">Next</button>
</template>

<style>
 /* reset id */
 #input {
  border: none;
  outline: none;
  transition: all ease-in-out 500ms;
  background-color: var(--main-bg-dark)
 }

 #input:focus {
  border: 1px solid #010101;
 }

 #input:hover {
  border: 1px solid #f1f1f1;
 }
</style>