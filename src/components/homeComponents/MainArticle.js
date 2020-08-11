import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {fetchHighlight, fetchMain} from '../../redux/actions/postActions'
import { Link } from 'react-router-dom';

import styled from 'styled-components'
import Badge from 'react-bootstrap/Badge'
import {Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function MainArticle(props) {

    const state = useSelector(state => state.posts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchHighlight())
        dispatch(fetchMain())
    }, [])

    let highlightPosts
    let mainPosts

    console.log(state)
    // HIGHLIGHT SECTION: 2 Articles
    if(state.highLight){
        highlightPosts = state.highLight.map((item) => {
            console.log(item)
            return( 
                
                <Col lg={6}>
                    <Link to={`/article/${item.id}`} style={{textDecoration: 'none'}}>
                        <div>
                            <div style={{width: '100%', height: '100%'}}>
                                <img 
                                    src='https://travel.state.gov/content/travel/en/us-visas/business/_jcr_content/tsg-rwd-content-page-parsysxxx/slideshow.img.png/1512148994695.png' 
                                    height={'100%'}
                                    width={'100%'}                        
                                />
                            </div>
                            <div>
                                <small><Badge variant="info" style={{padding: '8px', backgroundColor: 'rgba(38,136,165,1)'}}>RESILIENCE, INNOVATION + CYBER SECURITY</Badge></small>
                                <h2>{item.title}</h2>
                                <p>{item.description}</p>
                                <small>{item.created_at}</small>
                                <br />
                                <small><Badge variant="info" style={{padding: '8px', backgroundColor: 'rgba(166,166,166,1)'}}>COMMENTS</Badge></small>
                            </div>
                        </div>
                    </Link>
                </Col>
                
            )
        })
    }


    // MAIN SECTION: 3 Articles
    if(state.main){
        mainPosts = state.main.map((item) => {
            return(
                <Row style={{marginBottom: '40px', marginTop: '40px'}}>
                    <Col lg={4}>
                        <Link to={`/article/${item.id}`} style={{textDecoration: 'none'}}>
                            <div style={{}}>
                                <img 
                                    src='https://cdn.pdc.business.comcast.com/~/media/business_comcast_com/images/Re-Arch/Business%20Internet/Hero%20Image%20BI%20Mobile.jpg?rev=03310821-ee0a-44aa-9afb-ebdeed329128&h=400&w=640&la=en&hash=998F6E998D66BE1CC407E24432CA509C299546A8' 
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
                                <small>by {item.author}</small>
                                <br />
                                <small><Badge variant="info" style={{padding: '8px', backgroundColor: 'rgba(166,166,166,1)'}}>COMMENTS</Badge></small>
                            </div>
                        </Link>
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


