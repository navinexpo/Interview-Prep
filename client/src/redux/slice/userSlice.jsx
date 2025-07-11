import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchUsers = createAsyncThunk('user/fetchUsers', async ()=> {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users")
    return res.data;
})

const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: [],
        loading: false,
        error: null,
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state)=> {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action)=> {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action)=> {
                state.loading = false;
                state.error = action.payload.message;
            })
    }
})

export default userSlice.reducer;