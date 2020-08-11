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
            dispatch(populateMain(resp[0].articles))
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