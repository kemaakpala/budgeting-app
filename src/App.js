import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './Containers/Layout/Layout';
import BudgetPage from './Containers/BudgetPage/BudgetPage';

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/:month" component={BudgetPage} />
        <Redirect to="/jan" />
      </Switch>
    </Layout>
  );
}

export default App;
