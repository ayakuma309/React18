import React, { Suspense } from 'react'
import { Sidebar } from './Sidebar';
import { AlbumList } from './AlbumList';
import { TodoList } from './TodoList';
import { ErrorBoundary } from 'react-error-boundary';

const ReactQuery = () => {
  //key設定, fetcher関数設定
  return (
    <div>
      <Sidebar />
      <ErrorBoundary fallback={<h1>AlbumListエラーだよ〜</h1>}>
        <Suspense fallback={<p>AlbumListローディング中だよ〜</p>}>
          <AlbumList />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary fallback={<h1>Todoエラーだよ〜</h1>}>
        <Suspense fallback={<p>Todoローディング中だよ〜</p>}>
          <TodoList />
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}

export default ReactQuery
