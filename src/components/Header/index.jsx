import React from "react";
import {Container,Row,Col} from "reactstrap";
import PropTypes from "prop-types";
import "./Header.scss";
import { NavLink } from "react-router-dom";
Header.propTypes = {};

function Header(props) {
  return (
    <header className="Header">
      <Container>
        <Row className="justify-content-between">
          <Col xs="auto">
            <a
              className="header__link header__title"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ease Frontend
            </a>
          </Col>
          <Col xs="auto">
            <NavLink
              exact
              className="header__link"
              to="/photos"
              activeClassName="header__link--active"
            >
              Redux Project
            </NavLink>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
