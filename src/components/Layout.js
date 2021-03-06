import React, { Fragment } from "react";
import { Row, Col } from "react-bootstrap";

import Header from "./Header";
import Hamburger from "./Hamburger";
import PaymentStats from "./PaymentStats";
import PaymentTable from "./PaymentTable";
import PaymentGraph from "./PaymentGraph";

export default function Layout() {
  return (
    <Fragment>
      <section className="min-vh-100 d-flex flex-column">
        <Header />
        <Row className="flex-grow-1 ">
          <Col className="hamburger desktopOnly" id="hamburger">
            <Hamburger />
          </Col>
          <Col className="p-4 content">
            <Col className="p-0">
              <PaymentStats />
            </Col>
            <Col className="p-0 my-4">
              <PaymentGraph />
            </Col>
            <Col className="p-0">
              <PaymentTable />
            </Col>
          </Col>
        </Row>
      </section>
    </Fragment>
  );
}
