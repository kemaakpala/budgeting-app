import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './Containers/Layout';
import BudgetPage from './Containers/BudgetPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route exact path="/:month" component={BudgetPage}/>
          <Redirect to="/jan" />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
