import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types/types"

interface teamMembersState {
    members: User[]
}

const initialState: teamMembersState = {
    members: []
}

export const teamMemberSlice = createSlice({
    name: "teamMember",
    initialState,
    reducers: {
        membersFetching(state, action) {
            state.members = action.payload
        },
    }
})