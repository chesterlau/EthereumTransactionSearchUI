import React, { useState } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import TransactionResult from '../TransactionResult/TransactionResult';
import { addHistory } from '../../redux/Actions/TransactionSearchHistory';

const TransactionSearch = props => {

  const [blockNumber, changeBlockNumber] = useState();
  const [address, changeAddress] = useState("");
  const [showLoader, changeShowLoader] = useState(false);

  const handleBlockNumberTextChange = (event) => {
    changeBlockNumber(event.target.value);
  }

  const handleAddressTextChange = (event) => {
    changeAddress(event.target.value); 
  }

  const handleSubmit = event => {
    event.preventDefault();

    changeShowLoader(true);

    const xtraceId = uuidv4();

    const headers = {
      "X-trace-ID": xtraceId
    };

    let payload = {
      "blockNumber": parseInt(blockNumber),
      "address": address
    }

    axios.post(`http://localhost:5000/api/search/Transactions`, payload, { headers: headers })
      .then(res => {
        console.log(res.data.transactions);
        // res.data.transactions.map((item, index) => {
        //   props.onAddTransaction(item);  
        // })

        props.onAddHistory({...payload, timestamp: Date.now()});
        changeShowLoader(false);
      })
      .catch(ex => {
        console.log(ex);
        changeShowLoader(false);
      });
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
              <input type="text" className="form-control" id="blockNumberInput" placeholder="Enter block number" onChange={handleBlockNumberTextChange} />
            </div>
            <div className="form-group">
              <label htmlFor="addressInput">Address</label>
              <input type="text" className="form-control" id="addressInput" placeholder="Enter address" onChange={handleAddressTextChange} />
            </div>
            <button type="submit" className="btn btn-primary">Search</button>
          </form>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-md">
          <TransactionResult />
        </div>
      </div>

    </div>
  );
}

const mapStateToProps = state => {
  return {
    transactionSearchHistories: state.TransactionSearchHistoryReducer.transactionSearchHistories
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddHistory: (value) => dispatch(addHistory(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionSearch);
