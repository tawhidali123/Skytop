import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {GrCart} from 'react-icons/gr';
import {BsSearch} from 'react-icons/bs';

export default function Navigation(props) {
    return (
        <div style={{
                position: 'sticky', 
                top: '0', 
                zIndex: '100',
                backgroundColor: 'white'
                }}>
            <div className='logo' style={{display: 'flex'}}>
                <img src='https://skytopstrategies.com/wp-content/uploads/2016/09/skytop_logo210x70-1.png'/>
                <Nav style={{marginLeft: '60%'}}>
                    <Nav.Item as="li">
                        <Nav.Link>About Us</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link>Sponsors and Partners</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>

            <div className='links'>
                <Nav>
                    <Nav.Item as="li">
                        <Nav.Link>ACTIVISM</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link>CSR & SUSTAINABILITY</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link>INVESTMENT MANAGEMENT</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link>CAPITAL MARKETS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link>RESILIENCE, INNOVATION + CYBER SECURITY</Nav.Link>
                    </Nav.Item>

                    
                    <Nav.Item as="li" className='cart' style={{marginLeft: '10%'}}>
                        <Nav.Link> <GrCart/> </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" className='search'>
                        <Nav.Link> <BsSearch /> </Nav.Link>
                    </Nav.Item>                 
                </Nav>
            </div>

            <hr style={{borderTop: '5px solid #bbb', borderRadius: '5px'}} />
        </div>
    )
}


