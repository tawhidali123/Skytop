import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {fetchAllConference} from '../redux/actions/postActions'

import styled from 'styled-components'
import Navigation from './Navigation'
import Footer from './Footer'

import {Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'
import { Link } from 'react-router-dom';
import Moment from 'react-moment'


export default function AllConference(props) {

    const state = useSelector(state => state.posts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllConference())
    }, [])

    console.log(state)

    let conferences

    if(state.allConferences) {
        conferences = state.allConferences.map((conference) => {
            return (
                <Row style={{marginBottom: '40px', marginTop: '40px'}}>
                    <Col lg={4}>
                        <Link to={`/conference/${conference.id}`} style={{textDecoration: 'none'}}>
                            <div style={{}}>
                                <img 
                                    src={`http://159.65.230.30${conference.backgroundImage.url}`} 
                                    height={'100%'}
                                    width={'100%'}
                                />
                            </div>
                        </Link>
                    </Col>
                    <Col lg={8} >
                        <Link to={`/conference/${conference.id}`} style={{textDecoration: 'none'}}>
                            <div>
                                <small><Badge variant="info" style={{padding: '8px', backgroundColor: 'rgba(38,136,165,1)'}}>{conference.category.name}</Badge></small>
                                <h2>{conference.Name}</h2>
                                <p>{conference.Description}</p>
                                <small style={{color: 'rgba(108,107,107)', fontWeight: 'bold'}}>
                                    <Moment format='LLLL'>
                                        {conference.Date}
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
                        <h1 style={{fontWeight: 'bold'}}>Conferences</h1>
                    </Col>
                </Row>

                {conferences}
            </Container>

            <Footer />
        </Wrapper>
    )
}

const Wrapper = styled.div`
 h2 {
    color: rgba(0,0,0,1);
    font-weight: bold;
 }

 p {
    color: rgba(108,107,107);
 }

`
