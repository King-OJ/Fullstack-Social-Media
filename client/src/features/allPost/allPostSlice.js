import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    user: null,
    token: null,
  }

const allPostSlice = createSlice({
    name: 'allPost',
    initialState,
    reducers: {

    },
    extraReducers: {
  
    }
})

export default allPostSlice.reducer;