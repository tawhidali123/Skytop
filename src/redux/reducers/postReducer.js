const initialState = {
    items: [],
}

export default function(state = initialState, action) {
    switch(action.type) {
        case 'POPULATE_FEATURES':
            return {
                ...state,
                feature: [...action.posts]
            }

        case 'POPULATE_SINGLE_POST':
            return {
                ...state,
                single: action.post 
            }   

        case 'POPULATE_CAROUSAL':
            return {
                ...state,
                carousal: [...action.post] 
            }  

        case 'POPULATE_HIGHLIGHT':
            return {
                ...state,
                highLight: [...action.post] 
            } 

        case 'POPULATE_MAIN':
            return {
                ...state,
                main: [...action.post] 
            } 

        case 'POPULATE_CONFERENCE':
            return {
                ...state,
                conference: [...action.post] 
            } 
        default:
            return state;
    }
}