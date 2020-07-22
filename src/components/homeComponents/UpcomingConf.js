import React from 'react'
import {Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components';
import Badge from 'react-bootstrap/Badge'

export default function UpcomingConf(props) {
    return (
        <Wrapper>
            <Container style={{marginTop: '10%'}}>
                <Row style={{marginBottom: '10%'}}>
                    <Col>
                        <h4 style={{fontWeight: 'bold'}}>Conferences</h4>
                    </Col>
                </Row>

                <Row style={{marginBottom: '10%'}}>
                    <Col>
                        <div className='conference1'>
                            <h4>Shareholder Activism Summit</h4>
                            <p>Unlocking Shareholder Value</p>
                            <small>NOVEMBER 19, 2020 IN NEW YORK, NY</small>
                        </div>
                    </Col>
                </Row>

                <Row style={{marginBottom: '10%'}}>
                    <Col>
                        <div className='conference2'>
                            <h4>Sustainability & Risk Management</h4>
                            <p>For Sustainability, Risk, Practice and Subject Matter Experts</p>
                            <small>OCTOBER 24, 2020 IN ARLINGTON, VA</small>
                        </div>
                    </Col>
                </Row>

                <Row style={{marginBottom: '10%'}}>
                    <Col>
                        <div className='conference3'>
                            <h4>ESG Integration Summit</h4>
                            <p>Framework for Creating a Diverse and Dynamic Marketplace</p>
                            <small>OCTOBER 17, 2020 IN STOCKHOLM, SWEDEN</small>
                        </div>
                    </Col>
                </Row>

                <Row style={{marginBottom: '10%'}}>
                    <Col>
                        <small><Badge variant="info" style={{padding: '8px', backgroundColor: 'rgba(166,166,166,1)'}}>VIEW ALL</Badge></small>
                    </Col>
                </Row>
        
                <hr style={{borderTop: '5px solid #bbb', borderRadius: '5px'}} />
                
            </Container>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    font-family: 'Work Sans', sans-serif;

    .conference1 {
        padding: 25px;
        background: url(https://s3.envato.com/files/232476805/image.jpg);
        background-repeat: no-repeat;
        background-size: auto;

        color: rgba(255,255,255,1);

        h4{
            font-weight: bold;
        }
    }


    .conference2 {
        padding: 25px;
        background: url(https://wallup.net/wp-content/uploads/2015/12/134284-abstract-748x421.jpg);
        background-repeat: no-repeat;
        background-size: auto;

        color: rgba(255,255,255,1);

        h4{
            font-weight: bold;
        }
    }


    .conference3 {
        padding: 25px;
        background: url(https://st3.depositphotos.com/1357262/18191/v/600/depositphotos_181914472-stock-video-computer-network-plexus-abstract-network.jpg);
        background-repeat: no-repeat;
        background-size: auto;

        color: rgba(255,255,255,1);

        h4{
            font-weight: bold;
        }
    }


`
