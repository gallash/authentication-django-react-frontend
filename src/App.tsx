import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState({ item: String});

  useEffect(()=>{
    const apiUrl = "http://127.0.0.1:8000/connection-test";

    fetch(apiUrl)
      .then((response)=>{response.json()})
      .then((data)=>setData(data))
      .catch((error)=>{console.log(error)});

  }, []);
  
  return (
    <div>
      {data && <h1>{data.item.toString()}</h1>}
    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
