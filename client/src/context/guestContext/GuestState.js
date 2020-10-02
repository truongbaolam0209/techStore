import React, { useReducer } from 'react';
import GuestContext from './guestContext';
import guestReducer from './guestReducer';
import { TOGGLE_FILTER, SEARCH_GUEST, CLEAR_SEARCH_GUEST, REMOVE_USER, EDIT_USER } from '../type';


const GuestState = props => {

    const initState = {
        filterGuest: false,
        search: null,
        editGuest: null,
        guests: [
            { id: "fh7nch", username: "lelai", email: "lelai@gmail.com", password: "asdfghjkl", confirmPassword: "asdfghjkl", confirm: true },
            { id: "5fj8kv", username: "quangtrung", email: "quangtrung@gmail.com", password: "tgtgtg", confirmPassword: "tgtgtg", confirm: true },
            { id: "z2c5b7", username: "vpccqaungtrung", email: "vpccqaungtrung@gmail.com", password: "ikikik", confirmPassword: "ikikik", confirm: false },
            { id: "ft6666", username: "hale", email: "halegtrung@gmail.com", password: "ikikik", confirmPassword: "ikikik", confirm: false },
            { id: "b9iw3f", username: "cochayho", email: "cochayho@gmail.com", password: "ikikik", confirmPassword: "ikikik", confirm: true }
        ]
    };

    const [state, dispatch] = useReducer(guestReducer, initState);


    const toggleFilter = () => {
        dispatch({ type: TOGGLE_FILTER });
    };
    const searchGuest = (guest) => {
        dispatch({ type: SEARCH_GUEST, payload: guest });
    };
    const clearSearchGuest = () => {
        dispatch({ type: CLEAR_SEARCH_GUEST });
    };
    const removeUser = (id) => {
        dispatch({ type: REMOVE_USER, payload: id });
    }
    const editUser = (id) => {
        dispatch({ type: EDIT_USER, payload: id });
    }

    return (
        <GuestContext.Provider value={{
            guests: state.guests,
            filterGuest: state.filterGuest,
            search: state.search,
            editGuest: state.editGuest,
            toggleFilter,
            searchGuest,
            clearSearchGuest,
            removeUser
        }}>
            {props.children}
        </GuestContext.Provider>
    );
};
export default GuestState;