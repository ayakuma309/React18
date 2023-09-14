import React from 'react';
import './App.css';
import { AutoBatchOther } from './components/AutoBatchOther';
import { AutoBatchEventHandler } from './components/AutoBatchEventHandler';
import Transition from './components/Transition';
import ReactQuery from './components/ReactQuery';

function App() {
  return (
    <div className="App">
      <AutoBatchEventHandler />
      <AutoBatchOther />
      <hr />
      <Transition />
      <hr />
      <ReactQuery />
    </div>
  );
}

export default App;
