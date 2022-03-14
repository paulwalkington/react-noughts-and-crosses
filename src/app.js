import React from "react";
import "./index.css";
import { Game as NoughtsAndCrosses } from "./noughtsAndCrosses/game";
import { Game as ConnectFour } from "./connectFour/game";
import Home from "./pages/home";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App"></div>
      <div>
        <nav>
          <ol>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/nought-and-crosses">nought-and-crosses</Link>
            </li>
            <li>
              <Link to="/connect-four">connect-four</Link>
            </li>
          </ol>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/nought-and-crosses">
            <NoughtsAndCrosses />
          </Route>
          <Route path="/connect-four">
            <ConnectFour />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
