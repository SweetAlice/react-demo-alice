import React from 'react';
import { Router, Route, Switch, IndexRoute } from 'react-router';
import IndexPage from './routes/IndexPage';
import pageA from './components/content/componentsA';
import pageB from './components/content/componentsB';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={pageA} />
        <Route path="/pageB" exact component={pageB} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;