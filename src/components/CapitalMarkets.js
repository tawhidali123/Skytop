import React, {useState, useEffect} from 'react'

import {Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Navigation from './Navigation'
import Footer from './Footer'
import CapitalmMain from './capitalComponents/CapitalMain'
import SideBar from './homeComponents/SideBar'


export default function CapitalMarkets(props) {

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    return (
        <div>
            <Navigation />
            <Container fluid>
                <Row>
                    <Col lg={9} style={{borderRight: '1px solid rgba(166,166,166,.4)', borderRadius: '2px'}}>
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
