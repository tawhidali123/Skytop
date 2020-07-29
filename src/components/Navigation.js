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
            <Container fluid style={{margin: '0'}} className='container'>
                <Row style={{padding: '1%'}}>
                    <Col xs={4}>
                        <div style={{width: '100%'}}>
                            <Navbar.Brand href="/">
                                <Image src={logo} fluid />
                            </Navbar.Brand>
                        </div>
                        
                    </Col>
                    <Col xs={8} style={{marginTop: '2%'}}>
                        <div style={{float: 'right'}}>
                            <div style={{float: 'left'}}>
                                <GrCart style={{height: '120%', width: '120%'}}/>
                            </div>
                            <div style={{float: 'right'}}>
                                <BsSearch style={{height: '120%', width: '120%', marginLeft: '100%'}} />
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row >
                    <Col xs={12}>
                        <ul>
                            <li><a class="active"><Link to='/activism'>ACTIVISM</Link></a></li>
                            <li><a href="#"><Link to='/activism'>CSR & SUSTAINABILITY</Link></a></li>
                            <li><a href="#"><Link to='/activism'>INVESTMENT MANAGEMENT</Link></a></li>
                            <li><a href="#"><Link to='/activism'>CAPITAL MARKETS</Link></a></li>
                            <li><a href="#"><Link to='/activism'>RESILIENCE, INNOVATION + CYBER SECURITY</Link></a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>

            <hr style={{borderTop: '1px solid rgba(166,166,166,.4)', borderRadius: '2px'}} />
        </Wrapper>
    )
}



const Wrapper = styled.div`
position: sticky; 
top: 0; 
z-index: 100;
background-color: white;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
font-family: 'Work Sans', sans-serif;
font-weight: bold;


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
  font-size: small;
  color: rgba(0,0,0,1);
}

li a:hover {
  color: rgba(0, 138, 153, 0.6);
}

.container{
    
}
`


