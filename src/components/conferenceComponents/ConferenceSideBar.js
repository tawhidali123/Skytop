import React from 'react'
import styled from 'styled-components'
import Email from '../homeComponents/Email'
import ArticleSideBar from '../articleComponents/ArticleSideBar'

import {Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'


export default function ConferenceSideBar(props) {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <Col>
                        <h2>Join Us!</h2>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <p>{props.state.Address}</p>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Button variant="info" size="md" style={{width: '100%', marginBottom: '5%'}}>Register</Button>
                        <Button variant="secondary" size="md" style={{width: '100%', marginBottom: '5%'}}>Speakers</Button>
                        <Button variant="secondary" size="md" style={{width: '100%', marginBottom: '5%'}}>Agenda</Button>
                        <Button variant="secondary" size="md" style={{width: '100%', marginBottom: '5%'}}>Sponsors / Partners</Button>
                        <Button variant="secondary" size="md" style={{width: '100%', marginBottom: '5%'}}>Previous Events</Button>
                    </Col>
                </Row>

                <hr style={{borderTop: '1px solid rgba(166,166,166,.4)', borderRadius: '2px'}} />

                <Row>
                    <Col>
                        <ArticleSideBar />
                    </Col>
                </Row>

            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
font-family: 'Work Sans', sans-serif;

.article1 {
    padding: 25px;
    background: url(https://s3.envato.com/files/232476805/image.jpg);
    background-repeat: no-repeat;
    background-size: auto;

    color: rgba(255,255,255,1);

    h4{
        font-weight: bold;
    }
}

`
