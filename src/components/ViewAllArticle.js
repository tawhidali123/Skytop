import React,{useState, useEffect} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
    Link
} from "react-router-dom";

import {Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import styled from 'styled-components'
import Navigation from './Navigation'
import Footer from './Footer'
import Badge from 'react-bootstrap/Badge'
import Moment from 'react-moment'


export default function ViewAllArticle(props) {

    let [state, setState] = useState([])
    let { slug } = useParams();

    let articles

    useEffect(() => {
        fetch(`https://159.65.230.30/categories`)
        .then(res => res.json())
        .then(resp => {
            for(let res of resp) {
                if(res.id == slug) {
                    setState(res)
                }
            } 
        })

    }, [])


    if(state.id == slug) {
        articles = state.articles.map(article => {
            return(
                <Row style={{marginBottom: '40px', marginTop: '40px'}}>
                    <Col lg={4}>
                        <Link to={`/article/${article.id}`} style={{textDecoration: 'none'}}>
                            <div style={{}}>
                                <img 
                                    src={`https://159.65.230.30${article.media[0].url}`} 
                                    height={'100%'}
                                    width={'100%'}
                                />
                            </div>
                        </Link>
                    </Col>
                    <Col lg={8} >
                        <Link to={`/article/${article.id}`} style={{textDecoration: 'none'}}>
                            <div>
                                <small><Badge variant="info" style={{padding: '8px', backgroundColor: 'rgba(38,136,165,1)'}}>{state.name}</Badge></small>
                                <h2>{article.title}</h2>
                                <p>{article.description}</p>
                                <small style={{color: 'rgba(108,107,107)', fontWeight: 'bold'}}>
                                    <Moment format='LLLL'>
                                        {article.updated_at}
                                    </Moment>
                                </small>
                                <br />
                            </div>
                        </Link>
                    </Col>
                </Row>
            )
        })
    }


    return (
        <Wrapper>
            <Navigation />

            <Container>
                <Row>
                    <Col>
                        <h1 style={{fontWeight: 'bold'}}>{state.name}</h1>
                    </Col>
                </Row>

                {articles}
            </Container>

            <Footer />
        </Wrapper>
    )
}

const Wrapper = styled.div`
font-family: 'Work Sans', sans-serif;

h2 {
    color: rgba(0,0,0,1);
    font-weight: bold;

}

p {
    color: rgba(108,107,107);
}


`
