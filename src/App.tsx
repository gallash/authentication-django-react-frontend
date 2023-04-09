import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState({ item: "" });

  useEffect(()=>{
    const apiUrl = "http://127.0.0.1:8000/connection-test-function-based";

    fetch(apiUrl)
      .then((response)=>response.json())
      .then(data=>setData(data))
      .catch((error)=>{console.log(error)});

  }, []);


  /* Perhaps the current problem is due to the fact that I am trying to
  fetch a Python string, instead of serialized data */
  // useEffect(()=>{
  //   console.log(data);
  // }, [ data ])
  
  return (
    <>
      <h1>This is a little weird</h1>
      {data && <h1>{data.item.toString()}</h1>}
    </>
  );
} 

export default App;