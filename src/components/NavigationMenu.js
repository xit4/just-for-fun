import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import { projectRepository, projectName, routes } from '../config';
import './NavigationMenu.css';

export function NavigationMenu() {
  return (
    <Container>
      <Navbar dark>
        <NavbarBrand tag={Link} to={routes.home} aria-label="Home page">
          {projectName}
        </NavbarBrand>
        <Nav className="NavigationMenu__container">
          <NavItem>
            <NavLink tag={Link} to={routes.contributors}>
              Contributors
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href={projectRepository}>GitHub</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </Container>
  );
}
