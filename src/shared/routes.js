import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Home from '../containers/sample1/Sample1';

const getRoutes = status => {
  let routes;
  if (status) {
    routes = <Switch>
      <Route path="/home" component={Home} />
      <Redirect to="/home" />
    </Switch>
  } else {
    routes = <Switch>
      <Route path="/home" component={Home} />
      <Redirect to="/home" />
    </Switch>
  }
  return routes;
}

export default getRoutes;