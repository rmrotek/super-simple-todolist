import React from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import { routerPaths } from "./helpers/routerPaths";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
// comment
// ? comment
// TODO
// !

const App = () => {
  return (
    <div className={"App"}>
      <Navigation>
        <div>
          <Switch>
            <Route exact path={routerPaths.root}>
              <Login />
            </Route>
            <Route path={routerPaths.dashboard}>
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </Navigation>
    </div>
  );
};

export default App;
