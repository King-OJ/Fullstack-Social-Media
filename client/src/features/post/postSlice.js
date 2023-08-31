import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    user: null,
    token: null,
  }

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {

    },
    extraReducers: {
  
    }
})

export default postSlice.reducer;