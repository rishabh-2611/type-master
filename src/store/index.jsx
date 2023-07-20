import { configureStore } from "@reduxjs/toolkit";
import GameSlice from "./slices/GameSlice";

const store = configureStore({
    reducer: {
        gameStats: GameSlice
    }
})

export default store;