import React, { useEffect } from 'react'
import { updateStart, updateSuccess, updateError } from '../redux/initSlice'
import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { sampleApi } from '../utils/APIRoutes'

function Page1() {
  const dispatch = useAppDispatch()
  const init = useAppSelector((state) => state.init)
  console.log('init', init)
  console.log('sampleApi', sampleApi)
  useEffect(() => {
    dispatch(updateStart())
    dispatch(updateSuccess({ test: 'test2' }))
    dispatch(updateError())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return <div>Page1</div>
}

export default Page1
