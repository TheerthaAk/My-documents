import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function navBar() {
  return (
    <div>
      <nav>
        <div className="header-container">
          <a href="#" className="logo">
            Logo
          </a>

          <ul>
            <li>
              <a href="">Link 1</a>
            </li>

            <li>
              <a href="">Link 2</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="breadcrum">
        <Row className="breadcrum-wrapper">
          <Col
            xs={12}
            sm={12}
            md={8}
            lg={8}
            xl={8}
            xxl={8}
            className="text-start"
          >
            <p>
              <a href="">/ Tax /</a>

              <a href=""> Property Tax / </a>

              <a href="">New Tax Assesment other than Br / </a>

              <span>Form-2</span>
            </p>
          </Col>

          <Col
            xs={12}
            sm={12}
            md={4}
            lg={4}
            xl={4}
            xxl={4}
            className="text-end"
          >
            <p>
              <span className="created-date">Created on: 15-02-2023</span>

              <a href="">Cancel / </a>

              <a href="">Delete</a>
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default navBar;
