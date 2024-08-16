/**
 * declare module '@vue/runtime-core'
 *   现调整为
 * declare module 'vue'
 */
import ShopSwiper from '@/components/ShopSwiper.vue'
import ShopGuess from '@/components/ShopGuess.vue'
import 'vue'
declare module 'vue' {
  export interface GlobalComponents {
    ShopSwiper: typeof ShopSwiper
    ShopGuess: typeof ShopGuess
  }
}

// 组件实例类型
export type ShopGuessInstance = InstanceType<typeof ShopGuess>
