import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { createBrowserHistory } from "history";
import Home from "./pages/Home/Home";
import { AdminTemplate } from "./templates/AdminTemplate/AdminTemplate";
import Achivement from "./pages/Achivement/Achivement";
import { UserTemplate } from "./templates/UserTemplate/UserTemplate";
import Login from "./pages/Login/Login";

export const history = createBrowserHistory();

function App() {
  return (
    <>
      <Router history={history}>
        <Switch>
          <AdminTemplate path="/admin" exact Component={Achivement} />
          <UserTemplate path="/user" exact Component={Home} />
          <Route path="*" exact component={Login} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
