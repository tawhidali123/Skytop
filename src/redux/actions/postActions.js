

export const populatePosts = posts => ({
    type: 'POPULATE_POSTS',
    posts
})

export function fetchPosts() {
    return (dispatch) => {
        fetch(`http://localhost:1337/categories`)
        .then(res => res.json())
        .then(resp => {
            console.log(resp)
            dispatch(populatePosts(resp))
        })
    }
}



export const populateSinglePost = post => ({
    type: 'POPULATE_SINGLE_POST',
    post
})

export const singlePost = (arg) => {
    return function(dispatch){
        fetch(`http://localhost:1337/articles/${arg}`)
        .then(res => res.json())
        .then(resp => {
            console.log(resp)
            dispatch(populateSinglePost(resp))
        })
    }
}