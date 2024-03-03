import { createSlice } from "@reduxjs/toolkit";



const appSlice = createSlice({
    name:'app',
    initialState:{
        sidebarOpen:true,
        mainVideo:[],
        btnCategory:'All'
    },
    reducers:{
        toggleSidebar:(state)=>{
            state.sidebarOpen = !state.sidebarOpen
        },
        addMainVideo:(state,action)=>{
            state.mainVideo = action.payload
        },
        addBtnCategory:(state,action)=>{
            state.btnCategory = action.payload
        },
       
    }
})



export const {toggleSidebar,addMainVideo,addBtnCategory} = appSlice.actions
export default appSlice.reducer