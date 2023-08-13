import { reactive } from 'vue'

const animationSteps = ['loader', 'greetings', 'inputName', 'imageGallery', 'forms']

export const store = reactive({
  animationSteps, 
  isLoaderFinish: false,
  currentAnimationIndex: 0,
  finishLoader() {
    this.isLoaderFinish = true
  },
  nextAnimationStep() {
    this.currentAnimationIndex++;
  }
})