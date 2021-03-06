import React, {useState, useEffect} from 'react';
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
import Modal from 'react-bootstrap/Modal'

export default function Navigation(props) {

    const [lgShow, setLgShow] = useState(false);


    return (
        <Wrapper>
            <Container fluid style={{margin: '0'}} className='container'>
                <Row style={{padding: '1%'}}>
                    <Col xs={4} lg={4} style={{borderRight: '1px solid rgba(166,166,166,.4)', borderRadius: '2px'}}>
                        <div style={{width: '100%'}}>
                            <Navbar.Brand href="/">
                                <Image src={logo} fluid />
                            </Navbar.Brand>
                        </div>
                    </Col>

                    <Col xs={6} lg={6} >
                        <div style={{marginTop: '5.75%'}}>
                            <p style={{fontSize: 'small', color: 'rgba(61, 81, 92, 0.71)', fontWeight: 'normal'}}>Where Corporate Insight and Disruptive Ideas Converge</p>
                        </div>
                    </Col>

                    <Col xs={2} lg={2} style={{marginTop: '2%'}}>
                        <div style={{float: 'right'}}>
                            <h4 style={{display: 'inline-block',marginRight: '15px'}}> <GrCart style={{cursor: 'pointer'}} onClick={() => setLgShow(true)} /> </h4>
                            <h4 style={{display: 'inline-block'}}> <BsSearch /> </h4>
                        </div>
                    </Col>
                </Row>

                <Row >
                    <Col xs={12}>
                        <ul>
                            <li><p><Link key={0} className='link' to='/activism'>ACTIVISM</Link></p></li>
                            <li><p><Link key={1} className='link' to='/csrSustainability'>CSR & SUSTAINABILITY</Link></p></li>
                            <li><p><Link key={2} className='link' to='/investmentManagement'>INVESTMENT MANAGEMENT</Link></p></li>
                            <li><p><Link key={3} className='link' to='/capitalMarkets'>CAPITAL MARKETS</Link></p></li>
                            <li><p><Link key={4} className='link' to='/resilienceInnovationCyber'>RESILIENCE, INNOVATION + CYBER SECURITY</Link></p></li>
                        </ul>
                    </Col>
                </Row>
            </Container>

            <hr style={{borderTop: '1px solid rgba(166,166,166,.4)', borderRadius: '2px'}} />


            {/* CHECKOUT MODAL */}
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
                style={{fontFamily: 'Work Sans', cursor: 'pointer'}}
            >
                <Modal.Header closeButton style={{backgroundColor: 'rgba(248,181,22,1)'}}>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        <GrCart />  Shopping Cart
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>There are no Conferences in your cart currently</h4>
                </Modal.Body>
            </Modal>

        </Wrapper>
    )
}



const Wrapper = styled.div`
position: sticky; 
top: 0; 
z-index: 100;
background-color: white;
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

li p {
  display: block;
  color: gray;
  text-align: center;
  margin: 10px 10px;
  text-decoration: none;
  font-size: small;
  color: rgba(0,0,0,1);
}


.link{
  color: rgba(0,0,0,.7);  
}

.link:hover {
  color: rgba(38, 136, 165, 0.8);
  text-decoration: none;
}

.active {
    color: rgba(38, 136, 165, 0.8);
    pointer-events: none;
    cursor: default;
}

`


