import React from 'react'
import styled from 'styled-components'
import LandingPage from './homeComponents/LandingPage'
import MainArticle from './homeComponents/MainArticle'

export default function Home(props) {
    return (
        <Wrapper>
            <LandingPage />
            <hr style={{borderTop: '5px solid #bbb', borderRadius: '5px'}} />
            <MainArticle />
        </Wrapper>
    )
}


const Wrapper = styled.div`
    
`
