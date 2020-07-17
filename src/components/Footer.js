import React from 'react'
import styled from 'styled-components'
import logo from '../images/black-logo.png'
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
                    <Col>
                        <div className='main'>
                            <div style={{width: '50%', height: '50%'}}>
                                <Image fluid src={logo}/>
                            </div>

                            <div>
                                <small style={{marginRight: '25px'}}>475 Park Ave South Suite 920 New York, NY 10016</small>
                                <AiOutlineTwitter style={{margin: '10px'}} />
                                <AiFillLinkedin />
                                <small>info@skytopstrategies.com</small>
                            </div>
                        </div>
                    </Col>

                    <Col>
                        <div className='links'>
                            <ul className='policy'>
                                <li>ABOUT US</li>
                                <li>CANCELLATION POLICY</li>
                                <li>PRIVACY POLICY</li>
                                <li>CAREERS</li>
                                <li>BOARD OF ADVISORS</li>
                                <li>OUR TEAM</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container> 
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background: rgba(7, 36, 79, 1);
    color: rgba(98, 104, 147, 1);
    padding: 5%;
    

    .policy {
        list-style-type: none;
    }

    li {
        float: left;
        margin: 15px;
    }

    .main {
       
        margin: 10px;
    }

    .links{
        float: right;
        
    }

`
