import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Logout from "./pages/Logout";
import BandUser from "./pages/BandUser";
import Search from "./pages/SearchResults";
import BandPage from "./pages/BandPage"
import EventPage from "./pages/EventPage"

function App() {
  // useEffect(() => {
  //   API.getBands().then(res => { console.log(res.data) })
  // }, [])
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
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
