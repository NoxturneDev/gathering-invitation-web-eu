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
  <div class="flex flex-col justify-center items-center h-[90vh] gap-5">
    <h1 class="text-white font-bold text-5xl">Who's your name?</h1>
    <!-- <div
      class="backdrop-blur-md border-[1.4px] bg-white bg-opacity-10 border-opacity-40 border-white px-4 py-2 flex flex-col justify-center items-center"
    > -->
    <input ref="input" class="input" />
    <!-- </div> -->
    <button @click="onBtnClick" v-motion="'submitBtn'" class="btn">Proceed</button>
  </div>
  <h1 v-motion="'greetingName'" ref="greetingNameRef" class="text-white font-bold text-5xl">Hi {{ name }}</h1>
  <h1 ref="greetingTextOne" class="text-white font-bold text-5xl">You're invited to</h1>
  <h1 ref="greetingTextTwo" class="text-white font-bold text-5xl">The gathering of Universitas Esa Unggul</h1>
  <button @click="proceedNext" ref="btnNext">Next</button>
</template>

<style>
.input {
  background-color: transparent;
  border-bottom: 1px;
  border-image: linear-gradient(to right, #0077ff, #00aaff) 1;
  border-style: solid;
  outline: none;
  color: white;
  padding: 0.8em 0.5em;
  font-weight: bold;
}

.btn {
  border: 1px solid;
  border-image: linear-gradient(to right, #0077ff, #00aaff) 1;
  padding: 0.5em 1em;
  background: linear-gradient(to right, #0077ff, #00aaff);
  background-clip: text;
  -webkit-background-clip: text; /* For compatibility with some browsers */
  color: transparent; /* Hide the original text color */
}
</style>
