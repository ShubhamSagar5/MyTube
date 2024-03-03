import { createSlice } from "@reduxjs/toolkit";



const appSlice = createSlice({
    name:'app',
    initialState:{
        sidebarOpen:true,
        mainVideo:[],
        btnCategory:'All',
        suggestionList:[]
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
        addSuggestionList:(state,action)=>{
            state.suggestionList = action.payload
        }
       
    }
})



export const {toggleSidebar,addMainVideo,addBtnCategory,addSuggestionList} = appSlice.actions
export default appSlice.reducer