import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { Truncate } from '../../utilities/Utility';

const TransactionResult = ({ transactionResults }) => {

  function renderTooltip(props) {
    return (
      <Tooltip>
        {props}
      </Tooltip>
    );
  }

  return (
    <div>
      <div className="row">
        <div className="col-md">
          <h5>Transaction Results</h5>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-md">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Block Hash</th>
                <th scope="col">Block Number</th>
                <th scope="col">Gas (Ether)</th>
                <th scope="col">Hash</th>
                <th scope="col">From</th>
                <th scope="col">To</th>
                <th scope="col">Value (Ether)</th>
              </tr>
            </thead>
            <tbody>
              {
                transactionResults.map((item, index) => {
                  return [
                    <tr key={index}>
                      <td>
                        <OverlayTrigger
                          placement="bottom"
                          delay={{ show: 250, hide: 400 }}
                          overlay={(renderTooltip(item.blockHash))}>
                          <span>{Truncate(item.blockHash, 20)}</span>
                        </OverlayTrigger>
                      </td>
                      <td>{item.blockNumber}</td>
                      <td>{item.gas}</td>
                      <td><OverlayTrigger
                        placement="bottom"
                        delay={{ show: 250, hide: 400 }}
                        overlay={(renderTooltip(item.hash))}>
                        <span>{Truncate(item.hash, 20)}</span>
                      </OverlayTrigger></td>
                      <td>{item.from}</td>
                      <td>{item.to}</td>
                      <td>{item.value}</td>
                    </tr>
                  ]
                })
              }

            </tbody>
          </table>
        </div>
      </div>
    </div>)
}

export default TransactionResult;
