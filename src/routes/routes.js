import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/home';
import Products from '../components/products';
import Contacts from '../components/contacts';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/products" component={Products} />
    <Route path="/contacts" component={Contacts} />
  </Switch>
);

export default Routes;