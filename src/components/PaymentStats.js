import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";

export default function PaymentStats() {
  return (
    <Fragment>
      <Row className="paymentStat">
        <Col md={3}>
          <section>
            <div className="d-inline-block float-left">
              <span>Daily Transcation Volume</span>
              <p>2,342</p>
            </div>
            <img src="./images/graph.png" alt="" />
          </section>
        </Col>
        <Col md={3}>
          <section>
            <div className="d-inline-block float-left">
              <span>Daily Transcation Value</span>
              <p>#4,000,000</p>
            </div>
            <img src="./images/graph.png" alt="" />
          </section>
        </Col>
        <Col md={3}>
          <section>
            <div className="d-inline-block float-left">
              <span>Total Transcation Volume</span>
              <p>452,000</p>
            </div>
            <img src="./images/graph.png" alt="" />
          </section>
        </Col>
        <Col md={3}>
          <section>
            <div className="d-inline-block float-left">
              <span>Total Transcation Value</span>
              <p>#4,00,000</p>
            </div>
            <img src="./images/graph.png" alt="" />
          </section>
        </Col>
      </Row>
    </Fragment>
  );
}
