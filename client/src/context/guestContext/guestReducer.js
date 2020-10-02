import { TOGGLE_FILTER, SEARCH_GUEST, CLEAR_SEARCH_GUEST, REMOVE_USER, EDIT_USER } from "../type";




export default (state, { type, payload }) => {

    switch (type) {
        case TOGGLE_FILTER: return { ...state, filterGuest: !state.filterGuest };

        case SEARCH_GUEST:
            const reg = new RegExp(`${payload}`, 'gi')
            return { ...state, search: state.guests.filter(guest => guest.username.match(reg)) };

        case CLEAR_SEARCH_GUEST: return { ...state, search: null };

        case REMOVE_USER: return { ...state, guests: state.guests.filter(guest => guest.id !== payload) };

        case EDIT_USER: return { ...state, editGuest: payload };

        default: return state;
    }
}