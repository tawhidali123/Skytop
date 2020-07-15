import React from 'react'
import Badge from 'react-bootstrap/Badge'
import {Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components'

export default function HighlightArticle(props) {
    return (
        <Wrapper>
            <Container style={{margin: '0'}}>
                <Row>
                    <Col>
                        <div>   
                            <small><Badge variant="info">INVESTMENT</Badge> | FEB 12</small>
                            <h3>Impact Investing - OutlookFor 2020 and Beyond</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            <small>by Skytop Staff</small>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                    <div>   
                        <small><Badge variant="info">MANAGEMENT</Badge> | OCT 30</small>
                        <h3>‘Teddy Roosevelt’ Activism: The German Way</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <small>by Christopher P Skroupa</small>
                    </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <div>   
                            <small><Badge variant="info">RESILIENCE, INNOVATION + CYBER SECURITY</Badge> I FEB 1</small>
                            <h3>Impact Investing</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            <small>by Charlie Shea</small>
                        </div>
                    </Col>
                </Row>
            </Container>
            

            

            
        </Wrapper>
    )
}

const Wrapper = styled.div`
div {
    margin-bottom: 10px;
}

`
