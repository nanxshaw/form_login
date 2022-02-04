
let dataState = {
    token:null,
}

const rootReducer = (state = dataState, action) => {
    switch (action.type) {
        case 'ADD_TOKEN':
            return {
                ...state,
                token: action.token,
            }
        default:
            return state;

    }
}

export default rootReducer;


