import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface NameState {
  info: info
  pending: boolean | null
  error: boolean
}
interface info {
  test: string
}
const initialState: NameState = {
  info: {
    test: '',
  },
  pending: null,
  error: false,
}

export const initSlice = createSlice({
  name: 'init',
  initialState,
  reducers: {
    updateStart(state) {
      state.pending = true
    },
    updateSuccess(state, action: PayloadAction<any>) {
      state.pending = false
      state.info = { ...state.info, ...action.payload }
    },
    updateError(state) {
      state.error = true
      state.pending = false
    },
  },
})
export const { updateStart, updateSuccess, updateError } = initSlice.actions
export default initSlice.reducer
