import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    users: [],
    loading: false
}

/*const fetchUserById = createAsyncThunk(
    'users/fetchByIdStatus',
    async (userId: number, thunkAPI) => {
        const response = await userAPI.fetchById(userId)
        return response.data
    },
)*/

export const getAllUsers = createAsyncThunk('users', async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    //console.log(response.data)
    return response.data;
})

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        //http isteği olmaz ise kullanılır!
    },
    extraReducers: (builder) => {
        //http isteklerinde kullanılır!
        builder.addCase(getAllUsers.fulfilled, (state, action)=>{
            state.users = action.payload;
        })
    }
})

export const { } = userSlice.actions
export default userSlice.reducer