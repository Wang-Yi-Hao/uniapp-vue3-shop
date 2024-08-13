/**
 * declare module '@vue/runtime-core'
 *   现调整为
 * declare module 'vue'
 */
import ShopSwiper from '@/components/ShopSwiper.vue'
import 'vue'
declare module 'vue' {
  export interface GlobalComponents {
    ShopSwiper: typeof ShopSwiper
  }
}
