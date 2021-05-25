import React, { useEffect } from "react";
// import axios from 'axios'
import API from './utils/API'
import Nav from './components/Nav'

function App() {
  useEffect( () => {
    API.getBands().then(res => {console.log(res.data)})
  }, [])
  return (
    <div className="App">
      <Nav />
      <h1>hello</h1>
    </div>
  );
}

export default App;
