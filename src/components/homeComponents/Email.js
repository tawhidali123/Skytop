import React from 'react'
import styled from 'styled-components'
import Card from 'react-bootstrap/Card'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

export default function Email(props) {
    return (
        <div style={{
            marginTop: '3em'
        }}>
            <Card
                bg={'warning'}
                text={'light'}
                style={{}}
                className="mb-2"
            >
                <Card.Header>Join Our Email List</Card.Header>
                <Card.Body>
                    <Card.Title> Stay In Touch! </Card.Title>
                    <Card.Text>
                        Get on the Skytop mailing list to
                        receive notification of new Forbes
                        articles, Skytop video interviews,
                        conference updates, special offers,
                        new products and more.
                    </Card.Text>

                    <div>
                        <FormControl
                        placeholder="Username@example.com"
                        aria-label="Username"
                        />
                        <br />
                        
                        <Button style={{marginRight: '50%'}} >Subscribe</Button>
                        <br />
                        <small>By clicking ‘subscribe’, I agree to Skytop’s lorem ipsum</small>
                    </div>
                    

                </Card.Body>
            </Card>
        </div>
    )
}
