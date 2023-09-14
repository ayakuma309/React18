import React from 'react';
import './App.css';
import { AutoBatchOther } from './components/AutoBatchOther';
import { AutoBatchEventHandler } from './components/AutoBatchEventHandler';
import Transition from './components/Transition';

function App() {
  return (
    <div className="App">
      <AutoBatchEventHandler />
      <AutoBatchOther />
      <hr />
      <Transition />
    </div>
  );
}

export default App;
