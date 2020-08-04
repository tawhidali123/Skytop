import React,{useState, useEffect} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
} from "react-router-dom";
import styled from 'styled-components'
import Navigation from './Navigation'
import Footer from './Footer'
import Title from './conferenceComponents/Title'
import ConferenceSideBar from './conferenceComponents/ConferenceSideBar'

import {Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Conference(props) {

    let [state, setState] = useState([])
    let [imgUrl, setImgUrl] = useState([]) 
    let { slug } = useParams();

    useEffect(() => {
        fetch(`http://localhost:1337/conferences/${slug}`)
        .then(resp => resp.json())
        .then(res => {
            console.log(res)
            setState(res)
            setImgUrl(res.Sponsors)
        })
    }, [])

    return (
        <Wrapper>
            <Navigation />

            <Container>
                <Row>
                    <Col lg={9}>
                        <Title state={state} imgUrl={imgUrl} />
                    </Col>

                    <Col lg={3}>
                        <ConferenceSideBar state={state} />
                    </Col>
                </Row>
            </Container>

            <Footer />
        </Wrapper>
    )
}

const Wrapper = styled.div`

`
