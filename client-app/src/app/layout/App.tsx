import React from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import { observer } from 'mobx-react-lite';
import { Route, useLocation } from 'react-router';
import HomePage from '../../features/home/HomePage';
import ActivitiyDashboard from '../../features/activities/dashboard/ActivitiyDashboard';
import ActivityForm from '../../features/activities/form/ActivityForm';
import ActivityDetails from '../../features/activities/details/ActivityDetails';

function App() {
  const location = useLocation();

  return (
    <>
      <Route exact path='/' component={HomePage} />
      <Route path={'/(.+)'} render={() => (
        <>
          <NavBar />
          <Container style={{ marginTop: '7em' }}>
            <Route exact path='/activities' component={ActivitiyDashboard} />
            <Route path='/activities/:id' component={ActivityDetails} />
            <Route key={location.key} path={['/createActivity', '/manage/:id']} component={ActivityForm} />
          </Container>
        </>
      )} />
    </>
  );
}

export default observer(App);
