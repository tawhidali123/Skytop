import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {fetchConference} from '../../redux/actions/postActions'
import { Link } from 'react-router-dom';
import Moment from 'react-moment'

import {Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components';
import Badge from 'react-bootstrap/Badge'

import Image1 from '../../images/timingstockr.jpg'

export default function UpcomingConf(props) {

    const state = useSelector(state => state.posts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchConference())
    }, [])


    let conferencePosts

    if(state.conference){
        conferencePosts = state.conference.map((item) => {
            return(
                <Row style={{marginBottom: '10%'}}>
                    <Col>
                    
                        <div className='conference1'>
                        <a href={`/conference/3`} style={{textDecoration: 'none', color: 'white'}}>
                            <h4>{item.Name}</h4>
                            <p>{item.summary}</p>
                            <small>
                                <Moment format='LLLL'>
                                    {item.Date}
                                </Moment>
                            </small>
                        </a>
                        </div>
                    
                    </Col>
                </Row>
            )
        })
    }

    // console.log(state)



    return (
        <Wrapper>
            <Container style={{marginTop: '10%'}}>
                <Row style={{marginBottom: '10%'}}>
                    <Col>
                        <h4 style={{fontWeight: 'bold'}}>Conferences</h4>
                    </Col>
                </Row>

                {conferencePosts}

                {/* <Row style={{marginBottom: '10%'}}>
                    <Col>
                    
                        <div className='conference1'>
                        <a href={`/conference/3`} style={{textDecoration: 'none', color: 'white'}}>
                            <h4>Shareholder Engagement & Communication London</h4>
                            <p>Constructive Strategies for Issuers</p>
                            <small>October 7, 2020 IN LONDON, UNITED KINGDOM</small>
                        </a>
                        </div>
                    
                    </Col>
                </Row>

                <Row style={{marginBottom: '10%'}}>
                    <Col>
                        <div className='conference2'>
                        <a href={`/conference/2`} style={{textDecoration: 'none', color: 'white'}}>
                            <h4>Impact Investing</h4>
                            <p>Driving Social Purpose Through Measurable Investment Returns</p>
                            <small>September 17, 2020 IN BOSTON, MA</small>
                        </a>
                        </div>
                    </Col>
                </Row>

                <Row style={{marginBottom: '10%'}}>
                    <Col>
                        <div className='conference3'>
                        <a href={`/conference/1`} style={{textDecoration: 'none', color: 'white'}}>
                            <h4>Water & Long-Term Value Summit</h4>
                            <p>Framework for Creating a Diverse and Dynamic Marketplace</p>
                            <small>September 1, 2020 IN Indian Springs Calistoga 1712 Lincoln Ave Calistoga, CA</small>
                        </a>
                        </div>
                    </Col>
                </Row> */}

                <Row style={{marginBottom: '10%'}}>
                    <Col>
                        <small><Badge variant="info" style={{padding: '8px', backgroundColor: 'rgba(166,166,166,1)'}}>VIEW ALL</Badge></small>
                    </Col>
                </Row>
        
                <hr style={{borderTop: '1px solid rgba(166,166,166,.4)', borderRadius: '2px'}} />
                
            </Container>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    font-family: 'Work Sans', sans-serif;

    .conference1 {
        padding: 25px;
        background: url(http://localhost:1337/uploads/financial_sector_banking_techonology_evolution_stability_bbva_1024x683_83583a7445.jpeg);
        background-repeat: no-repeat;
        background-size: auto;
        text-decoration: none;

        color: rgba(255,255,255,1);

        h4{
            font-weight: bold;
        }
    }


    .conference2 {
        padding: 25px;
        background: url(https://riverlifepgh.org/wp-content/uploads/2020/03/Blue-Business-Background.jpg);
        background-repeat: no-repeat;
        background-size: auto;

        color: rgba(255,255,255,1);

        h4{
            font-weight: bold;
        }
    }


    .conference3 {
        padding: 25px;
        background: url(https://st3.depositphotos.com/1357262/18191/v/600/depositphotos_181914472-stock-video-computer-network-plexus-abstract-network.jpg);
        background-repeat: no-repeat;
        background-size: auto;

        color: rgba(255,255,255,1);

        h4{
            font-weight: bold;
        }
    }


`
