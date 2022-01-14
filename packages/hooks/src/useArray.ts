/*
 * ArrayContainer 逻辑封装
 * @Author: jiangxiaowei
 * @Date: 2021-08-01 16:54:41
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2022-01-14 16:03:21
 */
import { useCallback } from 'react'
import produce from 'immer'
import type { Dispatch } from 'react'
import type { Action } from '@jdfed/utils'
type AddItem = (order: number, item: unknown) => void
type DeltItem = (order: number) => void

const useArray = ({
  fieldKey,
  dispatch,
  fieldData,
}: {
  fieldKey: string
  dispatch: Dispatch<Action>
  fieldData: Array<unknown>
}): {
  addItem: AddItem
  deltItem: DeltItem
} => {
  // 新增一项
  const addItem = useCallback<AddItem>(
    (order, item) => {
      dispatch({
        type: 'setArrayKey',
        action: {
          fieldKey,
          order,
        },
      })
      dispatch({
        type: 'setFormData',
        [fieldKey]: produce(fieldData || [], (draft) => {
          draft.splice(order, 0, item)
        }),
      })
    },
    [dispatch, fieldData, fieldKey]
  )
  // 删除一项
  const deltItem = useCallback<DeltItem>(
    (order) => {
      dispatch({
        type: 'setArrayKey',
        action: {
          fieldKey,
          order,
          isDelete: true,
        },
      })
      // ajv实时校验会重新生成错误信息，如果用户setErr添加了ignore，则ajv会跳过，所以这里需要手动删除
      dispatch({
        type: 'deleteError',
        key: `${fieldKey}.${order}`,
      })
      dispatch({
        type: 'deleteFormData',
        key: `${fieldKey}.${order}`,
      })
    },
    [dispatch, fieldKey]
  )
  return {
    addItem,
    deltItem,
  }
}

export default useArray