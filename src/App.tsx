import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AppHeader } from './components';
const Jobs = lazy(() => import('./pages/Jobs/Jobs'));
const JobDetails = lazy(() => import('./pages/JobDetails/JobDetails'));


const App: React.FC = () => {
  return (
    <>
      <Router>
        <AppHeader />
        <Switch>
          <Suspense fallback={<div>Loading...</div>}>
            <Route  exact path="/" component={Jobs} />
            <Route  path="/job-details/:id" component={JobDetails} />
          </Suspense>
        </Switch>
      </Router>
    </>
  );
};

export default App;
