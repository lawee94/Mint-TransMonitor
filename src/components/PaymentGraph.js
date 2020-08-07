import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";

export default function PaymentStats() {
  return (
    <Fragment>
      <Row className="paymentGraph">
        <Col lg={8}>
          <section></section>
        </Col>

        <Col lg={4}>
          <section></section>
        </Col>
      </Row>
    </Fragment>
  );
}
