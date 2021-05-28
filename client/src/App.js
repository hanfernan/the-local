import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Logout from "./pages/Logout";
import BandUser from "./pages/BandUser";
import Search from "./pages/SearchResults";
import BandPage from "./pages/BandPage"
import EventPage from "./pages/EventPage"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import API from "./utils/API"

function App() {
  const [loggedIn, setLoggedIn] = useState(true)
  
  useEffect(() => {
    API.getLoggedIn()
      .then(res => {
        console.log("loggedin", res.data)
        setLoggedIn(res.data.logged_in)
      })
      .catch((err) => 
        console.log(err)
      )
  }, [loggedIn])

  return (
    // if (!logged_in) {
    //   return < Redirect to= "/login"/> 
    // }
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Signup" exact component={Signup} />
          <Route path="/Login" exact component={Login} />
          <Route path="/search" exact component={Search} />
          <Route path="/band" exact component={BandUser} />
          <Route path="/logout" exact component={Logout} />
          <Route path="/bandpage/:id" exact component={BandPage} />
          <Route path="/eventpage/:id" exact component={EventPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
