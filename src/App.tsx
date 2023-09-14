import React, { Suspense } from 'react';
import './App.css';
import { AutoBatchOther } from './components/AutoBatchOther';
import { AutoBatchEventHandler } from './components/AutoBatchEventHandler';
import Transition from './components/Transition';
import ReactQuery from './components/ReactQuery';
import { ErrorBoundary } from "react-error-boundary"

function App() {
  return (
    <div className="App">
      <AutoBatchEventHandler />
      <AutoBatchOther />
      <hr />
      <Transition />
      <hr />
       {/* error中だった場合の設定 */}
      <ErrorBoundary fallback={<h1>エラーだよ〜</h1>}>
      {/* loading中だった場合の設定 */}
      <Suspense fallback={<p>ローディング中です...</p>}>
        <ReactQuery />
      </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
