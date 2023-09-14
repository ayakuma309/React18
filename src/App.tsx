import React, { Suspense } from 'react';
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
      {/* loading中だった場合の設定 */}
      <Suspense fallback={<p>ローディング中です...</p>}>
        <ReactQuery />
      </Suspense>
    </div>
  );
}

export default App;
