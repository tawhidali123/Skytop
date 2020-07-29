import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {fetchPosts, singlePost} from '../../redux/actions/postActions'


import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';
import HighlightArticle from './HighlightArticle'
import SideBar from './SideBar'
import {Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'

export default function LandingPage(props) {

    const state = useSelector(state => state.posts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPosts())
        dispatch(singlePost())
    }, [])


    return (
        <Wrapper>
        <Container style={{margin: '0'}}>
            <Row>
                <Col xs={8}>
                    <div className='slider' style={{marginTop: '8%'}}>
                        <Carousel className='carousel-indicator'>
                            <Carousel.Item>
                                <div>
                                    <img
                                    className="d-block w-100"
                                    src="https://slidervilla.com/dbox-lite/files/2014/05/1.jpg"
                                    alt="First slide"
                                />
                                </div>
                        
                                <Carousel.Caption className='carousel-caption' style={{height: '36vh'}}>
                                    <div style={{textAlign: 'start', padding: '12px'}}>
                                        <small><Badge variant="info" style={{padding: '8px', backgroundColor: 'rgba(38,136,165,1)'}}>CAPITAL MARKETS</Badge></small>
                                        <h2 style={{color: 'rgba(0,0,0,1)'}}>Impact Investing</h2>
                                        <p style={{color: 'rgba(108,107,107)'}}>
                                            Impact investing is growing into an attractive asset class to select asset owners and institutional investors. This program convenes experts and practice 
                                            leaders on how impact investing is unfolding and how investors are able to develop their strategies effectively by focusing on the market rate of return.
                                        </p>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div>
                                    <img
                                    className="d-block w-100"
                                    src="https://slidervilla.com/dbox-lite/files/2014/05/1.jpg"
                                    alt="First slide"
                                />
                                </div>
                        
                                <Carousel.Caption className='carousel-caption' style={{height: '36vh'}}>
                                    <div style={{textAlign: 'start', padding: '12px'}}>
                                        <small><Badge variant="info" style={{padding: '8px', backgroundColor: 'rgba(38,136,165,1)'}}>CSR & SUSTAINABILITY</Badge></small>
                                        <h2 style={{color: 'rgba(0,0,0,1)'}}>Water & Long-Term Value Summit</h2>
                                        <p style={{color: 'rgba(108,107,107)'}}>The Skytop Strategies team is dedicated to crafting thought provoking
                                            agendas that are diverse, not only in areas of thought and experience,
                                            but in the broad range of attending speakers.
                                        </p>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div>
                                    <img
                                    className="d-block w-100"
                                    src="https://slidervilla.com/dbox-lite/files/2014/05/1.jpg"
                                    alt="First slide"
                                />
                                </div>
                        
                                <Carousel.Caption className='carousel-caption' style={{height: '36vh'}}>
                                    <div style={{textAlign: 'start', padding: '12px'}}>
                                        <small><Badge variant="info" style={{padding: '8px', backgroundColor: 'rgba(38,136,165,1)'}}>ACTIVISM</Badge></small>
                                        <h2 style={{color: 'rgba(0,0,0,1)'}}>Water & Long-Term Value Summit</h2>
                                        <p style={{color: 'rgba(108,107,107)'}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </Col>

                <Col xs={4}>
                    <div className='highLightArticle' >
                        <HighlightArticle state={state} />
                    </div>
                </Col>
            </Row>
        </Container>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    font-family: 'Work Sans', sans-serif;

    .carousel-indicator li {
        height: 10px;
        width: 10px;
        border-radius: 100%;
        background-color: #17a2b8;  
    }

    .carousel-caption{
        position: static;
        margin-top: 10px;

    }

        
    h2{
        font-weight: 900;
    }

    p{
        font-family: 'PT Serif', serif;
    }

    .slider {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    
`
