import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';
import HighlightArticle from './HighlightArticle'
import SideBar from './SideBar'

export default function LandingPage(props) {
    return (
        <Wrapper>
            <div className='slider' style={{margin: '20px'}}>
                <Carousel >
                    <Carousel.Item>
                        <img
                        height={'500px'}
                        className="d-block w-100"
                        src="https://lh3.googleusercontent.com/proxy/5qT6Qcf9XXDwIihcv2TjERdY3gZlkziKxzh1ZM-5BAmFFLk-y_hBCsvM9gExxULNy8T-jJrsflbezIbrJkl8Ib-wZWWfWCa7SVs"
                        alt="First slide"
                        />
                
                        <Carousel.Caption>
                        <small>MARCH 26, 2020 IN NEW YORK, NY</small>
                        <h2>First slide label</h2>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        height={'500px'}
                        className="d-block w-100"
                        src="https://lh3.googleusercontent.com/proxy/ChSTMPTA2h-YZ9uS8gnbkNvxaboHjiUGb3PhURV6DslV3SIGviJ0lv3yQD94l8VYAaIb1zre-MbDMX-2UVvRyjnVi4u6dusJB59yV_XjTcWR9CZQRIO-ORQ"
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <small>MARCH 26, 2020 IN NEW YORK, NY</small>
                        <h2>Second slide label</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        height={'500px'}
                        className="d-block w-100"
                        src="https://i2.wp.com/www.explora.us/wp-content/uploads/2020/01/blank_slider_springartboard-1.png?ssl=1"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <small>MARCH 26, 2020 IN NEW YORK, NY</small>
                        <h2>Third slide label</h2>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            <div className='highLightArticle'>
                <HighlightArticle />
            </div>

            <div className='sideBar'>
                <SideBar />
            </div>

            
        </Wrapper>
    )
}


const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 40% 35% 25%;

    .highLightArticle {
        margin: 20px;
    }
`
