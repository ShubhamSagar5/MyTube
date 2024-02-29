import { createSlice } from "@reduxjs/toolkit";



const appSlice = createSlice({
    name:'app',
    initialState:{
        sidebarOpen:true
    },
    reducers:{
        toggleSidebar:(state)=>{
            state.sidebarOpen = !state.sidebarOpen
        }
    }
})



export const {toggleSidebar} = appSlice.actions
export default appSlice.reducer