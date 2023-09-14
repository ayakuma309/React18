import React, { Suspense, useState, useTransition } from 'react'
import { Sidebar } from './Sidebar';
import { AlbumList } from './AlbumList';
import { TodoList } from './TodoList';
import { ErrorBoundary } from 'react-error-boundary';

type Tabs = 'todo' | 'album';

const ReactQuery = () => {
  const [selectedTab, setSelectedTab] = useState<Tabs>('todo');
  const [isPending, startTransition] = useTransition();

  //ボタンのスタイル
  const buttonStyle = {
    padding: '12px',
    fontSize: '16px',
    border: 'none',
  }
  //albumボタンのスタイル
  const albumButtonStyle = {
    ...buttonStyle,
    backgroundColor: selectedTab === 'album' ? 'royalblue' : 'white',
    color: selectedTab === 'album' ? 'white' : 'black',
    opacity: isPending ? 0.5 : 1,
  }
  //todoのボタンスタイル
  const todoButtonStyle = {
    ...buttonStyle,
    backgroundColor: selectedTab === 'todo' ? 'royalblue' : 'white',
    color: selectedTab === 'todo' ? 'white' : 'black',
  }

  const onClickTabButton = (tab: Tabs) => {
    startTransition(() => {
      setSelectedTab(tab);
    });
  }

  return (
    <div style={{ display: 'flex', padding: '16px' }}>
      <Sidebar />
      <div style={{ flexGrow: 1 }}>
        <ErrorBoundary fallback={<h1>Todo or AlbumListエラーだよ〜</h1>}>
          <Suspense fallback={<p>Todo or AlbumListローディング中だよ〜</p>}>
            <button style={todoButtonStyle} onClick={() => onClickTabButton('todo')}>Todo</button>
            <button style={albumButtonStyle} onClick={() => onClickTabButton('album')}>Album</button>
            {selectedTab === 'todo' ? <TodoList /> : <AlbumList />}
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  )
}

export default ReactQuery
