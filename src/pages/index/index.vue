<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import CustomNavbar from './components/CustomNavbar.vue'
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home'
import { ref } from 'vue'
import type { BannerItem, CategoryItem, HotItem } from '@/types/Home'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'

const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}

const categoryList = ref<CategoryItem[]>([])
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result
}
const homeHotList = ref<HotItem[]>([])
const homeHotData = async () => {
  const res = await getHomeHotAPI()
  homeHotList.value = res.result
}
onLoad(() => {
  getHomeBannerData()
  getHomeCategoryData()
  homeHotData()
})
</script>

<template>
  <CustomNavbar />
  <ShopSwiper :list="bannerList" />
  <CategoryPanel :list="categoryList" />
  <HotPanel :list="homeHotList" />
</template>

<style lang="scss">
.page {
  background-color: #f7f7f7;
}
</style>
