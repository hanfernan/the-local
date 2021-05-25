import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from 'axios'
import API from './utils/API'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Logout from './pages/Logout'
import BandUser from './pages/BandUser'
import Search from './pages/SearchResults'

function App() {
  useEffect(() => {
    API.getBands().then(res => { console.log(res.data) })
  }, [])
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search" exact component={Search} />
          <Route path="/band" exact component={BandUser} />
          <Route path="/logout" exact component={Logout} />
        </Switch>
      </Router>
      {/* <h1>hello</h1> */}
    </div>
  );
}

export default App;
