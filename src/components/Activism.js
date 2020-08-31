import React, {useState, useEffect} from 'react'

import {Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Navigation from './Navigation'
import Footer from './Footer'
import ActivismMain from './activismComponents/ActivismMain'
import SideBar from './homeComponents/SideBar'

export default function Activism(props) {

    return (
        <div>
            <Navigation />
            <Container fluid>
                <Row>
                    <Col lg={9} style={{borderRight: '1px solid rgba(166,166,166,.4)', borderRadius: '2px'}}>
                        <ActivismMain />
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
