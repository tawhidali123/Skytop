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
import MyModal from './MyModal'
import Moment from 'react-moment'



export default function Title(props) {

    // ModalState
    const [modalShow, setModalShow] = useState(false);

    // TIMER
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
                        <div className='conference1' style={{background: `url(http://localhost:1337${props.backgroundImg})`}}>
                            <div style={{}}>
                                <div style={{}}>
                                    <Button variant='primary' style={{float: 'right', width: '35%'}} onClick={() => setModalShow(true)}>
                                        Register
                                    </Button>

                                    <MyModal show={modalShow} onHide={() => setModalShow(false)} />
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

                            <div style={{margin: '10% 25% 2% 3%'}}>
                                <h4>{props.state.Name}</h4>
                                <p>{props.state.summary}</p>
                                <small>
                                    <Moment format='LLLL'>
                                        {props.state.Date} 
                                    </Moment>
                                </small>
                                <small> IN {props.state.Address}</small>
                            </div>
                        </div>
                    </Col>
                </Row>

                {/* Engage,Discover,Apply Section */}
                <Row>
                    <Col style={{border: '2px solid rgba(38,136,165,1)', borderRadius: '10px'}}>
                        <div style={{padding: '5%'}}>
                            <h5 style={{color: 'rgba(38,136,165,1)', fontWeight: 'bold'}}>Engage</h5>
                            <p>{props.state.Engage}</p>
                        </div>
                    </Col>
                    <Col style={{border: '2px solid rgba(38,136,165,1)', borderRadius: '10px', margin: '0 3%'}}>
                        <div style={{padding: '5%'}}>
                            <h5 style={{color: 'rgba(38,136,165,1)', fontWeight: 'bold'}}>Discover</h5>
                            <p>{props.state.Discover}</p>
                        </div>
                    </Col>
                    <Col style={{border: '2px solid rgba(38,136,165,1)', borderRadius: '10px'}}>
                        <div style={{padding: '5%'}}>
                            <h5 style={{color: 'rgba(38,136,165,1)', fontWeight: 'bold'}}>Apply</h5>
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
