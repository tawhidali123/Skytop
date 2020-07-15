import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {GrCart} from 'react-icons/gr';
import {BsSearch} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import logo from '../images/transparent-logo.png'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components'

export default function Navigation(props) {
    return (
        <Wrapper>
            <Container fluid style={{margin: '0'}}>
                <Row>
                    <Col>
                        <div style={{width: '50%'}}>
                        <Navbar.Brand href="/">
                            <Image src={logo} fluid />
                        </Navbar.Brand>
                        </div>
                        
                    </Col>
                    <Col>
                        <Nav style={{marginLeft: '45%'}}>
                            <Nav.Item as="li">
                                <Nav.Link>About Us</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link>Sponsors and Partners</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>

                <Row>
                    <Col xs={9}>
                        <ul>
                            <li><a class="active"><Link to='/activism'>ACTIVISM</Link></a></li>
                            <li><a href="#"><Link to='/activism'>CSR & SUSTAINABILITY</Link></a></li>
                            <li><a href="#"><Link to='/activism'>INVESTMENT MANAGEMENT</Link></a></li>
                            <li><a href="#"><Link to='/activism'>CAPITAL MARKETS</Link></a></li>
                            <li><a href="#"><Link to='/activism'>RESILIENCE, INNOVATION + CYBER SECURITY</Link></a></li>
                        </ul>
                    </Col>
                    
                    <Col xs={3}>
                        <div style={{marginLeft: '50%'}}>
                            <GrCart style={{marginRight: '10%'}} />
                            <BsSearch />
                        </div>
                    </Col>
                </Row>
            </Container>

            <hr style={{borderTop: '5px solid #bbb', borderRadius: '5px'}} />
        </Wrapper>
    )
}



const Wrapper = styled.div`
position: sticky; 
top: 0; 
z-index: 100;
background-color: white;

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

li {
  float: left;
}

li a {
  display: block;
  color: gray;
  text-align: center;
  margin: 10px 10px;
  text-decoration: none;
  font-size: 10px;
}

li a:hover {
  color: rgba(0, 138, 153, 0.6);
}
`


