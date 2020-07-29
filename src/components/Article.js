import React,{useState, useEffect} from 'react'
import ReactMarkdown from 'react-markdown'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
  } from "react-router-dom";

import Navigation from './Navigation'
import Footer from './Footer'
import ArticleSideBar from './articleComponents/ArticleSideBar'
import {Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import styled from 'styled-components'




export default function Article(props) {

    let [state, setState] = useState([])
    let { slug } = useParams();

    useEffect(() => {
        fetch(`http://localhost:1337/articles/${slug}`)
        .then(res => res.json())
        .then(resp => {
            setState(resp)  
        })
    }, [])


    

    return (
        <Wrapper>
            <Navigation />
            <Container style={{marginTop: '5%'}}>
                <Row >
                    <Col lg={9} style={{borderRight: '1px solid rgba(166,166,166,.4)', borderRadius: '2px'}}>
                        <div>
                            <h1>{state.title}</h1>
                        </div>

                        <div>
                            <ReactMarkdown>{state.body}</ReactMarkdown>
                        </div>

                        <hr style={{borderTop: '1px solid rgba(166,166,166,.4)', borderRadius: '2px'}} />

                        <div>
                            <h5>12 Comments</h5>
                            <input type='text' placeholder='Add a Comment...' style={{width: '80%'}} />
                            <Button variant="warning" size="md" style={{width: '15%', marginLeft: '3%', color: 'white'}}>Comment</Button>
                        </div>

                        <div style={{marginTop: '3em', marginBottom: '3em'}}>
                            <small>Juan Michaels / 2 weeks ago</small>
                            <p>Great Read!, Very intuitive!</p>
                        </div>
                    </Col>

                    <Col lg={3}>
                        <ArticleSideBar />
                    </Col>
                </Row>
            </Container>

            

            <Footer />
        </Wrapper>
    )
}



const Wrapper = styled.div`
font-family: 'Work Sans', sans-serif;

input[type=text] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: none;
  border-bottom: 2px solid rgba(166,166,166,.4);
}
`