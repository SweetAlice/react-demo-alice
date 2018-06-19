import React from 'react';
import { Router, Route, Switch, IndexRoute } from 'react-router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';
import LoginPage from './routes/Login';
//import Main from './routes/Main';
//import TablePage from './routes/TablePage';
//import AcePage from './routes/ReactAce';
//import ChartsPage from './routes/Charts';
//import InputPage from './routes/Input';
//import ModalPage from './routes/Modal';
//import MessagePage from './routes/Message';
//import Maps from './routes/Maps';
//import TextEdtor from './routes/TextEdtor';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/products" exact component={Products} />
//      <Route path="/login" exact component={LoginPage} />
//      <Route path="/main" exact component={Main} />
//      <Route path="/tables" exact component={TablePage} />
//      <Route path="/ace" exact component={AcePage} />
//      <Route path="/charts" exact component={ChartsPage} />
//      <Route path="/inputs" exact component={InputPage} />
//      <Route path="/coms/modal" exact component={ModalPage} />
//      <Route path="/coms/message" exact component={MessagePage} />
//      <Route path="/coms/maps" exact component={Maps} />
//      <Route path="/coms/textEdtor" exact component={TextEdtor} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;