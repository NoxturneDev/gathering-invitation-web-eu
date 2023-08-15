<script setup>
import gsap from 'gsap'
import { onMounted, ref } from 'vue'
import { store } from '../store'
import Button from './Button.vue'

const input = ref(null)
const name = ref('')
const showInputName = ref(true)

// animation  ref
const greetingNameRef = ref(null)
const greetingTextOne = ref(null)
const greetingTextTwo = ref(null)
const inputWrapper = ref(null)
const btnNext = ref(null)

function onBtnClick() {
  const { value } = input
  setName(value.value)

  hideInput()
}

function enterInput(e) {
  const { value } = input
  setName(value.value)

  hideInput()
}

function hideInput() {
  const tl = gsap.timeline({ onComplete: () => (showInputName.value = false) })

  tl.to(inputWrapper.value, { opacity: 0, duration: 1 })
}

async function setName(newName) {
  name.value = newName
  gsap.to(greetingNameRef.value, { opacity: 1, duration: 1 })

  animationSequence({ delay: 1 })
}

function animationSequence({ delay }) {
  const timeline = gsap.timeline({ delay })

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
  gsap.fromTo(inputWrapper.value, { opacity: 0 }, { opacity: 1, duration: 1.5, delay: 0.5 })
})
</script>

<template>
  <div
    class="flex flex-col justify-center items-center h-[90vh] gap-5"
    ref="inputWrapper"
    v-if="showInputName"
  >
    <h1 class="text-white font-bold text-5xl">What's your name?</h1>
    <!-- <div
      class="backdrop-blur-md border-[1.4px] bg-white bg-opacity-10 border-opacity-40 border-white px-4 py-2 flex flex-col justify-center items-center"
    > -->
    <input ref="input" class="input" type="text" @change="enterInput"/>
    <span class="font-bold text-white" @click="onBtnClick">Enter ↵</span>
    <!-- </div> -->
    <!-- <Button @click="onBtnClick" :text="'Confirm'" /> -->
  </div>
  <div class="w-full h-full flex flex-col justify-start items-start gap-5 py-20">
    <div class="mb-40">
      <h1 ref="greetingNameRef" class="text-white font-bold text-5xl">Hi {{ name }}</h1>
      <h1 ref="greetingTextOne" class="text-white font-bold text-3xl">Congrats! You're invited</h1>
    </div>
    <h1 ref="greetingTextTwo" class="text-white font-bold text-5xl">
      "Gathering of Universitas Esa Unggul"
    </h1>
    <!-- <button @click="proceedNext" ref="btnNext">Next</button> -->
    <Button @click="proceedNext" ref="btnNext">Lihat detail</Button>
  </div>
</template>

<style>
.input::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    linear-gradient(90deg, #fff 1px, transparent 0) 0 0,
    linear-gradient(180deg, #fff 1px, transparent 0) 0 0,
    linear-gradient(270deg, #fff 1px, transparent 0) 100% 0,
    linear-gradient(180deg, #fff 1px, transparent 0) 100% 0,
    linear-gradient(270deg, #fff 1px, transparent 0) 100% 100%,
    linear-gradient(0deg, #fff 1px, transparent 0) 100% 100%,
    linear-gradient(90deg, #fff 1px, transparent 0) 0 100%,
    linear-gradient(0deg, #fff 1px, transparent 0) 0 100%;
  background-repeat: no-repeat;
  background-size: 4px 4px;
  margin: -1px;
  /* z-index: 1; */
}

.input {
  position: relative;
  /* border: 0.5px solid white; */
  background-color: transparent;
  /* border-image: linear-gradient(to right, #0077ff, #00aaff) 1; */
  outline: none;
  color: white;
  padding: 0.8em 0.5em;
  font-weight: bold;
  transition: all ease-in-out 500ms;
}

.input:focus {
  border-bottom: 1px solid white;
}

.input:hover {
  border-bottom: 1px solid white;
}
</style>
