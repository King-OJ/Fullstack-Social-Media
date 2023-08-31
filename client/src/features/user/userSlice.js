import { createSlice, current, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    user: 2,
    token: null,
    isMember: true,
    friends: [],
    showAlert: false,
    alertText: "",
  }


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    displayAlert: (state, action)=>{
      setTimeout(() => {
        state.showAlert = true
      }, 2000)
      state.showAlert = false
      state.alertText = ""
    },

    toggleIsMember:(state)=>{
      state.isMember = !state.isMember
    },

    clearAlert: (state)=>{
      state.showAlert = false
      state.alertText = ""
    },

    logoutUser: (state)=>{
      state.showAlert = true
      state.alertText = "You are logged out!"
      state.user = null
    
  },
  },
  extraReducers: (builder)=>{}
})

export default userSlice.reducer;
export const { logoutUser, toggleIsMember, clearAlert } = userSlice.actions