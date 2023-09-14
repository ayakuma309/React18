import React, { Suspense, useState } from 'react'
import { Sidebar } from './Sidebar';
import { AlbumList } from './AlbumList';
import { TodoList } from './TodoList';
import { ErrorBoundary } from 'react-error-boundary';

type Tabs = 'todo' | 'album';

const ReactQuery = () => {
  const [selectedTab, setSelectedTab] = useState<Tabs>('todo');


  const onClickTabButton = (tab: Tabs) => {
    setSelectedTab(tab);
  }

  return (
    <div style={{ display: 'flex', padding: '16px' }}>
      <Sidebar />
      <div style={{ flexGrow: 1 }}>
        <ErrorBoundary fallback={<h1>Todo or AlbumListエラーだよ〜</h1>}>
          <Suspense fallback={<p>Todo or AlbumListローディング中だよ〜</p>}>
            <button  onClick={() => onClickTabButton('todo')}>Todo</button>
            <button  onClick={() => onClickTabButton('album')}>Album</button>
            {selectedTab === 'todo' ? <TodoList /> : <AlbumList />}
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  )
}

export default ReactQuery
