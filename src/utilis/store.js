import ChatSlice from "./ChatSlice";
import appSlice from "./appSlice";

import { configureStore } from "@reduxjs/toolkit";



const store = configureStore({
    reducer:{
        app:appSlice,
        chat:ChatSlice
    }
})


export default store