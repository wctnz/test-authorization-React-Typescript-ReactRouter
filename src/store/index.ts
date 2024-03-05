import { configureStore } from "@reduxjs/toolkit";
import { favouritesMembers } from "./slices/favouritesMembersSlice";
import { teamMemberSlice } from "./slices/teamMemberSlice";
import userReducer from "./slices/userSlice"

export const store = configureStore({
    reducer: {
        user: userReducer,
        teamMembers: teamMemberSlice.reducer,
        favourites: favouritesMembers.reducer
    }
})

export type AppDispatch = typeof store.dispatch 
export type RootState = ReturnType<typeof store.getState>