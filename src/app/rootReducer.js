import { createSlice } from '@reduxjs/toolkit'

export const rootSlice = createSlice({
  name: 'app',
  initialState: {
    originalUsers: [],
    users: [],
    sorting: {
      field: 'id',
      order: 'ASC',
    },
    searchText: '',
    nationStateList: [],
    currentNationState: '',
    currentUser: null,
    resetToFirstPage: false,
  },
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    // increment: (state) => {
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
    setOriginalUsers: (state, action) => {
      state.originalUsers = action.payload
    },
    setUsers: (state, action) => {
      state.users = action.payload
    },
    setSorting: (state, action) => {
      state.sorting = action.payload
    },
    setSearchText: (state, action) => {
      state.searchText = action.payload
    },
    setNationStateList: (state, action) => {
      state.nationStateList = action.payload
    },
    setCurrentNationState: (state, action) => {
      state.currentNationState = action.payload
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload
    },
    setResetToFirstPage: (state, action) => {
      state.resetToFirstPage = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = rootSlice.actions
export const {
  setOriginalUsers,
  setUsers,
  setSorting,
  setSearchText,
  setNationStateList,
  setCurrentNationState,
  setCurrentUser,
  setResetToFirstPage,
} = rootSlice.actions

export default rootSlice.reducer
