import React from "react";
import "../styles.css";
import { useState, useEffect } from "react";

export default function Home() {
    const [data, setData] = useState({ item: "" });

    useEffect(()=>{
        const apiUrl = "http://127.0.0.1:8000/connection-test-function-based";

        fetch(apiUrl)
            .then((response)=>response.json())
            .then(data=>setData(data))
            .catch((error)=>{console.log(error);});

    }, []);


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