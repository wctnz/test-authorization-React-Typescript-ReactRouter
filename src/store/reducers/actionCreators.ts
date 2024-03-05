import { teamMemberSlice } from '../slices/teamMemberSlice';
import { AppDispatch } from './../index';

export const fetchMembers = () => (dispatch: AppDispatch) => {

    try {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => dispatch(teamMemberSlice.actions.membersFetching(data)))
    } catch (e) {


    }
}