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
  if (e.key === 'Enter') {
    const { value } = input
    setName(value.value)

    hideInput()
  }
}

function hideInput() {
  const tl = gsap.timeline({ onComplete: () => (showInputName.value = false) })

  tl.to(inputWrapper.value, { opacity: 0, duration: 1 })
}

async function setName(newName) {
  name.value = newName

  animationSequence({ delay: 1 })
}

function animationSequence({ delay }) {
  const timeline = gsap.timeline({ delay })

  timeline.fromTo(greetingNameRef.value, { opacity: 0 }, { opacity: 1, duration: 1.5 })
  timeline.to(greetingTextOne.value, { opacity: 1, duration: 2 }, 'greetingOne')
  timeline.set(greetingTextTwo.value, { opacity: 1 })

  const greetingTwoTexts = loaderAnimation(greetingTextTwo)

  // greetingTwoTexts.forEach((el) => {
  // })

  timeline.set(greetingTwoTexts, { opacity: 0 }) // Start with opacity 0 for all elements
  greetingTwoTexts.forEach((el) => {
    timeline.fromTo(el, { opacity: 0 }, { opacity: 1, delay: Math.random() * 0.5 }) // Apply a random delay between 0 and 0.5 seconds
  })

  timeline.to(btnNext.value, { opacity: 1, duration: 1.5 }, '>+2')
}

function proceedNext() {
  store.nextAnimationStep()
}

function loaderAnimation(elementRef) {
  const { value: target } = elementRef

  const innerTextSplitted = target.innerText.split(' ')
  const spans = innerTextSplitted.map((el) => `<span>${el}</span>`)
  target.innerHTML = spans.join(' ') // Replace the inner HTML with the spans
  console.log(spans)

  const spanElements = target.querySelectorAll('span')
  return spanElements
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
    <h1 class="text-white font-bold text-3xl md:text-5xl">What's your name?</h1>
    <input ref="input" class="input" type="text" @keydown="enterInput" />
    <span class="font-bold text-white" @click="onBtnClick">Enter ↵</span>
  </div>
  <div class="w-full h-full flex flex-col justify-center items-start gap-5 py-20 px-5">
    <div class="mb-32">
      <h1 ref="greetingNameRef" class="text-white font-bold text-4xl md:text-5xl">Hi {{ name }}</h1>
      <h1 ref="greetingTextOne" class="text-white font-semibold text-2xl md:text-3xl">Congrats! You're invited</h1>
    </div>
    <h1 ref="greetingTextTwo" class="text-white font-bold text-4xl md:text-5xl w-full">
      "Silaturahmi Mahasiswa Baru Esa Unggul angkatan 2023"
    </h1>
    <div ref="btnNext" class="w-full text-center">
      <Button @click="proceedNext">Lihat detail</Button>
    </div>
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
  /* margin: -1px; */
  z-index: 1;
}

.input {
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
  background-color: red;
  position: relative;
  background-color: rgba(32, 32, 255, 0.315);
  /* border-image: linear-gradient(to right, #0077ff, #00aaff) 1; */
  backdrop-filter: blur(40px);
  outline: none;
  color: white;
  padding: 0.8em 0.5em;
  font-weight: bold;
  transition: all ease-in-out 500ms;
}

.input:focus {
  border: 0.1px solid white;
}
</style>
