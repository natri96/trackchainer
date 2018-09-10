/*####################
# JABIL CO.
# TRACKCHAINER
# AUTHOR:MELVYN TIE
###################*/

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NotFoundPage from '../../shared/NotFoundPage';

import HomePage from '../pages/HomePage';
import CreatePage from '../pages/CreatePage';
import EditPage from '../pages/EditPage';
import RemovePage from '../pages/RemovePage';
import SearchPage from '../pages/SearchPage';
import ShowPage from '../pages/ShowPage';


export default function router() {
  return (
    <Router>
        <Switch>
          <Route path='/' component={HomePage} />
          <Route path='/create' component={CreatePage} />
          <Route path='/edit' component={EditPage} />
          <Route path='/remove' component={RemovePage} />
          <Route path='/search' component={SearchPage} />
          <Route path='/show' component={ShowPage} />
          <Route component={NotFoundPage} />
        </Switch>
    </Router>
  );
}
