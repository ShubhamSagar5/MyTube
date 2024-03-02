import { createSlice } from "@reduxjs/toolkit";
import { OFFSETCOUNT } from "../constants/ConstantAPI";


const ChatSlice = createSlice({
    name:'chat',
    initialState:{
       liveChatShow:true,
        message:[]
    },
    reducers:{
        addMessage:(state,action)=> {
            
            if(state.message.length > OFFSETCOUNT) {
                state.message.shift()
            }
           
            state.message.push(action.payload)
       
           
        },
        toggleLiveChat:(state)=>{
            state.liveChatShow = !state.liveChatShow
        }
    }
})


export const {addMessage,toggleLiveChat} = ChatSlice.actions
export default ChatSlice.reducer