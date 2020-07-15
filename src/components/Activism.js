import React, {useState, useEffect} from 'react'
import Navigation from './Navigation'
import Footer from './Footer'
import Main from './activismComponents/Main'

export default function Activism(props) {

    return (
        <div>
            <Navigation />
            <Main />
            <Footer />
        </div>
    )
}
