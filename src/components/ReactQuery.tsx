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
      <ErrorBoundary fallback={<h1>Todo or AlbumListエラーだよ〜</h1>}>
        <Suspense fallback={<p>Todo or AlbumListローディング中だよ〜</p>}>
          <AlbumList />
          <TodoList />
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}

export default ReactQuery
