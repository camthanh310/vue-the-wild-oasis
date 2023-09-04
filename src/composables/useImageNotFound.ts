import { ref } from 'vue'

export function useImageNotFound() {
  const noImage = ref(false)

  function imageNotFound() {
    noImage.value = true
  }

  return { noImage, imageNotFound }
}
