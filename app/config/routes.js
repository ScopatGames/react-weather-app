import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Layout from './../components/Layout';
import Home from './../components/Home';
import ForecastContainer from './../components/ForecastContainer';
import DetailContainer from './../components/DetailContainer';

export let routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Home}/>
      <Route path='forecast/:city' component={ForecastContainer}/>
      <Route path='detail/:city' component={DetailContainer} />
    </Route>
  </Router>
);
