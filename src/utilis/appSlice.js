import { createSlice } from "@reduxjs/toolkit";



const appSlice = createSlice({
    name:'app',
    initialState:{
        sidebarOpen:true,
        mainVideo:[],
        btnCategory:'All',
        suggestionList:[],
        searchContainerVideo:[]
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
        },
        addSearchContainerVideo:(state,action)=>{
            state.searchContainerVideo = action.payload
        }
       
    }
})



export const {toggleSidebar,addMainVideo,addBtnCategory,addSuggestionList,addSearchContainerVideo} = appSlice.actions
export default appSlice.reducer