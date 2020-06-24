import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Home from "./pages/index";
import About from "./pages/about";
import Work from "./pages/work";

import "./components/layout.css";
import "./components/waves.css";

function App() {
  return (
    <Router>
      <Helmet>
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/npm/hack-font@3/build/web/hack.css"
        />
        <title>some wavy dude</title>
      </Helmet>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/work">
          <Work />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
