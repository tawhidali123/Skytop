import React from 'react'
import styled from 'styled-components'
import {Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'
import {AiOutlineStar} from 'react-icons/ai'



export default function Side(props) {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <Col style={{margin: '5% 0'}}>
                        <h2>Careers</h2>
                    </Col>
                </Row>

                <Row>
                    <Col style={{margin: '5% 0'}}>
                        <h5>Vice President of Partnership Engagement</h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua.
                        </p>
                        <small><Badge variant="info" style={{padding: '8px', backgroundColor: 'rgba(166,166,166,1)'}}>APPLY NOW</Badge></small>
                    </Col>
                </Row>

                <Row>
                    <Col style={{margin: '5% 0'}}>
                        <h5>Delegate Engagement Coordinator</h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua.
                        </p>
                        <small><Badge variant="info" style={{padding: '8px', backgroundColor: 'rgba(166,166,166,1)'}}>APPLY NOW</Badge></small>
                    </Col>
                </Row>

                <Row>
                    <Col style={{margin: '5% 0'}}>
                        <h5>Graphic Design and Marketing Coordinator</h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua.
                        </p>
                        <small><Badge variant="info" style={{padding: '8px', backgroundColor: 'rgba(166,166,166,1)'}}>APPLY NOW</Badge></small>
                    </Col>
                </Row>

                <hr style={{borderTop: '1px solid rgba(166,166,166,.4)', borderRadius: '2px', marginTop: '2em'}} />

                <Row style={{marginBottom: '5%'}}>
                    <Col>
                        <div>
                            <div style={{marginBottom: '5%'}}>
                                <h3>Testimonials</h3>
                            </div>

                            <div>
                                <iframe width="100%" height="215" src={`https://www.youtube.com/embed/7QOOz4DNEk4`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>

                            <div>
                                <div>
                                    <h6><AiOutlineStar /> GLASS LEWIS</h6>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>


            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
font-family: 'Work Sans', sans-serif; 
text-decoration: none;


h1, h2, h3, h5 {
    font-weight: bold;
    color: rgba(0,0,0,1);
}

p {
    color: rgba(108,107,107);
}

`