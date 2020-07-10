import React from 'react';
import { connect } from 'react-redux';

const TransactionSearchHistory = (props) => {

  return (
    <div>
      <div className="row">
        <div className="col-md">
          <h5>Transaction Search History</h5>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-md">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Block Number</th>
                <th scope="col">Address</th>
                <th scope="col">Datetime</th>
              </tr>
            </thead>
            <tbody>
                {
                  props.transactionSearchHistories.map((item, index) => {
                    return[
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.blockNumber}</td>
                      <td>{item.address}</td>
                      <td>{item.timestamp}</td>
                    </tr>]
                  })
                }
            </tbody>
          </table>
        </div>
      </div>
    </div>)

}

const mapStateToProps = state => {
  return {
    transactionSearchHistories: state.TransactionSearchHistoryReducer.transactionSearchHistories
  }
}

export default connect(mapStateToProps, null)(TransactionSearchHistory);
