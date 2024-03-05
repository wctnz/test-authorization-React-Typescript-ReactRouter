import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types/types"

interface favouritesMembersState {
    favourites: string[]
}

const initialState: favouritesMembersState = {
    favourites: []
}

export const favouritesMembers = createSlice({
    name: "favouritesMembers",
    initialState,
    reducers: {
        addToFavourites(state, action) {
            state.favourites.includes(action.payload) ?
                state.favourites = state.favourites.filter(el => el !== action.payload) :
                state.favourites.push(action.payload)

        },
        removeFromFavourites() { }

    }
})