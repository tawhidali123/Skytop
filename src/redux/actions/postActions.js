// fetch HOME feature posts
export const populateFeatures = posts => ({
    type: 'POPULATE_FEATURES',
    posts
})

export function fetchFeatures() {
    return (dispatch) => {
        fetch(`http://localhost:1337/feature-articles`)
        .then(res => res.json())
        .then(resp => {
            // console.log(resp)
            dispatch(populateFeatures(resp[0].articles))
        })
    }
}


// fetch HOME single post
export const populateSinglePost = post => ({
    type: 'POPULATE_SINGLE_POST',
    post
})

export const singlePost = (arg) => {
    return function(dispatch){
        fetch(`http://localhost:1337/articles/${arg}`)
        .then(res => res.json())
        .then(resp => {
            // console.log(resp)
            dispatch(populateSinglePost(resp))
        })
    }
}



// fetch HOME carousal 
export const populateCarousal = post => ({
    type: 'POPULATE_CAROUSAL',
    post
})

export const fetchCarousal = () => {
    return function(dispatch){
        fetch(`http://localhost:1337/carousals`)
        .then(res => res.json())
        .then(resp => {
            // console.log(resp)
            dispatch(populateCarousal(resp))
        })
    }
}





// fetch HOME highlight articles
export const populateHighlight = post => ({
    type: 'POPULATE_HIGHLIGHT',
    post
})

export const fetchHighlight = () => {
    return function(dispatch){
        fetch(`http://localhost:1337/home-page-highlight-articles`)
        .then(res => res.json())
        .then(resp => {
            // console.log(resp[0])
            dispatch(populateHighlight(resp[0].articles))
        })
    }
}




// fetch HOME main articles
export const populateMain = post => ({
    type: 'POPULATE_MAIN',
    post
})

export const fetchMain = () => {
    return function(dispatch){
        fetch(`http://localhost:1337/home-page-main-articles`)
        .then(res => res.json())
        .then(resp => {
            console.log(resp)
            dispatch(populateMain(resp))
        })
    }
}



// ///////////////////////////   SIDE BAR HOMEPAGE CONFERENCES
export const populateConference = post => ({
    type: 'POPULATE_CONFERENCE',
    post
})

export const fetchConference = () => {
    return function(dispatch){
        fetch(`http://localhost:1337/home-page-conferences`)
        .then(res => res.json())
        .then(resp => {
            // console.log(resp)
            dispatch(populateConference(resp[0].conferences))
        })
    }
}



// //////////////////// ACTIVISM FETCH CALL
export const populateActivism = post => ({
    type: 'POPULATE_ACTIVISM',
    post
})

export const fetchActivism = () => {
    return function(dispatch){
        fetch(`http://localhost:1337/activism-pages`)
        .then(res => res.json())
        .then(resp => {
            // console.log(resp)
            dispatch(populateActivism(resp))
        })
    }
}




// //////////////////// CSR FETCH CALL
export const populateCsr = post => ({
    type: 'POPULATE_CSR',
    post
})

export const fetchCsr = () => {
    return function(dispatch){
        fetch(`http://localhost:1337/csr-pages`)
        .then(res => res.json())
        .then(resp => {
            // console.log(resp)
            dispatch(populateCsr(resp[0].articles))
        })
    }
}





// ///////////////////// INVESTMENT FETCH CALL
export const populateInvestment = post => ({
    type: 'POPULATE_INVESTMENT',
    post
})

export const fetchInvestment = () => {
    return function(dispatch){
        fetch(`http://localhost:1337/investment-pages`)
        .then(res => res.json())
        .then(resp => {
            // console.log(resp)
            dispatch(populateInvestment(resp[0].articles))
        })
    }
}






// ////////////////////// CAPITAL FETCH CALL
export const populateCapital = post => ({
    type: 'POPULATE_CAPITAL',
    post
})

export const fetchCapital = () => {
    return function(dispatch){
        fetch(`http://localhost:1337/capital-pages`)
        .then(res => res.json())
        .then(resp => {
            // console.log(resp)
            dispatch(populateCapital(resp[0].articles))
        })
    }
}





// /////////////////// RESILIENCE FETCH CALL
export const populateResilience = post => ({
    type: 'POPULATE_RESILIENCE',
    post
})

export const fetchResilience = () => {
    return function(dispatch){
        fetch(`http://localhost:1337/resilience-pages`)
        .then(res => res.json())
        .then(resp => {
            // console.log(resp)
            dispatch(populateResilience(resp[0].articles))
        })
    }
}





// ///////////////// ALL CONFERENCES FETCH CALL
export const populateAllconference = post => ({
    type: 'POPULATE_ALLCONFERENCE',
    post
})

export const fetchAllConference = () => {
    return function(dispatch){
        fetch(`http://localhost:1337/conferences`)
        .then(res => res.json())
        .then(resp => {
            // console.log(resp)
            dispatch(populateAllconference(resp))
        })
    }
}