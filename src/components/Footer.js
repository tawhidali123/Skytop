import React from 'react'
import styled from 'styled-components'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'

export default function Footer(props) {
    return (
        <Wrapper>
            <div className='main'>
                <img src='https://i0.wp.com/skytopstrategies.com/wp-content/uploads/2018/05/skytop_strategies_logo.png?w=152&ssl=1' />
                <br />
                <small style={{marginRight: '25px'}}>475 Park Ave South Suite 920 New York, NY 10016</small>
                <AiOutlineTwitter style={{margin: '10px'}} />
                <AiFillLinkedin />
                <br />
                <small>info@skytopstrategies.com</small>
            </div>
                
            <div className='links'>
                <ul className='policy'>
                    <li>ABOUT US</li>
                    <li>CANCELLATION POLICY</li>
                    <li>PRIVACY POLICY</li>
                    <li>CAREERS</li>
                    <li>BOARD OF ADVISORS</li>
                    <li>OUR TEAM</li>
                </ul>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background: rgba(7, 36, 79, 1);
    color: rgba(217, 217, 217, 1);
    padding: 10px;

    .policy {
        list-style-type: none;
    }

    li {
        float: left;
        margin: 10px;
    }

    .main {
        width: 35%;
        margin: 10px;
    }

    .links{
        float: right;
        width: 40%;
    }

`
