import React from 'react';
import { Button } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';

import { Terminal } from './home/Terminal';
import { projectName, projectName_Accessible, routes } from '../../config';

import './Home.css';

function Home() {
  return (
    <div>
      <Terminal />
      <main className="Home__main">
        <h2>
          Welcome! You are in{' '}
          <span aria-label={projectName_Accessible}>{projectName}</span>{' '}
          project!
        </h2>
        <p>
          Now you can click the link below that named as 'View places' to get
          list of places
        </p>
        <Button
          tag={Link}
          to={routes.places}
          color="primary"
          outline
          aria-label="View places"
          className="Home__button-fluid"
        >
          View places
        </Button>
      </main>
    </div>
  );
}

export default withRouter(Home);
