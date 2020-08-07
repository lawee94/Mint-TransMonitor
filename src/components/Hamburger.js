import React, { Fragment } from "react";

export default function Hamburger() {
  return (
    <Fragment>
      <div className="inv">Generate Invoice</div>

      <div className="menu">
        <section id="main">
          <p>Main</p>
          <li className="act">
            <img src="./images/overview.png" />
            <span>Overview</span>
          </li>
        </section>

        <section id="payments">
          <p>Payments</p>
          <li>
            <img src="./images/wallet.png" />
            <span>All Payments</span>
          </li>
          <li>
            <img src="./images/wallet-c.png" />
            <span>Reconcilled Payments</span>
          </li>
          <li>
            <img src="./images/wallet-x.png" />
            <span>Un-Reconcilled Payments</span>
          </li>
          <li>
            <img src="./images/manual.png" />
            <span>Manual Settlement</span>
          </li>
        </section>

        <section id="orders">
          <p>Payments</p>
          <li>
            <img src="./images/order.png" />
            <span>All Orders</span>
          </li>
          <li>
            <img src="./images/order-p.png" />
            <span>Pending Orders</span>
          </li>
          <li>
            <img src="./images/order-c.png" />
            <span>Reconcilled Orders</span>
          </li>
          <li>
            <img src="./images/user.png" />
            <span>Merchant Profile</span>
          </li>
        </section>
      </div>
    </Fragment>
  );
}
