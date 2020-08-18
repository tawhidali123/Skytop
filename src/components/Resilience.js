import React, {useState, useEffect} from 'react'

import {Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Navigation from './Navigation'
import Footer from './Footer'
import ResilienceMain from './resilienceComponents/ResilienceMain'
import SideBar from './homeComponents/SideBar'

export default function Resilience(props) {
    return (
        <div>
            <Navigation />
            <Container fluid>
                <Row>
                    <Col lg={9}>
                        <ResilienceMain />
                    </Col>

                    <Col lg={3}>
                        <SideBar />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}
