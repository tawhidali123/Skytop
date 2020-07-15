import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Navigation from './Navigation'
import LandingPage from './homeComponents/LandingPage'
import MainArticle from './homeComponents/MainArticle'
import Footer from './Footer'

import SideBar from './homeComponents/SideBar'
import {Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
            
            <Container fluid style={{margin: '0'}}>
                <Row style={{margin: '10px 0'}}>
                    <Col lg={9}>
                        <LandingPage />
                        <hr style={{borderTop: '5px solid #bbb', borderRadius: '5px'}} />
                        <MainArticle />
                    </Col>
                    <Col lg={3}>
                        <SideBar />
                    </Col>
                </Row>

                <hr style={{borderTop: '5px solid #bbb', borderRadius: '5px'}} />
            </Container>
            
            <Footer />
        </Wrapper>
    )
}


const Wrapper = styled.div`
`
