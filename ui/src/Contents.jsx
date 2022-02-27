import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import About from './About.jsx'
import IssueList from './IssueList.jsx';
import IssueReport from './IssueReport.jsx';
import IssueEdit from './IssueEdit.jsx';
import routes from './routes.js';

export default function Contents() {
  return (
    <Switch>
      <Redirect exact from="/" to="/issues" />
      {routes.map(attrs=> <Route{...attrs} key={attrs.path} />)}
    </Switch>
  );
}
