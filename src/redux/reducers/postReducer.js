const initialState = {
    items: [],
}

export default function(state = initialState, action) {
    switch(action.type) {
        // HOMEPAGE
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
        
        // ACTIVISM
        case 'POPULATE_ACTIVISM':
            return {
                ...state,
                activism: [...action.post] 
            } 

        // CSR
        case 'POPULATE_CSR':
            return {
                ...state,
                csr: [...action.post] 
            } 

        // INVESTMENT
        case 'POPULATE_INVESTMENT':
            return {
                ...state,
                investment: [...action.post] 
            } 

        // CAPITAL
        case 'POPULATE_CAPITAL':
            return {
                ...state,
                capital: [...action.post] 
            } 

        // RESILIENCE
        case 'POPULATE_RESILIENCE':
            return {
                ...state,
                resilience: [...action.post] 
            } 
        default:
            return state;
    }
}