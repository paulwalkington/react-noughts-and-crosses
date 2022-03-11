import React from "react";
import "./index.css";
import { Game } from "./game";
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
          </ol>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/nought-and-crosses">
            <Game />
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
