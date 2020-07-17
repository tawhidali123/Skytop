import React from 'react'
import Button from 'react-bootstrap/Button'
import styled from 'styled-components'
import {Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Question(props) {
    return (
        <Wrapper>
            <Container>
                <Row style={{marginBottom: '1em'}} >
                    <Col>
                        <h5>When is the Economy opening up again?</h5>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Button variant="outline-secondary" size="md" style={{width: '100%', marginBottom: '5%'}}>1-2 Months</Button>
                        <Button variant="outline-secondary" size="md" style={{width: '100%', marginBottom: '5%'}}>3-4 Months</Button>
                        <Button variant="outline-secondary" size="md" style={{width: '100%', marginBottom: '5%'}}>5-7 Months</Button>
                        <Button variant="outline-secondary" size="md" style={{width: '100%', marginBottom: '5%'}}>8-9 Months</Button>
                    </Col>
                </Row>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
margin-top: 3em;
background-color: rgba(143, 147, 148, 0.35);
padding: 15px;
border-radius: 15px;
`
