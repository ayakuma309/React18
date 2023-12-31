import React, { useState} from 'react'
import { Avatar } from './Avatar';
import { TaskList } from './TaskList';


export type Task = {
  id: number,
  title: string,
  assignee: string
}

const member = {
  a: 'A',
  b: 'B',
  c: 'C',
}

const generateDummyTasks = () => {
  return Array(10000).fill('').map((_, index)=>{
    const addedIndex = index + 1
    return{
      id: addedIndex,
      title: `タスク${addedIndex}`,
      assignee: addedIndex % 3 === 0 ? member.a : addedIndex % 2 === 0 ? member.b : member.c
    }
  })
};

const tasks = generateDummyTasks();

const filteringAssignee = (assignee: string) => {
  if (assignee === '') return tasks;
  return tasks.filter((task) => task.assignee === assignee);
}

const Transition = () => {
  //選択された担当者
  const [selectedAssignee, setSelectedAssignee] = useState<string>('');
  //一覧表示するタスク(初期値は全てのタスク、担当者が選択されたらその担当者のタスクのみ表示する)
  const [taskList, setTaskList] = useState<Task[]>(tasks);
  //trueの時だけ一覧を表示する
  const [isShowList, setIsShowList] = useState<boolean>(false);

  //担当者を選択する
  const onClickAssignee = (assignee: string) => {
    setSelectedAssignee(assignee);
    setTaskList(filteringAssignee(assignee));
    //担当者が選択されたら、その担当者のタスクのみ表示する
    setTaskList(filteringAssignee(assignee));
  }

  return (
    <div>
      <p>Transition</p>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Avatar isSelected={selectedAssignee === member.a} onClick={onClickAssignee}>{member.a}</Avatar>
        <Avatar isSelected={selectedAssignee === member.b} onClick={onClickAssignee}>{member.b}</Avatar>
        <Avatar isSelected={selectedAssignee === member.c} onClick={onClickAssignee}>{member.c}</Avatar>
      </div>
      <br />
      <br />
      <button onClick={() => setIsShowList(!isShowList)}>表示/非表示</button>
      {isShowList && <TaskList taskList={taskList} />}
      <button onClick={() => onClickAssignee('')}>リセット</button>
    </div>
  )
}

export default Transition
