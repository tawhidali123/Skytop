import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Navigation from './Navigation'
import LandingPage from './homeComponents/LandingPage'
import MainArticle from './homeComponents/MainArticle'
import Footer from './Footer'

export default function Home(props) {

    useEffect(() => {
        fetch(`https://skytopstrategies.com/wp-json/wp/v2/posts`)
        .then(res => res.json())
        .then(resp => {
            console.log(resp)
        })
    }, [])

    return (
        <Wrapper>
            <Navigation />
            <LandingPage />
            <hr style={{borderTop: '5px solid #bbb', borderRadius: '5px'}} />
            <MainArticle />
            <hr style={{borderTop: '5px solid #bbb', borderRadius: '5px'}} />
            <Footer />
        </Wrapper>
    )
}


const Wrapper = styled.div`
    
`
