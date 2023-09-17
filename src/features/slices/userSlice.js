import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    userType:'admin',
    isAuthorized:'false',
    permissions:'readOnly'
}

//create the slice
const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        login: (state, action) =>{
            state.isAuthorized = action.payload;
        },
        logout: (state) =>{
            state.isAuthorized = false;
        }
    }
})

export const { login, logout} = userSlice.actions;
export default userSlice.reducer;