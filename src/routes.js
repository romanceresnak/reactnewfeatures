import React from "react";
import Layout from "./hoc/layout";
import { Switch, Route } from "react-router-dom";
import Todo from "./containers/todo";
const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/record" component={Todo} />
      </Switch>
    </Layout>
  );
};

export default Routes;
