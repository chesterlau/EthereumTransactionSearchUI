import React, { useState } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import moment from 'moment';
import { useForm } from "react-hook-form";
import TransactionResult from '../TransactionResult/TransactionResult';
import { addHistory } from '../../redux/Actions/TransactionSearchHistory';

const TransactionSearch = props => {

  const { register, handleSubmit, watch, errors } = useForm();

  const [blockNumber, changeBlockNumber] = useState("");
  const [address, changeAddress] = useState("");
  const [transactionResults, setTransactionResults] = useState([]);
  const [showLoader, changeShowLoader] = useState(false);

  const handleBlockNumberTextChange = (event) => {
    changeBlockNumber(event.target.value);
  }

  const handleAddressTextChange = (event) => {
    changeAddress(event.target.value);
  }

  const onSubmit = event => {
    
    changeShowLoader(true);

    const xtraceId = uuidv4();

    const headers = {
      "X-trace-ID": xtraceId
    };

    const payload = {
      "blockNumber": parseInt(blockNumber),
      "address": address
    }

    axios.post(`http://localhost:5000/api/search/Transactions`, payload, { headers: headers })
      .then(res => {
        console.log(res.data.transactions);
        setTransactionResults(res.data.transactions);
        // res.data.transactions.map((item, index) => {
        //   props.onAddTransaction(item);  
        // })

        props.onAddHistory({ ...payload, timestamp: moment().format("YYYY-MM-DD HH:mm:ss") });
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="blockNumberInput">Block number</label>
              <input type="text" className="form-control" id="blockNumberInput" name="blockNumber" placeholder="Enter block number" onChange={handleBlockNumberTextChange} ref={register({ required: true })} />
              {errors.blockNumber && <span style={{ color: "red" }}>This field is required</span>}
            </div>
            <div className="form-group">
              <label htmlFor="addressInput">Address</label>
              <input type="text" className="form-control" id="addressInput" name="address" placeholder="Enter address" onChange={handleAddressTextChange} ref={register({ required: true })} />
              {errors.address && <span style={{ color: "red" }}>This field is required</span>}
            </div>
            <button type="submit" className="btn btn-primary">Search</button>
          </form>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-md">
          <TransactionResult transactionResults={transactionResults} />
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
