import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import styled from 'styled-components'

export default function Main(props) {
    return (
        <Wrapper>
            <Breadcrumb>
                <Breadcrumb.Item href="http://localhost:3000">home</Breadcrumb.Item>
                <Breadcrumb.Item active>activism</Breadcrumb.Item>
            </Breadcrumb>

            <div>
                <h1>ACTIVISM</h1>
            </div>

            <div className='mainContent'>
                <div className='mainMedia'>
                    <div className='imgHolder'>
                        <img src='https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/miscemptyroom-ploy-room-type1-light1-12.jpg?bg=transparent&con=3&cs=srgb&dpr=1&fm=jpg&ixlib=php-3.1.0&q=80&usm=15&vib=3&w=1300&s=4cfbfc580e13ee4040af1ef61ca48276' />
                    </div>
                    <small>FEBRUARY 2021 IN ASPEN, CO</small>
                    <h2>PowerSurge - Clean Energy Innovation</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>
            </div>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    img {
        height: 100%;
        width: 100%;
    }

    .imgHolder {
        height: 40vh;
        width: 35vw;
    }
`
