import React from 'react'
import styled from 'styled-components'
import logo from '../images/skytop-logo-KO-FINAL.png'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import Image from 'react-bootstrap/Image'
import {Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Footer(props) {
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
                                    <li>ABOUT US</li>
                                    <li>CANCELLATION POLICY</li>
                                    <li>PRIVACY POLICY</li>
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
                            <AiOutlineTwitter style={{margin: '10px'}} />
                            <AiFillLinkedin />
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <div style={{marginTop: '5%'}}>
                            <ul>
                                <li>NEW YORK</li>
                                <li>CHICAGO</li>
                                <li>SAN FRANCISCO</li>
                                <li> WASHINGTON DC</li>
                                <li>BOSTON</li>
                                <li>TORONTO</li>
                                <li>TOKYO</li>
                                <li>HONG KONG</li>
                                <li>TEL AVIV</li>
                                <li>ROME</li>
                                <li>FRAKFURT</li>
                                <li>STOCKHOLM</li>
                                <li>LONDON</li>
                                <li>MUMBAI</li>
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

    li {
        display: inline;
        margin: 15px;
        font-weight: bold;
    }


    

`
