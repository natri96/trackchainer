/*####################
# JABIL CO.
# TRACKCHAINER
# AUTHOR:MELVYN TIE
###################*/

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from '../components/App';
import CreatePage from '../components/CreatePage';
import EditPage from '../components/EditPage';
import RemovePage from '../components/RemovePage';
import SearchPage from '../components/SearchPage';
import TablePage from '../components/TablePage';

import NotFoundPage from '../../shared/NotFoundPage';

export default function router() {
  return (
    <Router basename='/'>
      <App>
        <Switch>
          <Route exact path='/laptop' component={TablePage} />
          <Route path='/laptop/create' component={CreatePage} />
          <Route path='/laptop/edit' component={EditPage} />
          <Route path='/laptop/remove' component={RemovePage} />
          <Route path='/laptop/search' component={SearchPage} />
          <Route path='/laptop/table' component={TablePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </App>
    </Router>
  );
}
