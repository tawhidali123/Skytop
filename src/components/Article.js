import React,{useState, useEffect} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
  } from "react-router-dom";

export default function Article(props) {

    let [state, setState] = useState([])
    let { slug } = useParams();

    useEffect(() => {
        fetch(`http://localhost:1337/categories/${slug}`)
        .then(res => res.json())
        .then(resp => {
            console.log(resp)
            setState(resp.articles[0])
            console.log(state)   
        })
    }, [])


    

    return (
        <div>
            <h1>
                {state.title}
            </h1>
            <p>
                {state.body}
            </p>
        </div>
    )
}
