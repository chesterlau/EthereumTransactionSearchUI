import React from 'react';
import TransactionSearch from '../TransactionSearch/TransactionSearch';
import './App.css';

const App = () => {
  return (
    <div className="container" style={{ maxWidth: "80%", marginTop: "2%" }}>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <TransactionSearch />
    </div>
  );
}

export default App;
