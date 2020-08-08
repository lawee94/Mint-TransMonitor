import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";

export default function PaymentStats() {
  return (
    <Fragment>
      <Row className="paymentGraph">
        <Col lg={8}>
          <section>
            <div id="graph" className="carousel ">
              <div className="graphTop">
                <h5>Today: 5, Aug 2018</h5>
                <div></div>
                <div className="float-right">
                  <select className="desktopOnly">
                    <option>1 Jan - 1 Jun</option>
                    <option>1 Jul - 1 Dec</option>
                  </select>
                  <a
                    className="btn "
                    href="#graph"
                    data-slide="prev"
                    role="button"
                  >
                    <img src="./images/left.png" alt="" />
                  </a>
                  <a
                    className="btn "
                    href="#graph"
                    data-slide="next"
                    role="button"
                  >
                    <img src="./images/right.png" alt="" />
                  </a>
                </div>
              </div>

              <div className="carousel-inner">
                <div className="active carousel-item ">
                  <div className="graphTop mt-4">
                    <span>Jan</span>
                    <span>Feb</span>
                    <span>Mar</span>
                    <span>Apr</span>
                    <span>May</span>
                    <span>Jun</span>
                  </div>
                  <img src="./images/big-graph.png" alt="" className="w-100 " />
                </div>
                <div className="carousel-item">
                  <div className="graphTop mt-4">
                    <span>Jul</span>
                    <span>Aug</span>
                    <span>Sep</span>
                    <span>Oct</span>
                    <span>Nov</span>
                    <span>Dec</span>
                  </div>
                  <img
                    src="./images/big-graph2.png"
                    alt=""
                    className="w-100 "
                  />
                </div>
              </div>
            </div>
          </section>
        </Col>

        <Col lg={4}>
          <div className="orders p-4">
            <p>
              <strong>Orders</strong>
            </p>
            <li>
              <span style={{ width: "80%" }} className="range"></span>
            </li>
            <p>
              Pending Orders: <span className="text-yellow"> 20</span>
            </p>
            <p>
              Reconcilled Orders: <span className="text-green"> 80</span>
            </p>
            <p>
              Total Orders: <span className="text-blue"> 100</span>
            </p>
          </div>

          <div className="orders p-4">
            <p>
              <strong>Payments</strong>
            </p>
            <li>
              <span style={{ width: "80%" }} className="range"></span>
            </li>
            <p>
              Un-reconcilled Payment: <span className="text-yellow"> 20</span>
            </p>
            <p>
              Reconcilled Payments: <span className="text-green"> 80</span>
            </p>
            <p>
              Total Payments: <span className="text-blue"> 100</span>
            </p>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
}
