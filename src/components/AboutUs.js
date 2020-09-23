import React from 'react'

import Navigation from './Navigation'
import Footer from './Footer'
import AboutMain from './aboutUs/AboutMain'
import Side from './aboutUs/Side'

import styled from 'styled-components'
import {Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export default function AboutUs(props) {
    return (
        <Wrapper>
            <Navigation />

            <Container fluid>
                <Row>
                    <Col lg={8}>       
                        <AboutMain />
                    </Col>

                    <Col lg={4}>
                        <Side />
                    </Col>
                </Row>
            </Container>

            <Footer />
        </Wrapper>
    )
}


const Wrapper = styled.div`


`
