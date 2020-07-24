const initialState = {
    items: [],
}

export default function(state = initialState, action) {
    switch(action.type) {
        case 'POPULATE_POSTS':
            return {
                ...state,
                items: [...action.posts]
            }

        case 'POPULATE_SINGLE_POST':
            return {
                ...state,
                single: action.post 
            }    
        default:
            return state;
    }
}