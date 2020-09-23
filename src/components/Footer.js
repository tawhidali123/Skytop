import React from 'react'
import styled from 'styled-components'
import logo from '../images/skytop-logo-KO-FINAL.png'
import {TiSocialTwitterCircular} from 'react-icons/ti'
import {TiSocialLinkedinCircular} from 'react-icons/ti'
import Image from 'react-bootstrap/Image'
import {Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
// import Overlay from 'react-bootstrap/Overlay'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'



export default function Footer(props) {


    const popover = (
        <Popover id="popover-basic">
          <Popover.Title as="h3">Cancellation Policy</Popover.Title>
          <Popover.Content>
            <strong>Refunds are not available. </strong> If you are unable to attend the conference for which you’ve registered, 
            you may transfer your registration to another individual or leave the fee paid to Skytop 
            Strategies as payment towards a registration at another Skytop Strategies conference. However, 
            requests to apply fees to a future conference must be received no less than 30 days prior to the 
            conference opening date. Conference registrations may be transferred to another individual only at the express approval 
            of the conference organizer.
            All requests for transfer or requests to apply payment to future conferences must be sent in writing via e-mail to 
            <strong>info@skytopstrategies.com</strong>. Registrants cancelling their registration 30 or more days prior 
            to the event will receive a credit to attend another conference of equal or lesser value. 
            The registrant may pay the difference to attend an event of greater value.
          </Popover.Content>
        </Popover>
      );


    return (
        <Wrapper>
            <Container>
                <Row>
                    <Col lg={3}>
                        <div style={{width: '100%', height: '100%'}}>
                            <Image fluid src={logo} />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div>
                            <div className='links'>
                                <ul className='policy' style={{padding: '0'}}>
                                    <a href='/aboutUs' style={{textDecoration: 'none'}}><li>ABOUT US</li></a>
                                    <li>PRIVACY POLICY</li>
                                    
                                    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                                        <li style={{cursor: 'pointer'}}>CANCELLATION POLICY</li>
                                    </OverlayTrigger>
                                    
                                </ul>
                            </div>
                            <div style={{}}>
                                <small>475 Park Ave South Suite 920 New York, NY 10016</small>
                                <br />
                                <small>info@skytopstrategies.com</small>
                            </div>
                        </div>
                    </Col>
                    <Col lg={2}>
                        <div style={{float: 'right'}}>
                            <a href='https://twitter.com/skytopstrat?lang=en'><h1><TiSocialTwitterCircular /></h1></a>
                            <a href='https://www.linkedin.com/company/skytopstrategies/'><h1><TiSocialLinkedinCircular /></h1></a>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <div style={{marginTop: '5%'}}>
                            <ul>
                                <div>
                                    <li>NEW YORK</li>
                                    <li>CHICAGO</li>
                                    <li>SAN FRANCISCO</li>
                                    <li> WASHINGTON DC</li>
                                    <li>BOSTON</li>
                                    <li>TORONTO</li>
                                    <li>TOKYO</li>
                                </div>
                                <div style={{margin: '1% 4%'}}>
                                    <li>HONG KONG</li>
                                    <li>TEL AVIV</li>
                                    <li>ROME</li>
                                    <li>FRAKFURT</li>
                                    <li>STOCKHOLM</li>
                                    <li>LONDON</li>
                                    <li>MUMBAI</li>
                                </div>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container> 
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background: rgba(18, 24, 74, 1);
    color: rgba(98, 104, 147, 1);
    padding: 8%;
    font-family: 'Work Sans', sans-serif;


    .policy {
        list-style-type: none;
    }

    ul {
        justify-content: center;
    }

    li {
        display: inline-block;
        padding: 0 15px;
        font-weight: bold;
        color: rgba(98, 104, 147, 1);
        border-right: rgba(98, 104, 147, 1) solid 1px; 
        
    }

    h1 {
        display: inline-block;
    }

    

`
