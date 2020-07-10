import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { Truncate, NoExponential } from '../../utilities/Utility';

const TransactionResult = ({ transactionResults }) => {

  const renderTooltip = props => {
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
                      <td><a href={`https://etherscan.io/txs?block=${item.blockNumber}`} target="_blank">{item.blockNumber}</a></td>
                      <td>{NoExponential(item.gas)}</td>
                      <td><OverlayTrigger
                        placement="bottom"
                        delay={{ show: 250, hide: 400 }}
                        overlay={(renderTooltip(item.hash))}>
                        <a href={`https://etherscan.io/tx/${item.hash}`} target="_blank">{Truncate(item.hash, 20)}</a>
                      </OverlayTrigger></td>
                      <td><OverlayTrigger
                        placement="bottom"
                        delay={{ show: 250, hide: 400 }}
                        overlay={(renderTooltip(item.from))}>
                        <a href={`https://etherscan.io/address/${item.from}`} target="_blank">{Truncate(item.from, 20)}</a>
                      </OverlayTrigger></td>
                      <td><OverlayTrigger
                        placement="bottom"
                        delay={{ show: 250, hide: 400 }}
                        overlay={(renderTooltip(item.to))}>
                        <a href={`https://etherscan.io/address/${item.to}`} target="_blank">{Truncate(item.to, 20)}</a>
                      </OverlayTrigger></td>
                      <td>{NoExponential(item.value)}</td>
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
