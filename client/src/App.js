import React, { useEffect } from "react";
import axios from 'axios'

function App() {
  useEffect( () => {
    axios.get('/api/test').then(res => {console.log(res)})
  }, [])
  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  );
}

export default App;
