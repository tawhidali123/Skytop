import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';
import HighlightArticle from './HighlightArticle'
import SideBar from './SideBar'
import {Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function LandingPage(props) {
    return (
        <Wrapper>
        <Container style={{margin: '0'}}>
            <Row>
                <Col xs={7}>
                    <div className='slider' style={{marginTop: '15%'}}>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="https://slidervilla.com/dbox-lite/files/2014/05/1.jpg"
                                alt="First slide"
                                />
                        
                                <Carousel.Caption>
                                <small>MARCH 26, 2020 IN NEW YORK, NY</small>
                                <h2>First slide label</h2>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="https://slidervilla.com/dbox-lite/files/2014/05/1.jpg"
                                alt="Second slide"
                                />

                                <Carousel.Caption>
                                <small>MARCH 26, 2020 IN NEW YORK, NY</small>
                                <h2>Second slide label</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="https://slidervilla.com/dbox-lite/files/2014/05/1.jpg"
                                alt="Third slide"
                                />

                                <Carousel.Caption>
                                <small>MARCH 26, 2020 IN NEW YORK, NY</small>
                                <h2>Third slide label</h2>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </Col>

                <Col xs={5}>
                    <div className='highLightArticle' >
                        <HighlightArticle />
                    </div>
                </Col>
            </Row>
        </Container>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    
    
`
