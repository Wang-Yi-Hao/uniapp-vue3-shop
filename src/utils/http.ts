import { useMemberStore } from '@/stores'
const memberStore = useMemberStore()
const baseUrl = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

const httpInterceptor = {
  invoke: (options: UniApp.RequestOptions) => {
    if (!options.url.startsWith('http')) {
      options.url = baseUrl + options.url
    }

    options.timeout = 15000

    options.header = {
      'source-client': 'miniapp',
      ...options.header,
    }

    const token = memberStore.profile?.token
    if (token) {
      options.header.Authorization = token
    }
  },
}
uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)

interface Data<T> {
  code: string
  msg: string
  result: T
}
export const http = <T>(options: UniApp.RequestOptions) => {
  return new Promise<Data<T>>((resolve, reject) => {
    uni.request({
      ...options,
      success(res) {
        if (res.statusCode >= 200 && res.statusCode <= 300) {
          resolve(res.data as Data<T>)
        } else if (res.statusCode == 401) {
          // 无token
          memberStore.clearProfile()
          uni.navigateTo({ url: '/pages/login/login' })
          uni.showToast({
            title: '登录超时，请重新登录',
            icon: 'none',
          })
          reject(res)
        } else {
          uni.showToast({
            title: (res.data as Data<T>).msg || '请求失败',
            icon: 'none',
          })
          reject(res)
        }
      },
      fail(err) {
        uni.showToast({
          title: '网络请求失败',
          icon: 'none',
        })
        reject(err)
      },
    })
  })
}
