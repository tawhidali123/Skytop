import React from 'react'
import styled from 'styled-components'
import {Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Title(props) {
    return (
        <Wrapper>
            <Container>
                <Row style={{marginBottom: '10%'}}>
                    <Col>
                        <div className='conference1' >
                            <div>
                                <button>Register</button>
                                <div>
                                    <p>00:45:11</p>
                                </div>
                            </div>
                            <div style={{margin: '25% 25% 3% 3%'}}>
                                <h4>Shareholder Activism Summit</h4>
                                <p>Unlocking Shareholder Value</p>
                                <small>NOVEMBER 19, 2020 IN NEW YORK, NY</small>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <div>Engage</div>
                    </Col>
                    <Col>
                        <div>Discover</div>
                    </Col>
                    <Col>
                        <div>Apply</div>
                    </Col>
                </Row>
            </Container>
        </Wrapper>
    )
}


const Wrapper = styled.div`
 font-family: 'Work Sans', sans-serif;

.conference1 {
    background: url(https://wallpaperhd.wiki/wp-content/uploads/1280x1024-wallpaper-trees-forest-top-view-120486-1280x1024.jpg);
    background-repeat: no-repeat;
    background-size: 100%;
    height: 100%;
    padding: 15% 15% 0 0;

    color: rgba(255,255,255,1);

    h4{
        font-weight: bold;
    }
}

`
