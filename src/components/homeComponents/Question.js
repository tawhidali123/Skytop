import React from 'react'
import Button from 'react-bootstrap/Button'
import styled from 'styled-components'
import {Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'

export default function Question(props) {
    return (
        <Wrapper>
            <Container>
                <Row >
                    <Col>
                        <small>
                            <Badge variant="warning" style={{
                                padding: '9px', 
                                backgroundColor: 'rgba(248,181,22,1)',
                                color: 'white'
                                }}>OPINION
                            </Badge>
                        </small>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <div style={{height: '100%', width: '100%'}}>
                            <img src='https://findvectorlogo.com/wp-content/uploads/2019/08/korn-ferry-vector-logo.png' style={{height: '100%', width: '100%'}} />
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <h5 style={{fontWeight: 'bold'}}>Lorem Ipsum dolor sit amet consectetur?</h5>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <p>
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt
                            exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. 
                        </p>
                        <br />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Button variant="outline-secondary" size="md" style={{width: '100%', marginBottom: '5%'}}>Answer 1</Button>
                        <Button variant="outline-secondary" size="md" style={{width: '100%', marginBottom: '5%'}}>Answer 2</Button>
                        <Button variant="outline-secondary" size="md" style={{width: '100%', marginBottom: '5%'}}>Answer 3</Button>
                        <Button variant="outline-secondary" size="md" style={{width: '100%', marginBottom: '5%'}}>Answer 4</Button>
                    </Col>
                </Row>

                <hr style={{borderTop: '1px solid rgba(166,166,166,.4)', borderRadius: '2px', marginTop: '10%'}} />
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
margin-top: 3em;


`
