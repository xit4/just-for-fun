import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';

import { routes } from '../config';

import { PageLoader } from '../components/PageLoader';
import { NavigationMenu } from '../components/NavigationMenu';
import { GradientLine } from '../components/GradientLine';
import { Footer } from '../components/Footer';

const Home = React.lazy(() => import('./main/Home'));
const Places = React.lazy(() => import('./main/Places'));
const Contributors = React.lazy(() => import('./main/Contributors'));
const NotFound = React.lazy(() => import('./main/NotFound'));

function Main() {
  return (
    <div>
      <NavigationMenu />
      <GradientLine />
      <Container>
        <Suspense fallback={<PageLoader message="Suspense work" />}>
          <Switch>
            <Route exact path={routes.home} component={Home} />
            <Route exact path={routes.places} component={Places} />
            <Route exact path={routes.contributors} component={Contributors} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
        <Footer />
      </Container>
    </div>
  );
}

export default Main;
