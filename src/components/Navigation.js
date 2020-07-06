import React from 'react';
import Nav from 'react-bootstrap/Nav'

export default function Navigation(props) {
    return (
        <div>
            <div className='logo'>
                <h2>SKYTOP</h2>
                <p>About Us</p>
                <p>Sponsors and Partners</p>
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

                    
                    <Nav.Item as="li" className='cart' style={{float: 'right'}}>
                        <Nav.Link>cart</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" className='search' style={{float: 'right'}}>
                        <Nav.Link>search</Nav.Link>
                    </Nav.Item>                 
                </Nav>
            </div>
        </div>
    )
}


