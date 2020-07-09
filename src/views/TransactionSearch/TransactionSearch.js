import React, { useState } from 'react';

const TransactionSearch = () => {

  const [showLoader, changeShowLoader] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    console.log("Search submitted");
  }

  return (
    <div>
      <div className="row">
        <div className="col-md">
          <h4>Ethereum Transaction Search</h4>
          <hr />
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-md">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="blockNumberInput">Block number</label>
              <input type="text" className="form-control" id="blockNumberInput" placeholder="Enter block number" />
            </div>
            <div className="form-group">
              <label htmlFor="addressInput">Address</label>
              <input type="text" className="form-control" id="addressInput" placeholder="Enter address" />
            </div>
            <button type="submit" className="btn btn-primary">Search</button>
          </form>
        </div>
      </div>
    </div>
  );

}

export default TransactionSearch;
