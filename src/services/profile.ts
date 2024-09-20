import type { ProfileDetail, profileParams } from '@/types/member'
import { http } from '@/utils/http'

export const getMemberProfileAPI = () => {
  return http<ProfileDetail>({
    method: 'GET',
    url: '/member/profile',
  })
}

export const putMemberProfileAPI = (data: profileParams) => {
  return http({
    method: 'PUT',
    url: '/member/profile',
    data,
  })
}
