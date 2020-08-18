import React, {useState, useEffect} from 'react'

import {Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Navigation from './Navigation'
import Footer from './Footer'
import CapitalmMain from './capitalComponents/CapitalMain'
import SideBar from './homeComponents/SideBar'


export default function CapitalMarkets(props) {
    return (
        <div>
            <Navigation />
            <Container fluid>
                <Row>
                    <Col lg={9}>
                        <CapitalmMain />
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
