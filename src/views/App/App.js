import React from 'react';
import TransactionSearch from '../TransactionSearch/TransactionSearch';
import './App.css';

const App = () => {
  return (
    <div className="container" style={{ maxWidth: "80%", marginTop: "2%" }}>
      <TransactionSearch />
    </div>
  );
}

export default App;
