import React from 'react'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button'
import {Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Email(props) {
    return (
        <Wrapper style={{marginTop: '3em'}}>
           <Container>
               <Row>
                   <Col>
                       <h3 style={{fontWeight: 'bold'}}>Get News Feeds</h3>
                   </Col>
               </Row>

               <Row>
                   <Col>
                       <p>Subscribe to get the latest updates.</p>
                   </Col>
               </Row>

               <Row>
                   <Col>
                       <input type='text' placeholder='Example@email.com' />
                       <Button variant="warning" size="md" style={{width: '100%', marginTop: '3%'}}>Subscribe</Button>
                   </Col>
               </Row>
           </Container> 
        </Wrapper>
    )
}

const Wrapper = styled.div`
font-family: 'Work Sans', sans-serif;
margin-bottom: 10%;

input[type=text] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: none;
  border-bottom: 2px solid rgba(166,166,166,.4);
}
`
