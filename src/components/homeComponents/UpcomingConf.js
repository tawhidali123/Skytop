import React from 'react'
import {Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components';

export default function UpcomingConf(props) {
    return (
        <Wrapper>
        <Container style={{margin: '0'}}>
            <div style={{margin: '15px'}}>
                <small>UPCOMING CONFERENCES <a href='#'>See All</a></small>
            </div>

            

            <div>
                <small>NOVEMBER 19, 2019 IN NEW YORK, NY</small>
                <h4>Shareholder Activism Summit</h4>
                <p>Unlocking Shareholder Value</p>
            </div>

            <div>
                <small>OCTOBER 24, 2019 IN ARLINGTON, VA</small>
                <h4>Sustainability & Risk Management</h4>
                <p>For Sustainability, Risk, Practice and Subject Matter Experts</p>
            </div>

            <div>
                <small>OCTOBER 17, 2019 IN STOCKHOLM, SWEDEN</small>
                <h4>ESG Integration Summit</h4>
                <p>Framework for Creating a Diverse and Dynamic Marketplace</p>
            </div>

            <div>
                <small>JANUARY 23, 2020 IN FRANKFURT, GERMANY</small>
                <h4>Shareholder Activism & Engagement Germany</h4>
                <p>For Management, Boards and Institutional Shareholders</p>
            </div>

            <div>
                <small>NOVEMBER 19, 2019 IN NEW YORK, NY</small>
                <h4>Shareholder Activism Summit</h4>
                <p>Unlocking Shareholder Value</p>
            </div>

            <hr style={{borderTop: '5px solid #bbb', borderRadius: '5px'}} />
            
        </Container>
        </Wrapper>
    )
}


const Wrapper = styled.div`

`
