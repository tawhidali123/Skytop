import React from 'react'
import Badge from 'react-bootstrap/Badge'
import {Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components'

export default function HighlightArticle(props) {
    return (
        <Wrapper>
            <Container style={{marginTop: '10%'}}> 
                <Row>
                    <Col>
                        <h4 style={{fontWeight: 'bold'}}>Features</h4>
                    </Col>
                </Row>   
                {
                    props.state.items.slice(0,3).map((item) => { 
                        console.log(item)
                        return <Row>
                                <Col>
                                    <a href={`/article/${item.articles[0].id}`}>
                                    <div>
                                        <small><Badge variant="info" style={{padding: '8px', backgroundColor: 'rgba(38,136,165,1)'}}>{item.name}</Badge></small>
                                        <h5 className='title' style={{fontWeight: 'bold'}}>{item.articles[0].title}</h5>
                                        {/* <p className='description'>{item.articles[0].description}</p> */}
                                        <small className='author'>by {item.articles[0].author}</small>
                                        <br />
                                        <small className='date'>March 27, 2020</small>
                                        <br />
                                        <small><Badge variant="info" style={{padding: '8px', backgroundColor: 'rgba(166,166,166,1)'}}>COMMENTS</Badge></small>
                                    </div>
                                    </a>
                                </Col>
                            </Row>          

                    })
                } 
            </Container>  
        </Wrapper>
    )
}

const Wrapper = styled.div`
div {
    margin-bottom: 10px;
}

a{
    text-decoration: none;

}

h5{
    color: rgba(0,0,0,1);
}

p{
    color: rgba(108,107,107);
    font-weight: bold;
    font-family: 'PT Serif', serif;
}

.author{
    color: rgba(108,107,107);
    font-family: 'PT Serif', serif;
}

.date{
    color: rgba(108,107,107);
    font-family: 'PT Serif', serif;
}

`
