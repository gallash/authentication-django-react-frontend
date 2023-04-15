import React from "react";
// import './App.css';
import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
    const [data, setData] = useState({ item: "" });

    useEffect(()=>{
        const apiUrl = "http://127.0.0.1:8000/connection-test-function-based";

        fetch(apiUrl)
            .then((response)=>response.json())
            .then(data=>setData(data))
            .catch((error)=>{console.log(error);});

    }, []);


    /* Perhaps the current problem is due to the fact that I am trying to
  fetch a Python string, instead of serialized data */
    // useEffect(()=>{
    //   console.log(data);
    // }, [ data ])

    // This confirms that the API connects
    // <h1>This is a little weird</h1>
    //     {data && <h1>{data.item.toString()}</h1>}
    /* Break the following return into three distinct buttons, one of each auth method */
    return (
        <>
            <div className='presentation-div-container'>
                <h1 className='presentation-h1'>Authentication Methods</h1>
                <p className='presentation-p'>This app was built in order to test three ways one could log in into the system.</p>
                <br/>
            </div>

            <div className='auth-button-div-container'>
                <button className='auth-button'>
          Django&apos;s built-in
                </button>
                <button className='auth-button'>
          Token based
                </button>
                <button className='auth-button'>
          OAuth 2.0
                </button>
            </div>
        </>
    );
}