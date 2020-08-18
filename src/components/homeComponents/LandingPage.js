import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {fetchCarousal, fetchFeatures} from '../../redux/actions/postActions'

import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';
import FeatureArticle from './FeatureArticle'
import SideBar from './SideBar'
import {Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'

export default function LandingPage(props) {

    const state = useSelector(state => state.posts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCarousal())
        dispatch(fetchFeatures())
    }, [])

    

    let articles
    let conferences
   
    if(state.carousal){
        articles  = state.carousal[0].articles.map(article => {
            return(
                <Carousel.Item>
                    <div>
                        <img
                        className="d-block w-100"
                        src={`http://localhost:1337${article.media[0].url}`}
                        alt="First slide"
                    />
                    </div>
            
                    <Carousel.Caption className='carousel-caption' style={{height: '36vh'}}>
                        <div style={{textAlign: 'start', padding: '12px'}}>
                            <small><Badge variant="info" style={{padding: '8px', backgroundColor: 'rgba(38,136,165,1)'}}>CAPITAL MARKETS</Badge></small>
                            <h2 style={{color: 'rgba(0,0,0,1)'}}>{article.title}</h2>
                            <p style={{color: 'rgba(108,107,107)'}}>
                                {article.description}
                            </p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            )
        })

        conferences = state.carousal[0].conferences.map(conference => {
            console.log(conference)
            return(
                <Carousel.Item>
                    <div>
                        <img
                        className="d-block w-100"
                        src="https://lh3.googleusercontent.com/-xnevwyyd-QI/XysDP-2Q_hI/AAAAAAAAAiI/Q8Iv3r2fyVoRd9Cc5dw_GggIs2KAlfycgCK8BGAsYHg/s512/Ben_Franklin_Stock_Nums_Keyboard.width-800.wi.width-1200_9LPbtxx%2Bcopy.jpg"
                        alt="First slide"
                    />
                    </div>
            
                    <Carousel.Caption className='carousel-caption' style={{height: '36vh'}}>
                        <div style={{textAlign: 'start', padding: '12px'}}>
                            <small><Badge variant="info" style={{padding: '8px', backgroundColor: 'rgba(38,136,165,1)'}}>CAPITAL MARKETS</Badge></small>
                            <h2 style={{color: 'rgba(0,0,0,1)'}}>{conference.Name}</h2>
                            <p style={{color: 'rgba(108,107,107)'}}>
                                {conference.Description}
                            </p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            )
        })
       
    }
        
    


    return (
        <Wrapper>
        <Container style={{margin: '0'}}>
            <Row>
                <Col xs={8}>
                    <div className='slider' style={{marginTop: '8%'}}>
                        <Carousel className='carousel-indicator'>
                            {articles}
                            {conferences}
                        </Carousel>
                    </div>
                </Col>

                <Col xs={4}>
                    <div className='highLightArticle' >
                        <FeatureArticle state={state} />
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

    

    
`
