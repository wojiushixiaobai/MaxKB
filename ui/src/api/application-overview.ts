import { Result } from '@/request/Result'
import { get, post, del, put } from '@/request/index'

import { type Ref } from 'vue'

const prefix = '/application'

/**
 * API_KEY列表
 * @param 参数 applicaiton_id
 */
const getAPIKey: (applicaiton_id: string, loading?: Ref<boolean>) => Promise<Result<any>> = (
  applicaiton_id,
  loading
) => {
  return get(`${prefix}/${applicaiton_id}/api_key`, undefined, loading)
}

/**
 * 新增API_KEY
 * @param 参数 applicaiton_id
 */
const postAPIKey: (applicaiton_id: string, loading?: Ref<boolean>) => Promise<Result<any>> = (
  applicaiton_id,
  loading
) => {
  return post(`${prefix}/${applicaiton_id}/api_key`, {}, undefined, loading)
}

/**
 * 删除API_KEY
 * @param 参数 applicaiton_id api_key_id
 */
const delAPIKey: (
  applicaiton_id: String,
  api_key_id: String,
  loading?: Ref<boolean>
) => Promise<Result<boolean>> = (applicaiton_id, api_key_id, loading) => {
  return del(`${prefix}/${applicaiton_id}/api_key/${api_key_id}`, undefined, undefined, loading)
}

/**
 * 修改API_KEY
 * @param 参数 applicaiton_id,api_key_id
 * data {
 *   is_active: boolean
 * }
 */
const putAPIKey: (
  applicaiton_id: string,
  api_key_id: String,
  data: any,
  loading?: Ref<boolean>
) => Promise<Result<any>> = (applicaiton_id, api_key_id, data, loading) => {
  return put(`${prefix}/${applicaiton_id}/api_key/${api_key_id}`, data, undefined, loading)
}

export default {
  getAPIKey,
  postAPIKey,
  delAPIKey,
  putAPIKey
}
