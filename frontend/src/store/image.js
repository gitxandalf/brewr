import { csrfFetch } from "./csrf"

const LOAD = "images/LOAD";
const ADD_IMAGE = "images/ADD_IMAGE"
const EDIT_IMAGE = "images/EDIT_IMAGE"
const DELETE_IMAGE = "images/DELETE_IMAGE"


const load = list => ({
    type: LOAD,
    list
})

const addImage = image => ({
    type: ADD_IMAGE,
    image,
});

const editImage = image => ({
    type: EDIT_IMAGE,
    image,
})

const deleteImage = image => ({
    type: DELETE_IMAGE,
    image,
})

export const getImages = () => async dispatch => {
    const response = await csrfFetch(`/api/images`);

    if (response.ok) {
        const list = await response.json();
        dispatch(load(list));
    }
}

export const getImage = (payload) => async dispatch => {

    const response = await csrfFetch(`/api/images/${payload}`);

    if (response.ok) {
        const image = await response.json();
        dispatch(addImage(image))
    }
}

export const postImage = (payload) => async dispatch => {
    const response = await csrfFetch(`/api/images`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })

    if (response.ok) {
        const submission = await response.json()
        dispatch(addImage(submission))
        return submission;
    }
}

export const updateImage = (payload) => async dispatch => {
    const response = await csrfFetch(`/api/images/${payload.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    if (response.ok) {
        const edit = await response.json()
        dispatch(addImage(edit))
        return edit
    }
}

export const removeImage = (payload) => async dispatch => {

    const response = await csrfFetch(`/api/images/${payload.id}`);

    if (response.ok) {
        const image = await response.json();
        dispatch(deleteImage(image))
    }
}

const initialState = {
    entries: []
};

const imageReducer = (state = initialState, action) => {

    let newState;

    switch (action.type) {

        case LOAD: {
            return {
                ...state,
                entries: [...action.list]
            }
        }

        case ADD_IMAGE: {
            return {
                ...state,
                entries: [...state.entries, ...action.image]
            }
        }

        case EDIT_IMAGE: {
            return {
                ...state,
                [action.payload]: action.id
            }
        }

        case DELETE_IMAGE: {
            newState = { ...state };
            delete newState[action.image]
            return newState;
        }

        default: return state;
    }
}

export default imageReducer;