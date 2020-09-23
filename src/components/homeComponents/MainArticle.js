import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {fetchHighlight, fetchMain} from '../../redux/actions/postActions'
import { Link } from 'react-router-dom';

import styled from 'styled-components'
import Badge from 'react-bootstrap/Badge'
import {Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Moment from 'react-moment'

export default function MainArticle(props) {

    const state = useSelector(state => state.posts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchHighlight())
        dispatch(fetchMain())
    }, [])

    let highlightPosts
    let mainPosts
    let videoPosts

    
    // HIGHLIGHT SECTION: 2 Articles
    if(state.highLight){
        highlightPosts = state.highLight.map((item) => {
            return( 
                
                <Col lg={6}>
                    <Link to={`/article/${item.id}`} style={{textDecoration: 'none'}}>
                        <div>
                            <div style={{width: '100%', height: '100%'}}>
                                <img 
                                    src={`http://159.65.230.30${item.media[0].url}`} 
                                    height={'100%'}
                                    width={'100%'}                        
                                />
                            </div>
                            <div>
                                <small><Badge variant="info" style={{padding: '8px', backgroundColor: 'rgba(38,136,165,1)'}}>RESILIENCE, INNOVATION + CYBER SECURITY</Badge></small>
                                <h2>{item.title}</h2>
                                <p>{item.description}</p>
                                <small className='date' style={{color: 'rgba(166,166,166,1)'}}>
                                    <Moment format='LLLL'>
                                        {item.created_at}
                                    </Moment>
                                </small>
                                <br />
                                <small><Badge variant="info" style={{padding: '8px', backgroundColor: 'rgba(166,166,166,1)'}}>COMMENTS</Badge></small>
                            </div>
                        </div>
                    </Link>
                </Col>
                
            )
        })
    }


    // MAIN SECTION: 4 Articles
    if(state.main){
        mainPosts = state.main[0].articles.map((item) => {
            return(
                <Row style={{marginBottom: '40px', marginTop: '40px'}}>
                    <Col lg={4}>
                        <Link to={`/article/${item.id}`} style={{textDecoration: 'none'}}>
                            <div style={{}}>
                                <img 
                                    src={`http://159.65.230.30${item.media[0].url}`} 
                                    height={'100%'}
                                    width={'100%'}
                                />
                            </div>
                        </Link>
                    </Col>
                    <Col lg={8} >
                        <Link to={`/article/${item.id}`} style={{textDecoration: 'none'}}>
                            <div>
                                <small><Badge variant="info" style={{padding: '8px', backgroundColor: 'rgba(38,136,165,1)'}}>CAPITAL MARKETS</Badge></small>
                                <h2>{item.title}</h2>
                                <p>{item.description}</p>
                                <small style={{color: 'rgba(108,107,107)'}}>by {item.author}</small>
                                <br />
                                <small><Badge variant="info" style={{padding: '8px', backgroundColor: 'rgba(166,166,166,1)'}}>COMMENTS</Badge></small>
                            </div>
                        </Link>
                    </Col>
                </Row>
            )
        })
    }


    // VIDEO MAIN SECTION
    if(state.main){
        videoPosts = state.main[0].videos.map(item => {
            return(
                <Row style={{marginBottom: '5%'}}>
                    <Col>
                        <div style={{marginLeft: '11%'}}>
                            <div>
                                <iframe width="75%" height="415" src={`${item.link}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <div>
                                <h2>{item.Title}</h2>
                                <p>{item.Description}</p>
                                <small className='date'>
                                    <Moment format='LLLL'>
                                        {item.created_at}
                                    </Moment>
                                </small>
                                <small style={{float: 'right'}}><Badge variant="info" style={{padding: '8px', backgroundColor: 'rgba(166,166,166,1)'}}>COMMENTS</Badge></small>
                            </div>
                        </div>
                    </Col>
                </Row>
            )
        })
    }



    return (
        <Wrapper>
            <Container style={{margin: '0'}}>
                <Row style={{marginBottom: '20px'}}>
                    {highlightPosts}
                </Row>

                <hr style={{borderTop: '1px solid rgba(166,166,166,.4)', borderRadius: '2px'}} />

                {mainPosts}
                {videoPosts}

            </Container>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    font-family: 'Work Sans', sans-serif;

    div {
        margin-bottom: 10px;
    }

    p{
    color: rgba(108,107,107);
    font-family: 'PT Serif', serif;
    }

    h2 {
        font-weight: bold;
        color: rgba(0,0,0,1);
    }
    
`


