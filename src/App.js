import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  useLocation
} from "react-router-dom";

import Main from "./pages/Main";
import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home";
import { About } from "./pages/About/About.js";
import Navi from "./components/Navi";

function App() {
  return (
    <BrowserRouter>
      <Navi />
      <div className="container pt-4">
        <Switch>
          <Route path={"/"} exact component={Home} />
          <Route path={"/news"} exact component={Main} />
          <Route path={"/about"} component={About} />
          <Route path={"/news/:number"} component={Main} />
          <Route path={"*"} component={NoMatch} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
