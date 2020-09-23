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
import Email from './homeComponents/Email'
// import ArticleSideBar from './articleComponents/ArticleSideBar'

import {Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import styled from 'styled-components'
import Badge from 'react-bootstrap/Badge'
import Moment from 'react-moment'




export default function Article(props) {

    let [state, setState] = useState([])
    let { slug } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0)

        fetch(`http://localhost:1337/articles/${slug}`)
        .then(res => res.json())
        .then(resp => {
            setState(resp)  
        })
    }, [])


    let relatedConferences
    let relatedArticles

    // RELATED CONFERENCES
    if(state.conferences) {
        relatedConferences = state.conferences.map(conference => {
            return (
                <Row style={{marginBottom: '10%'}}>
                    <Col>
                        <div className='conference' style={{background: `url(http://localhost:1337${conference.backgroundImage.url})`}}>
                            <a href={`/conference/${conference.id}`} style={{textDecoration: 'none', color: 'white'}}>
                                <h4>{conference.Name}</h4>
                                <p>{conference.summary}</p>
                                <small><Moment format='LLLL'>{conference.Date}</Moment></small>
                            </a>
                        </div>
                    </Col>
                </Row>
            )
        })
    }

    // RELATED ARTICLES
    if(state.articles) {
        relatedArticles = state.articles.map(article => {
            return (
                <Row style={{marginBottom: '10%'}}>
                    <Col>
                        <div>
                            <a href={`/article/${article.id}`} style={{textDecoration: 'none'}}>
                                <h6>{article.title}</h6>
                                <small style={{color: 'gray'}}>by {article.author}, <Moment format='LLLL'>{article.updated_at}</Moment></small>
                                <br />
                                <small><Badge variant="info" style={{padding: '8px', backgroundColor: 'rgba(166,166,166,1)'}}>COMMENTS</Badge></small>
                            </a>
                        </div>
                    </Col>
                </Row>
            )
        })
    }


    

    return (
        <Wrapper>
            <Navigation />
            <Container fluid style={{margin: '3% 0'}}>
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


                    {/* ARTICLE RELATED SIDEBAR */}
                    <Col lg={3}>
                        <div style={{marginBottom: '10%'}}>
                            <h4 style={{fontWeight: 'bold'}}>Related Conferences</h4>
                        </div>
                        
                        {relatedConferences}

                        <hr style={{borderTop: '1px solid rgba(166,166,166,.4)', borderRadius: '2px'}} />

                        <div style={{marginBottom: '10%'}}>
                            <h4 style={{fontWeight: 'bold'}}>Related Articles</h4>
                        </div>

                        {relatedArticles}

                        <hr style={{borderTop: '1px solid rgba(166,166,166,.4)', borderRadius: '2px'}} />

                        <Email />
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

.conference {
    padding: 25px;
    background: url(https://wallup.net/wp-content/uploads/2015/12/134284-abstract-748x421.jpg);
    background-repeat: no-repeat;
    background-size: auto;
    

    color: rgba(255,255,255,1);

    h4{
        font-weight: bold;
    }
}

h6 {
    font-weight: bold;
    color: black;
}
`