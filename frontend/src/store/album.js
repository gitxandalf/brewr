import { csrfFetch } from "./csrf"

const LOAD = "albums/LOAD";


const load = list => ({
    type: LOAD,
    list
})

export const getAlbums = (payload) => async dispatch => {

    const response = await csrfFetch(`/api/albums`);
    
    if (response.ok) {
        const list = await response.json();
        dispatch(load(list))
    }
}

const initialState = {
    entries: []
};

const albumReducer = (state = initialState, action) => {

    let newState;

    switch (action.type) {

        case LOAD: {
            return {
                ...state,
                entries: [...action.list]
            }
        }

        default: return state;
    }
}

export default albumReducer;