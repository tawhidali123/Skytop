import React from 'react'
import {Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components';
import {MdInsertComment} from 'react-icons/md'

export default function EditorNote(props) {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <Col>
                        <h5>Editors Note</h5>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <h3>[Headline goes here]</h3>
                        <small>by <bold>Charile Shea</bold></small>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <br />
                        <p>
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt
                            exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. 
                        </p>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <MdInsertComment /> 
                        <small>15</small>
                    </Col>
                </Row>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
background-color: rgba(143, 147, 148, 0.35);
padding: 10px;
border-radius: 15px;
`
