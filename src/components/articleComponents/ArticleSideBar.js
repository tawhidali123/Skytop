import React from 'react'
import styled from 'styled-components'
import {Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'
import Email from '../homeComponents/Email'


export default function ArticleSideBar(props) {
    return (
        <Wrapper>
            <Container style={{padding: '0', margin: '10% 0'}}>
                {/* CONFERENCES */}
                <Row style={{marginBottom: '10%'}}>
                    <Col>
                        <h4 style={{fontWeight: 'bold'}}>Related Conferences</h4>
                    </Col>
                </Row>

                <Row style={{marginBottom: '10%'}}>
                    <Col>
                        <div className='conference1'>
                            <h4>Shareholder Activism Summit</h4>
                            <p>Unlocking Shareholder Value</p>
                            <small>NOVEMBER 19, 2020 IN NEW YORK, NY</small>
                        </div>
                    </Col>
                </Row>

                <Row style={{marginBottom: '10%'}}>
                    <Col>
                        <div className='conference2'>
                            <h4>Sustainability & Risk Management</h4>
                            <p>For Sustainability, Risk, Practice and Subject Matter Experts</p>
                            <small>OCTOBER 24, 2020 IN ARLINGTON, VA</small>
                        </div>
                    </Col>
                </Row>

                <hr style={{borderTop: '1px solid rgba(166,166,166,.4)', borderRadius: '2px'}} />


                {/* RELATED ARTICLES */}
                <Row style={{marginBottom: '10%'}}>
                    <Col>
                        <h4 style={{fontWeight: 'bold'}}>Related Articles</h4>
                    </Col>
                </Row>

                <Row style={{marginBottom: '10%'}}>
                    <Col>
                        <div>
                            <h6>UN Encourages Action On Human Rights Through Its CEO Roundtables</h6>
                            <small>by Charlie Shea Staff Writer, January 27 2020</small>
                            <br />
                            <small><Badge variant="info" style={{padding: '8px', backgroundColor: 'rgba(166,166,166,1)'}}>COMMENTS</Badge></small>
                        </div>
                    </Col>
                </Row>

                <Row style={{marginBottom: '10%'}}>
                    <Col>
                        <div>
                            <h6>Automated Emissions Reduction Technology shapes the future of Electricity Consumption</h6>
                            <small>by Charlie Shea Staff Writer, January 27 2020</small>
                            <br />
                            <small><Badge variant="info" style={{padding: '8px', backgroundColor: 'rgba(166,166,166,1)'}}>COMMENTS</Badge></small>
                        </div>
                    </Col>
                </Row>

                <hr style={{borderTop: '1px solid rgba(166,166,166,.4)', borderRadius: '2px'}} />

                <Email />


            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
 font-family: 'Work Sans', sans-serif;

.conference1 {
    padding: 25px;
    background: url(https://s3.envato.com/files/232476805/image.jpg);
    background-repeat: no-repeat;
    background-size: auto;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    color: rgba(255,255,255,1);

    h4{
        font-weight: bold;
    }
}


.conference2 {
    padding: 25px;
    background: url(https://wallup.net/wp-content/uploads/2015/12/134284-abstract-748x421.jpg);
    background-repeat: no-repeat;
    background-size: auto;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    color: rgba(255,255,255,1);

    h4{
        font-weight: bold;
    }
}

h6 {
    font-weight: bold;
}
`
