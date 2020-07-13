import React, {useState, useEffect} from 'react'
import Navigation from './Navigation'
import Footer from './Footer'
import Main from './activismComponents/Main'

export default function Activism(props) {

    let [state, setState] = useState([])

    useEffect(() => {
        fetch(`http://localhost:1337/activisms`)
        .then(res => res.json())
        .then(resp => {
            for(let res of resp){
                setState(res)
            }
        })
    }, [])

    return (
        <div>
            <Navigation />
            <Main state={state} />
            <Footer />
        </div>
    )
}
