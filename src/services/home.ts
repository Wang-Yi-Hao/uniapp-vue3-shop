import type { BannerItem } from '@/types/Home'
import { http } from '@/utils/http'

// 获取轮播图
export const getHomeBannerAPI = (distributionSite = 1) => {
  return http<BannerItem[]>({
    method: 'GET',
    url: '/home/banner',
    data: { distributionSite },
  })
}

// 获取首页导航
export const getHomeCategoryAPI = () => {
  return http<BannerItem[]>({
    method: 'GET',
    url: '/home/category/mutli',
  })
}
