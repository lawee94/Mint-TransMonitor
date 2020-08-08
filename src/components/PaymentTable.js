import React, { Fragment, useState, useEffect } from "react";
import { data } from "./helper";
import Pagination from "./Pagination";

export default function PaymentTable() {
  const perPage = 10;
  const [itemToDisplay, setitemToDisplay] = useState([]);
  const [offset, setOffset] = useState(0);
  const [total, setTotal] = useState(null);
  const [pageCount, setpageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchResult, setSearchResult] = useState([]);

  // Select a particular status to display
  const handleStatusChange = (e) => {
    let val = e.target.value;
    let newArray =
      val === "All" ? data : data.filter((res) => res.status === val);
    loadPayment(newArray, 0);
    setCurrentPage(0);
    setOffset(0);
  };

  // Get the list of payment to display
  const loadPayment = (datas, off) => {
    let sliceData = datas.slice(off, off + perPage);
    setpageCount(Math.ceil(datas.length / perPage));
    setitemToDisplay(sliceData);
    setTotal(datas);
  };

  // Handle Page Click
  const handlePageClick = (e) => {
    let offsets = e.selected * perPage;
    setCurrentPage(e.selected);
    setOffset(offsets);
  };

  // Load Payment on default
  useEffect(() => {
    let datas = total === null ? data : total;
    loadPayment(datas, offset);
  }, [offset, total]);

  //Search Result
  const handleSearchResult = (e) => {
    const val = e.target.value;
    const result = data.filter((res) => res.name.includes(val)).slice(0, 10);
    const res = val === "" ? [] : result;
    setSearchResult(res);
  };

  return (
    <Fragment>
      <section className="mt-4">
        <h1>Payments</h1>
        <div className="paymentHeader">
          {total !== null && (
            <span className="desktopOnly">
              Showing {offset + 1} to{" "}
              {total.length > offset + perPage
                ? offset + perPage
                : total.length}{" "}
              of {total.length} payments
            </span>
          )}
          <form className="form-inline my-2 marl-5 my-lg-0 bb">
            <button className="btn desktopOnly" type="submit">
              <img src="./images/search.png" alt="" />
            </button>
            <div className="form-group">
              <input
                type="search"
                className="form-control-plaintext"
                placeholder="Search"
                onChange={(event) => handleSearchResult(event)}
              />
            </div>
            {searchResult.length > 0 && (
              <div className="searchResult">
                <ul>
                  {searchResult.map((res, ind) => (
                    <li key={ind}>{res.name}</li>
                  ))}
                </ul>
              </div>
            )}
          </form>
          <form className="form-group">
            <span className="desktopOnly">
              <strong>Show</strong>
            </span>
            <select onChange={handleStatusChange}>
              <option>All</option>
              <option>Reconcilled</option>
              <option>Un-reconcilled</option>
              <option>Settled</option>
              <option>Unsettled</option>
            </select>
          </form>
        </div>
        <div className="table-responsive">
          <table className="table bg-white mt-4">
            <thead className="thead-light">
              <tr>
                <th>Iten Type</th>
                <th></th>
                <th>Price</th>
                <th>transaction No.</th>
                <th>Time</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {itemToDisplay.map((res, index) => (
                <tr key={index}>
                  <td>
                    <img src="./images/vw.png" alt="" className="mx-3" />
                  </td>
                  <td>{res.name}</td>
                  <td>{res.price}</td>
                  <td>{res.transactNo}</td>
                  <td>{res.time}</td>
                  <td>
                    <div className="paginate">
                      <div className="status">
                        <div className={res.status}></div>
                        <span>{res.status} </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <img src="./images/arrow.png" alt="" className="mr-3" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* The pagination */}

      <section className="paginate mb-5">
        {total !== null && (
          <span>
            Showing {offset + 1} to{" "}
            {total.length > offset + perPage ? offset + perPage : total.length}{" "}
            of {total.length} entries
          </span>
        )}
        <Pagination
          item={itemToDisplay}
          perPage={perPage}
          click={handlePageClick}
          pageCount={pageCount}
          currentPage={currentPage}
        />
      </section>
    </Fragment>
  );
}
