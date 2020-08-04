import React,{useState, useEffect, useRef} from 'react'
import ReactMarkdown from 'react-markdown'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

import styled from 'styled-components'
import {Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'



export default function Title(props) {

    const renderTime = ({ remainingTime }) => {
        if(remainingTime === 0) {
            return (<p style={{color: 'white'}}>Today is the Event!!</p>)
        }
        const days = Math.floor(remainingTime / 86400)
        const hours = Math.floor(remainingTime / 3600)
        const minutes = Math.floor((remainingTime % 3600) / 60)
        const seconds = remainingTime % 60
      
        // return `${days}:${hours}:${minutes}:${seconds}`

        return (<div>
            <h4>{`${days}:${hours}:${minutes}:${seconds}`}</h4>
        </div>)
    }

    return (
        <Wrapper>
            <Container>
                {/* Image/counter section */}
                <Row style={{marginBottom: '10%'}}>
                    <Col>
                        <div className='conference1' >
                            <div style={{}}>
                                <div style={{}}>
                                    <Button variant='primary' style={{float: 'right', width: '35%'}}>Register</Button>
                                </div>
                                <div style={{width: '100%'}}>
                                    <div style={{marginLeft: '10%'}}>
                                        <CountdownCircleTimer
                                            isPlaying
                                            duration={60}
                                            colors={[
                                            ['#C8B210', 0.33],
                                            ['#F7B801', 0.33],
                                            ['#A30000', 0.33],
                                            ]}
                                        >
                                            {renderTime}
                                            
                                        </CountdownCircleTimer>
                                    </div>
                                </div>
                            </div>

                            <div style={{margin: '22% 25% 3% 3%'}}>
                                <h4>{props.state.Name}</h4>
                                <p>{props.state.summary}</p>
                                <small>{props.state.Date} IN {props.state.Address}</small>
                            </div>
                        </div>
                    </Col>
                </Row>

                {/* Engage,Discover,Apply Section */}
                <Row>
                    <Col>
                        <div>
                            <h3>Engage</h3>
                            <p>{props.state.Engage}</p>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <h3>Discover</h3>
                            <p>{props.state.Discover}</p>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <h3>Apply</h3>
                            <p>{props.state.Apply}</p>
                        </div>
                    </Col>
                </Row>

                {/* Conference tab section */}
                <Row style={{marginTop: '10%'}}>
                    <Col>
                        <Tabs defaultActiveKey="agenda" id="uncontrolled-tab-example" style={{marginBottom: '5%'}}>
                            <Tab eventKey="about" title="About">
                                <ReactMarkdown>
                                    {props.state.Description}
                                </ReactMarkdown>
                            </Tab>
                            <Tab eventKey="agenda" title="Agenda">
                                <ReactMarkdown>
                                    {props.state.Agenda}
                                </ReactMarkdown>
                            </Tab>
                            <Tab eventKey="sponsors" title="Sponsors">
                                {
                                    props.imgUrl.map(img => {
                                        return(
                                            <img src={`http://localhost:1337${img.url}`} />
                                        )
                                    })
                                }
                            </Tab>
                            <Tab eventKey="speakers" title="Speakers">
                                <ReactMarkdown>
                                    {props.state.Speakers}
                                </ReactMarkdown>
                            </Tab>
                            <Tab eventKey="delegates" title="Delegates">
                                <ReactMarkdown>
                                    {props.state.Delegates}
                                </ReactMarkdown>
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>

            </Container>
        </Wrapper>
    )
}


const Wrapper = styled.div`
 font-family: 'Work Sans', sans-serif;

.conference1 {
    background: url(https://wallpaperhd.wiki/wp-content/uploads/1280x1024-wallpaper-trees-forest-top-view-120486-1280x1024.jpg);
    background-repeat: no-repeat;
    background-size: 100%;
    height: 100%;
    padding: 15% 15% 0 0;

    color: rgba(255,255,255,1);

    h4{
        font-weight: bold;
    }
}

`
