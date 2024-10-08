import type { LoginResult } from '@/types/member'
import { http } from '@/utils/http'

export type LoginParams = {
  code: string
  encryptedData: string
  iv: string
}
export const postLoginWxMin = (data: LoginParams) => {
  return http({
    method: 'POST',
    url: '/login/wxMin',
    data,
  })
}

export const postLoginWxMinSimpleApi = (phoneNumber: string) => {
  return http<LoginResult>({
    method: 'POST',
    url: '/login/wxMin/simple',
    data: {
      phoneNumber,
    },
  })
}
