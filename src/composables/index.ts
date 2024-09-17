import type { ShopGuessInstance } from '@/types/component'
import { ref } from 'vue'

export const useGuessList = () => {
  const guessRef = ref<ShopGuessInstance>()
  const onScrolltolower = () => {
    guessRef.value?.getHomeGoodsGuessLikeData()
  }
  return { guessRef, onScrolltolower }
}
