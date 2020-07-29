import React from 'react'
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



export default function Main(props) {
    return (
        <Wrapper>
            <Container style={{margin: '0'}} >
                <Row>
                    <Col lg={6}>       
                        <div style={{marginTop: '10px'}}>         
                            <h2>ACTIVISM</h2>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <Breadcrumb className='breadcrumb'>
                            <Breadcrumb.Item href="http://localhost:3000">Home</Breadcrumb.Item>
                            <Breadcrumb.Item active>Activism</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>

                
                
                <Row>
                    <Col lg={12}>
                        <Link to={`/article/1`} style={{textDecoration: 'none'}}>
                            <div style={{marginBottom: '12px'}}>
                                <Image fluid src='https://www.optometry.org.au/wp-content/uploads/States/WA/WAVE20/WAVE20pic_Abstract_Green_Long-2x1.jpg' style={{}}/>
                            </div>
                            <div>
                                <h2>PowerSurge - Clean Energy Innovation</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                <small>FEBRUARY 2021 IN ASPEN, CO</small>
                            </div>
                        </Link>
                    </Col>
                </Row>

                <hr style={{borderTop: '1px solid rgba(166,166,166,.4)', borderRadius: '2px'}} />

                <Row style={{marginTop: '2em'}}>
                    <Col>
                        <div style={{height: '100%', width: '100%'}}>
                            <img src='https://www.perion.com/wp-content/uploads/2017/07/adobe-ads.png' style={{height: '100%', width: '100%'}} />
                        </div>
                    </Col>
                </Row>


                <hr style={{borderTop: '1px solid rgba(166,166,166,.4)', borderRadius: '2px', marginTop: '2em'}} />


                <Row style={{marginBottom: '5%'}}>
                    <Col sm={3}>
                        <div className='imgHolder'>
                            <img src='https://cdn.shrm.org/image/upload/c_crop,h_1189,w_2113,x_0,y_230/c_fit,f_auto,q_auto,w_767/v1/Benefits/iStock-1072338828_b0lx2q?databtoa=eyIxNng5Ijp7IngiOjAsInkiOjIzMCwieDIiOjIxMTMsInkyIjoxNDE5LCJ3IjoyMTEzLCJoIjoxMTg5fSwiMXgxIjp7IngiOjAsInkiOjAsIngyIjoxNDE5LCJ5MiI6MTQxOSwidyI6MTQxOSwiaCI6MTQxOX19' />
                        </div>
                    </Col>
                    <Col sm={9}>
                        <Link to={`/article/2`} style={{textDecoration: 'none'}}>
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



                <Row style={{marginBottom: '5%'}}>
                    <Col sm={3}>
                        <div className='imgHolder'>
                            <img src='https://toolbox.brightspotcdn.com/dims4/default/e1dbc49/2147483647/resize/800x%3E/quality/90/?url=http%3A%2F%2Fziff-davis-brightspot.s3.amazonaws.com%2Fb7%2F80%2F04a9a0584536a8f1a35ce22c64be%2Fairbnb-walmart-plunge-into-politically-inspired-brand-activism.jpg' />
                        </div>
                    </Col>
                    <Col sm={9}>
                        <Link to={`/article/2`} style={{textDecoration: 'none'}}>
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



                {/* VIDEO SECTION */}
                <Row style={{marginBottom: '5%'}}>
                    <Col>
                        <div style={{marginLeft: '11%'}}>
                            <div>
                                <iframe width="75%" height="415" src="https://www.youtube.com/embed/GdHUlaVxDwY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <div>
                                <h2>Activism: An Interview with Walied Soliman</h2>
                                <p>Interview with Walied Soliman, Global Chair and Canadian Chair at Norton Rose Fulbright LLP, discussing M&A and the burgeoning cannabis industry. From the 2019 Shareholder Activism Summit in New York City.</p>
                                <small>Dec 16, 2019</small>
                                <small style={{float: 'right'}}><Badge variant="info" style={{padding: '8px', backgroundColor: 'rgba(166,166,166,1)'}}>COMMENTS</Badge></small>
                            </div>
                        </div>
                    </Col>
                </Row>

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
                        <a href='#'>View All Articles  <BsChevronDown /></a>
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
