import React from 'react'
import styled from 'styled-components'
import {Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Breadcrumb from 'react-bootstrap/Breadcrumb'

export default function AboutMain(props) {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <Col lg={6}>
                        <div style={{marginTop: '10px'}}>         
                            <h2>About Skytop</h2>
                        </div>
                    </Col>

                    <Col lg={6}>
                        <Breadcrumb className='breadcrumb'>
                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                            <Breadcrumb.Item active>About Us</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <div style={{width: '100%', height: '100%'}}>
                            <img src='https://img.etimg.com/thumb/msid-75089937,width-1070,height-580,imgsize-556530,overlay-economictimes/photo.jpg'
                                style={{width: '100%', height: '100%'}}
                             />
                        </div>
                    </Col>
                </Row>
                <Row>        
                    <Col>
                        <div>
                            <h1>Engage. Discover. Apply.</h1>
                            <p>
                                Skytop provides a content driven platform to explore the emerging factores that
                                disrupt the corporate landscape and drive company value.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                                dolore magna aliqua. 
                            </p>
                        </div>
                    </Col>
                </Row>

                <hr style={{borderTop: '1px solid rgba(166,166,166,.4)', borderRadius: '2px', marginTop: '2em'}} />

                <Row style={{marginBottom: '5%'}}>
                    <Col>
                        <div>
                            <h3>Partner Services</h3>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div style={{width: '100%', height: '100%'}}>
                            <img src='https://www.thebalancecareers.com/thmb/JV7xhLMROcaLwh744GjaTFpmKk0=/3979x2238/smart/filters:no_upscale()/business-meeting-982874716-5bce2d8fc9e77c0051938d79.jpg'
                                style={{width: '100%', height: '100%'}}
                             />
                        </div>
                    </Col>
                </Row>
                <Row style={{marginBottom: '5%'}}>        
                    <Col>
                        <div>
                            <h1>Digital News Portal</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row style={{marginBottom: '5%'}}>        
                    <Col>
                        <div>
                            <h3>On-Site Advertising</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row style={{marginBottom: '5%'}}>        
                    <Col>
                        <div>
                            <h3>Sponsored Content</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row style={{marginBottom: '5%'}}>        
                    <Col>
                        <div>
                            <h3>Portal Subscription</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row style={{marginBottom: '5%'}}>        
                    <Col>
                        <div>
                            <h1>Headquarters</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row style={{marginBottom: '5%'}}>        
                    <Col>
                        <div>
                            <h3>Workshops</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row style={{marginBottom: '5%'}}>        
                    <Col>
                        <div>
                            <h3>Digital Video Interviews</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row style={{marginBottom: '5%'}}>        
                    <Col>
                        <div>
                            <h3>Extended Series Interviews</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row style={{marginBottom: '5%'}}>        
                    <Col>
                        <div>
                            <h3>Sprout Conferences</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </Col>
                </Row>



            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
font-family: 'Work Sans', sans-serif; 
text-decoration: none;

.breadcrumb {
    background-color: white;
    float: right;

}

h1, h2, h3 {
    font-weight: bold;
    color: rgba(0,0,0,1);
}

p {
    color: rgba(108,107,107);
}

`
