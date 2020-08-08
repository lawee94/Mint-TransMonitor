import React, { Fragment } from "react";

export default function Hamburger() {
  return (
    <Fragment>
      <section className="">
        <div className="inv">Generate Invoice</div>
        <div className="menu">
          <section id="main">
            <p>Main</p>
            <li className="act">
              <img src="./images/overview.png" alt="" />
              <span>Overview</span>
            </li>
          </section>

          <section id="payments">
            <p>Payments</p>
            <li>
              <img src="./images/wallet.png" alt="" />
              <span>All Payments</span>
            </li>
            <li>
              <img src="./images/wallet-c.png" alt="" />
              <span>Reconcilled Payments</span>
            </li>
            <li>
              <img src="./images/wallet-x.png" alt="" />
              <span>Un-Reconcilled Payments</span>
            </li>
            <li>
              <img src="./images/manual.png" alt="" />
              <span>Manual Settlement</span>
            </li>
          </section>

          <section id="orders">
            <p>Payments</p>
            <li>
              <img src="./images/order.png" alt="" />
              <span>All Orders</span>
            </li>
            <li>
              <img src="./images/order-p.png" alt="" />
              <span>Pending Orders</span>
            </li>
            <li>
              <img src="./images/order-c.png" alt="" />
              <span>Reconcilled Orders</span>
            </li>
            <li>
              <img src="./images/user.png" alt="" />
              <span>Merchant Profile</span>
            </li>
          </section>
        </div>
      </section>
    </Fragment>
  );
}
