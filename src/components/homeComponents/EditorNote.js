import React from 'react'
import {Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components';
import {MdInsertComment} from 'react-icons/md'
import Badge from 'react-bootstrap/Badge'

export default function EditorNote(props) {
    return (
        <Wrapper>
            <Container style={{marginTop: '15%'}}>
                <Row style={{marginBottom: '10%'}}>
                    <Col>
                        <small>
                            <Badge variant="warning" style={{
                                padding: '9px', 
                                backgroundColor: 'rgba(248,181,22,1)',
                                color: 'white'
                                }}>EDITOR'S NOTE
                            </Badge>
                        </small>
                    </Col>
                </Row>

                <Row style={{marginBottom: '10%'}}>
                    <Col>
                        <div style={{height: '100%', width: '100%'}}>
                            <img src='https://ichef.bbci.co.uk/images/ic/1200x675/p0800lx3.jpg' style={{height: '100%', width: '100%'}} />
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <h3 style={{fontWeight: 'bolder'}}>Lorem Ipsum Dolor Sit Amet</h3>
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
                        <small>By Christopher P Skroupa, Editor-in-Chief</small>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <small><Badge variant="info" style={{padding: '8px', backgroundColor: 'rgba(166,166,166,1)'}}><MdInsertComment />  COMMENTS</Badge></small>
                    </Col>
                </Row>

                <hr style={{borderTop: '1px solid rgba(166,166,166,.4)', borderRadius: '2px', marginTop: '10%'}} />
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
font-family: 'Work Sans', sans-serif;

`
