import React from 'react'
import styled from 'styled-components'
import Badge from 'react-bootstrap/Badge'
import {Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function MainArticle(props) {
    return (
        <Wrapper>
            <Container style={{margin: '0'}}>
                <Row>
                    <Col xs={4}>
                        <div style={{width: '100%', height: '100%'}}>
                            <img 
                                src='https://previews.123rf.com/images/latkun/latkun1712/latkun171200130/92172856-empty-transparent-background-seamless-pattern.jpg' 
                                height={'100%'}
                                width={'100%'}
                                object-fit={'contain'}                        
                            />
                        </div>
                    </Col>
                    <Col xs={8} >
                        <div>
                            <small><Badge variant="info">RESILIENCE, INNOVATION + CYBER SECURITY</Badge> | FEB 14</small>
                            <h3>UN Encourages Action On Human Rights Through Its CEO Roundtables</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            <small>by Charlie Shea</small>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col xs={4}>
                        <div style={{width: '100%', height: '100%'}}>
                            <img 
                                src='https://thumbs.dreamstime.com/b/play-transparency-button-web-background-design-empty-icon-vector-illustration-179899738.jpg' 
                                height={'100%'}
                                width={'100%'}
                                object-fit={'contain'}                        
                            />
                        </div>
                    </Col>
                    <Col xs={8} >
                        <div>
                            <small><Badge variant="info">CAPITAL MARKETS</Badge> | FEB 1</small>
                            <h3>Creating A Unified Vision</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            <small>by Charlie Shea</small>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col xs={4}>
                        <div style={{width: '100%', height: '100%'}}>
                            <img 
                                src='https://previews.123rf.com/images/latkun/latkun1712/latkun171200130/92172856-empty-transparent-background-seamless-pattern.jpg' 
                                height={'100%'}
                                width={'100%'}
                                object-fit={'contain'}                        
                            />
                        </div>
                    </Col>
                    <Col xs={8} >
                        <div>
                            <small><Badge variant="info">CSR & SUSTAINABILITY</Badge> I FEB 1</small>
                            <h3>‘Impact Beyond Numbers’ — GoodWeave’s Global Solution To Child Labor </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            <small>by Charlie Shea</small>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col xs={4}>
                        <div style={{width: '100%', height: '100%'}}>
                            <img 
                                src='https://thumbs.dreamstime.com/b/play-transparency-button-web-background-design-empty-icon-vector-illustration-179899738.jpg' 
                                height={'100%'}
                                width={'100%'}
                                object-fit={'contain'}                        
                            />
                        </div>
                    </Col>
                    <Col xs={8} >
                        <div>
                            <small><Badge variant="info">ACTIVISM</Badge> I JAN 31</small>
                            <h3>Marriott International Leads Collaboration To Curb Forced Labor </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
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


