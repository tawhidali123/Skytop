import React, {useState, useEffect} from 'react'
import {Route, Switch, Link} from 'react-router-dom';

import logo from './images/skytop-logo-KO-FINAL.png'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import styled from 'styled-components'

import Home from './components/Home';
import Activism from './components/Activism'
import Csr from './components/Csr'
import InvestManagement from './components/InvestManagement'
import CapitalMarkets from './components/CapitalMarkets'
import Resilience from './components/Resilience'

import Article from './components/Article'
import Conference from './components/Conference'
import ViewAllArticle from './components/ViewAllArticle'

import AllConference from './components/AllConference'
import AboutUs from './components/AboutUs'
 

function App() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true)
    }, 4000);

    return () => clearTimeout(timer);
  }, [])

  return (
    <div>

    {/* MARKETING MODAL */}
    <ModalWrapper>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton  style={{backgroundColor: 'rgba(18, 24, 74, 1)', padding: '6%', color: 'white'}}>
          <Modal.Title>
            <div style={{width: '100%', height: '100%'}}>
            <img src={logo} style={{width: '100%', height: '100%'}} />
            </div>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div style ={{margin: '3%', fontFamily: 'Work Sans', fontWeight: 'bold'}}>
            <h3>Join Our Mailing List!</h3>
            <p style={{color: 'rgba(108,107,107)'}}>You will obtain great exclusive things from us. Premium Things, Gucci, Louis, Versace. Everything you want in life and more!</p>
            <small>copyright: privacy concerns go here</small>
          </div>

          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter Email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicName">
              <Form.Label>Area of Interest</Form.Label>
              <Form.Control type="text" placeholder="Ex: Activism" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="I allow Skytop to send me Emails" />
            </Form.Group>
            <Button variant="warning" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Maybe Next Time!
          </Button>
        </Modal.Footer>
      </Modal>
    </ModalWrapper>



      <Switch>
        <Route exact path='/' exact render={(routerProps) => <Home routerProps={routerProps} />} />
        <Route exact path='/activism' render={(routerProps) => <Activism routerProps={routerProps} />} />
        <Route exact path='/csrSustainability' render={(routerProps) => <Csr routerProps={routerProps} />} />
        <Route exact path='/investmentManagement' render={(routerProps) => <InvestManagement routerProps={routerProps} />} />
        <Route exact path='/capitalMarkets' render={(routerProps) => <CapitalMarkets routerProps={routerProps} />} />
        <Route exact path='/resilienceInnovationCyber' render={(routerProps) => <Resilience routerProps={routerProps} />} />

        
        <Route exact path="/article/:slug">
          <Article />
        </Route>

        <Route exact path="/conference/:slug">
          <Conference />
        </Route>

        <Route exact path='/allConferences'>
          <AllConference />
        </Route>

        <Route exact path='/viewAll/:slug'>
          <ViewAllArticle />
        </Route>

        <Route exact path='/aboutUs'>
          <AboutUs />
        </Route>

      </Switch>  
    </div>
  );
}

export default App;


const ModalWrapper = styled.div`

h3, p, small {
  font-family: 'Work Sans', sans-serif;

}

`
