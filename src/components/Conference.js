import React,{useState, useEffect} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
} from "react-router-dom";
import styled from 'styled-components'
import Navigation from './Navigation'
import Footer from './Footer'
import Title from './conferenceComponents/Title'

import {Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Conference(props) {



    return (
        <Wrapper>
            <Navigation />

            <Container>
                <Row>
                    <Col lg={9}>
                        <Title />
                    </Col>

                    <Col lg={3}>
                        <h1>Join Us!</h1>
                    </Col>
                </Row>
            </Container>

            <Footer />
        </Wrapper>
    )
}

const Wrapper = styled.div`

`
