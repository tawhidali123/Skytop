import React from 'react'
import styled from 'styled-components'
import Badge from 'react-bootstrap/Badge'
import {Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function MainArticle(props) {
    return (
        <Wrapper>
            <Container style={{margin: '0'}}>
                <Row style={{marginBottom: '20px'}}>
                    <Col lg={6}>
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
                                <h2>Impact Investing-Outlook for 2020 and Beyond</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                <small>by Charlie Shea</small>
                                <br />
                                <small><Badge variant="info" style={{padding: '8px', backgroundColor: 'rgba(166,166,166,1)'}}>COMMENTS</Badge></small>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div>
                            <div style={{width: '100%', height: '100%'}}>
                                <img 
                                    src='https://online.wsj.com/media/yen_F_20100810050255.jpg' 
                                    height={'100%'}
                                    width={'100%'}
                                    object-fit={'contain'}                        
                                />
                            </div>
                            <div>
                                <small><Badge variant="info" style={{padding: '8px', backgroundColor: 'rgba(38,136,165,1)'}}>INVESTMENT MANAGEMENT</Badge></small>
                                <h2>UN Encourages Action On Human Rights Through Its CEO Roundtables</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                <small>by Charlie Shea</small>
                                <br />
                                <small><Badge variant="info" style={{padding: '8px', backgroundColor: 'rgba(166,166,166,1)'}}>COMMENTS</Badge></small>
                            </div>
                        </div>
                    </Col>
                </Row>

                <hr style={{borderTop: '1px solid rgba(166,166,166,.4)', borderRadius: '2px'}} />

                <Row style={{marginBottom: '40px', marginTop: '40px'}}>
                    <Col lg={4}>
                        <div style={{}}>
                            <img 
                                src='https://cdn.pdc.business.comcast.com/~/media/business_comcast_com/images/Re-Arch/Business%20Internet/Hero%20Image%20BI%20Mobile.jpg?rev=03310821-ee0a-44aa-9afb-ebdeed329128&h=400&w=640&la=en&hash=998F6E998D66BE1CC407E24432CA509C299546A8' 
                                height={'100%'}
                                width={'100%'}
                            />
                        </div>
                    </Col>
                    <Col lg={8} >
                        <div>
                            <small><Badge variant="info" style={{padding: '8px', backgroundColor: 'rgba(38,136,165,1)'}}>CAPITAL MARKETS</Badge></small>
                            <h2>‘Impact Beyond Numbers’ — GoodWeave’s Global Solution To Child Labor </h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            <small>by Charlie Shea</small>
                            <br />
                            <small><Badge variant="info" style={{padding: '8px', backgroundColor: 'rgba(166,166,166,1)'}}>COMMENTS</Badge></small>
                        </div>
                    </Col>
                </Row>

                <Row style={{marginBottom: '40px'}}>
                    <Col lg={4}>
                        <div style={{}}>
                            <img 
                                src='https://thezebra.org/wp-content/uploads/2020/07/Small-Business-Loans-scaled.jpeg' 
                                height={'100%'}
                                width={'100%'}                       
                            />
                        </div>
                    </Col>
                    <Col lg={8} >
                        <div>
                            <small><Badge variant="info" style={{padding: '8px', backgroundColor: 'rgba(38,136,165,1)'}}>ACTIVISM</Badge></small>
                            <h2>Marriott International Leads Collaboration To Curb Forced Labor </h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            <small>by Charlie Shea</small>
                            <br />
                            <small><Badge variant="info" style={{padding: '8px', backgroundColor: 'rgba(166,166,166,1)'}}>COMMENTS</Badge></small>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col lg={4}>
                        <div style={{}}>
                            <img 
                                src='https://www.rightway.co.nz/hubfs/Blog%20images/A%209%20step%20feasibility%20test%20for%20your%20new%20business%20idea.jpeg' 
                                height={'100%'}
                                width={'100%'}                      
                            />
                        </div>
                    </Col>
                    <Col lg={8} >
                        <div>
                            <small><Badge variant="info" style={{padding: '8px', backgroundColor: 'rgba(38,136,165,1)'}}>CSR & SUSTAINABILITY</Badge></small>
                            <h2>Creating A Unified Vision</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            <small>by Charlie Shea</small>
                            <br />
                            <small><Badge variant="info" style={{padding: '8px', backgroundColor: 'rgba(166,166,166,1)'}}>COMMENTS</Badge></small>
                        </div>
                    </Col>
                </Row>
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
    }
    
`


