import React from 'react'
import styled from 'styled-components'
import Badge from 'react-bootstrap/Badge'

export default function MainArticle(props) {
    return (
        <Wrapper>
            <div className='imgHolder'>
                <img 
                    src='https://previews.123rf.com/images/latkun/latkun1712/latkun171200130/92172856-empty-transparent-background-seamless-pattern.jpg' 
                    height={'175px'}
                    width={'250px'}
                />
            </div>
            <div>
                <small><Badge variant="info">RESILIENCE, INNOVATION + CYBER SECURITY</Badge> | FEB 14</small>
                <h3>UN Encourages Action On Human Rights Through Its CEO Roundtables</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <small>by Charlie Shea</small>
            </div>


            <div className='imgHolder'>
                <img 
                    src='https://thumbs.dreamstime.com/b/play-transparency-button-web-background-design-empty-icon-vector-illustration-179899738.jpg' 
                    height={'175px'}
                    width={'250px'}
                />
            </div>
            <div>
                <small><Badge variant="info">CAPITAL MARKETS</Badge> | FEB 1</small>
                <h3>Creating A Unified Vision</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <small>by Charlie Shea</small>
            </div>


            <div className='imgHolder'>
                <img 
                    src='https://thumbs.dreamstime.com/b/play-transparency-button-web-background-design-empty-icon-vector-illustration-179899738.jpg' 
                    height={'175px'}
                    width={'250px'}
                />
            </div>
            <div>
                <small><Badge variant="info">CSR & SUSTAINABILITY</Badge> I FEB 1</small>
                <h3>‘Impact Beyond Numbers’ — GoodWeave’s Global Solution To Child Labor </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <small>by Charlie Shea</small>
            </div>


            <div className='imgHolder'>
                <img 
                    src='https://previews.123rf.com/images/latkun/latkun1712/latkun171200130/92172856-empty-transparent-background-seamless-pattern.jpg' 
                    height={'175px'}
                    width={'250px'}
                />
            </div>
            <div>
                <small><Badge variant="info">ACTIVISM</Badge> I JAN 31</small>
                <h3>Marriott International Leads Collaboration To Curb Forced Labor </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <small>by Charlie Shea</small>
            </div>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 25% 50%;
    margin: 25px;
    
`


