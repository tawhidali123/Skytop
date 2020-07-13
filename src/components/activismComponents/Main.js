import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import styled from 'styled-components'

export default function Main(props) {
    return (
        <Wrapper>
            <Breadcrumb>
                <Breadcrumb.Item href="http://localhost:3000">home</Breadcrumb.Item>
                <Breadcrumb.Item active>activism</Breadcrumb.Item>
            </Breadcrumb>

            <div style={{marginBottom: '25px'}}>
                <h2>ACTIVISM</h2>
            </div>

            <div className='mainContent'>
                <Container>
                    <Row>
                        <Col sm={8}>
                            <div style={{marginRight: '25px'}}>
                                <div style={{marginBottom: '15px'}}>
                                    <img src='https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/miscemptyroom-ploy-room-type1-light1-12.jpg?bg=transparent&con=3&cs=srgb&dpr=1&fm=jpg&ixlib=php-3.1.0&q=80&usm=15&vib=3&w=1300&s=4cfbfc580e13ee4040af1ef61ca48276' />
                                </div>
                                <div>
                                    <small>FEBRUARY 2021 IN ASPEN, CO</small>
                                    <h2>PowerSurge - Clean Energy Innovation</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                </div>
                            </div>

                            <div>
                                <Col>
                                    <DropdownButton id="dropdown-item-button" title="Most Recent" variant="secondary" style={{margin: '10% 0 10% 85%'}}>
                                        <Dropdown.Item as="button">Latest</Dropdown.Item>
                                        <Dropdown.Item as="button">Upcoming</Dropdown.Item>
                                    </DropdownButton>

                                    <Row style={{marginBottom: '5%'}}>
                                        <Col sm={3}>
                                            <div className='imgHolder'>
                                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRyK4IIuaMxy4BpdULq0ZRndNDOXyKMbkVI1A&usqp=CAU' />
                                            </div>
                                        </Col>
                                        <Col sm={9}>
                                            <div>
                                                <small>FEBRUARY 14</small>
                                                <h3>UN Encourages Action On Human Rights Through Its CEO Roundtables</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                                <small>by Charlie Shea</small>
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col sm={3}>
                                            <div className='imgHolder'>
                                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRyK4IIuaMxy4BpdULq0ZRndNDOXyKMbkVI1A&usqp=CAU' />
                                            </div>
                                        </Col>
                                        <Col sm={9}>
                                            <div>
                                                <small>FEBRUARY 1</small>
                                                <h3>Creating A Unified Vision</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                                <small>by Charlie Shea</small>
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row style={{margin: '10%'}}>
                                        <Col>
                                            <div className='mainMedia'>
                                                <div className='imgHolder'>
                                                    <img src='https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/miscemptyroom-ploy-room-type1-light1-12.jpg?bg=transparent&con=3&cs=srgb&dpr=1&fm=jpg&ixlib=php-3.1.0&q=80&usm=15&vib=3&w=1300&s=4cfbfc580e13ee4040af1ef61ca48276' />
                                                </div>
                                                <div>
                                                    <small sty>FEBRUARY 2</small>
                                                    <h2>Marriott International Leads Collaboration To Curb Forced Labor </h2>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                                    <small>by Charlie Shea</small>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </div>
                        </Col>

                        <Col sm={4}>
                            <div style={{}}>
                                <Row>
                                    <div style={{border: 'solid 10px rgba(16, 25, 35, 0.25)',padding: '25px', borderRadius: '15px'}}>
                                    <h5 style={{marginBottom: '30%'}}>When is the economy opening back up?</h5>
                                    <Button variant="outline-secondary" size="md" style={{width: '100%', marginBottom: '5%'}}>1-2 Months</Button>
                                    <Button variant="outline-secondary" size="md" style={{width: '100%', marginBottom: '5%'}}>3-4 Months</Button>
                                    <Button variant="outline-secondary" size="md" style={{width: '100%', marginBottom: '5%'}}>5-7 Months</Button>
                                    <Button variant="outline-secondary" size="md" style={{width: '100%', marginBottom: '5%'}}>8-9 Months</Button>

                                    </div>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    img {
        height: 100%;
        width: 100%;
    }

    
`
