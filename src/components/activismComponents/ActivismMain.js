import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {fetchActivism} from '../../redux/actions/postActions'

import {Route, Switch, Link} from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import styled from 'styled-components'
import Image from 'react-bootstrap/Image'
import Badge from 'react-bootstrap/Badge'
import {BsChevronDown} from 'react-icons/bs'
import Moment from 'react-moment'



export default function Main(props) {

    const state = useSelector(state => state.posts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchActivism())
    }, [])


    let activismHighlight
    let activismMainArticle
    let activismVideos

    console.log(state)


    if(state.activism) {
        // HIGHLIGHT ARTICLE
        activismHighlight = state.activism[0].articles.slice(0, 1).map(item => {
            return(
                <Col lg={11}>
                    <Link to={`/article/${item.id}`} style={{textDecoration: 'none'}}>
                        <div style={{marginLeft: '15%'}}>
                            <div style={{marginBottom: '12px'}}>
                                <Image fluid src={`http://localhost:1337${item.media[0].url}`} style={{}}/>
                            </div>
                            <div>
                                <h2>{item.title}</h2>
                                <p>{item.description}</p>
                                <small><Moment format='LLLL'>{item.updated_at}</Moment></small>
                            </div>
                        </div>
                    </Link>
                </Col>
            )
        })

        // MAIN ARTICLE
        activismMainArticle = state.activism[0].articles.slice(1, 3).map(item => {
            return(
                <Row style={{marginBottom: '5%'}}>
                    <Col sm={3}>
                        <div className='imgHolder'>
                            <img src={`http://localhost:1337${item.media[0].url}`} />
                        </div>
                    </Col>
                    <Col sm={9}>
                        <Link to={`/article/${item.id}`} style={{textDecoration: 'none'}}>
                            <div>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <small><Moment format='LLLL'>{item.updated_at}</Moment></small>
                                <br />
                                <small><Badge variant="info" style={{padding: '8px', backgroundColor: 'rgba(166,166,166,1)'}}>COMMENTS</Badge></small>
                            </div>
                        </Link>
                    </Col>
                </Row>
            )
        })


        // VIDEO CONTENTS
        activismVideos = state.activism[0].videos.map(item => {
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
                                <small><Moment format='LLLL'>{item.updated_at}</Moment></small>
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
            <Container style={{}} >
                <Row>
                    <Col lg={6}>       
                        <div style={{marginTop: '10px'}}>         
                            <h2>ACTIVISM</h2>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <Breadcrumb className='breadcrumb'>
                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                            <Breadcrumb.Item active>Activism</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>

                
                
                {/* HIGHLIGHT */}
                <Row>
                    {activismHighlight}
                </Row>

                <hr style={{borderTop: '1px solid rgba(166,166,166,.4)', borderRadius: '2px'}} />


                {/* AD SPACE */}
                <Row style={{marginTop: '2em'}}>
                    <Col>
                        <div style={{height: '100%', width: '100%'}}>
                            <img src='https://www.perion.com/wp-content/uploads/2017/07/adobe-ads.png' style={{height: '100%', width: '100%'}} />
                        </div>
                    </Col>
                </Row>


                <hr style={{borderTop: '1px solid rgba(166,166,166,.4)', borderRadius: '2px', marginTop: '2em'}} />


                {/* MAIN */}
                {activismMainArticle}


                <hr style={{borderTop: '1px solid rgba(166,166,166,.4)', borderRadius: '2px', marginTop: '2em'}} />



                {/* VIDEO SECTION */}
                
                {activismVideos}

                <hr style={{borderTop: '1px solid rgba(166,166,166,.4)', borderRadius: '2px', marginTop: '2em'}} />


                <Row style={{marginBottom: '5%'}}>
                    <Col sm={3}>
                        <div>
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Okg1tj6zMYw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                        
                        </div>
                    </Col>
                    <Col sm={9}>
                        <Link to={`#`} style={{textDecoration: 'none'}}>
                            <div>
                                <h3>UN Encourages Action On Human Rights Through Its CEO Roundtables</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                <small>by Charlie Shea / January 27, 2020</small>
                                <br />
                                <small><Badge variant="info" style={{padding: '8px', backgroundColor: 'rgba(166,166,166,1)'}}>COMMENTS</Badge></small>
                            </div>
                        </Link>
                    </Col>
                </Row>

                <hr style={{borderTop: '1px solid rgba(166,166,166,.4)', borderRadius: '2px', marginTop: '2em'}} />

                <Row>
                    <Col style={{marginLeft: '50%'}}>
                        <a href='/viewAll/1'>View All Articles  <BsChevronDown /></a>
                    </Col>
                </Row>

                <hr style={{borderTop: '1px solid rgba(166,166,166,.4)', borderRadius: '2px', marginTop: '2em'}} />

            </Container>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    font-family: 'Work Sans', sans-serif; 
    text-decoration: none;

    h2 {
        font-weight: bold;
        color: rgba(0,0,0,1);
    }

    h3 {
        font-weight: bold;
        color: rgba(0,0,0,1);
    }

    p{
        color: rgba(108,107,107);
    }

    small {
        color: rgba(108,107,107);
        font-weight: bold;
    }

    img {
        height: 100%;
        width: 100%;
    }

    .breadcrumb {
        background-color: white;
        float: right;

    }


    
`
