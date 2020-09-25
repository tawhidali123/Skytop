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
                    
                        <div className='conference1' style={{background: `url(https://159.65.230.30${item.backgroundImage.url})`}}>
                        <a href={`/conference/${item.id}`} style={{textDecoration: 'none', color: 'white'}}>
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




    return (
        <Wrapper>
            <Container style={{marginTop: '10%'}}>
                <Row style={{marginBottom: '10%'}}>
                    <Col>
                        <a href='/allConferences'>
                            <h4 style={{fontWeight: 'bold', color: 'black'}}>Conferences</h4>
                        </a>
                    </Col>
                </Row>

                {conferencePosts}

                <Row style={{marginBottom: '10%'}}>
                    <Col>
                        <a href='/allConferences'>
                            <small><Badge variant="info" style={{padding: '8px', backgroundColor: 'rgba(166,166,166,1)'}}>VIEW ALL</Badge></small>
                        </a>
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
