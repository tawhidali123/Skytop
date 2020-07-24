import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {fetchPosts, singlePost} from '../redux/actions/postActions'

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

    return (
        <Wrapper>
            <Navigation />
            
            <Container fluid style={{margin: '0'}}>
                
                <Row style={{margin: '10px 0'}}>
                    <Col lg={9}>
                        <div style={{borderRight: '1px solid rgba(166,166,166,.4)', borderRadius: '5px'}}>
                            <LandingPage />
                            <hr style={{borderTop: '1px solid rgba(166,166,166,.4)', borderRadius: '5px', margin: '1em 3em 2em 0'}} />
                            <MainArticle />
                        </div>
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
