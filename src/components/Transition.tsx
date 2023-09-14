import React from 'react'


type Task = {
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
      assignee: addedIndex % 3 === 0 ? member.a : addedIndex % 3 === 0 ? member.b : member.c
    }
  })
};

const tasks = generateDummyTasks();

const Transition = () => {
  return (
    <div>
      <p>Transition</p>
      {tasks.map((task) =>(
        <div key={task.id} style={{width: '300px', margin: 'auto', background: 'lavender'}}>
          <p>{task.title}</p>
          <p>{task.assignee}</p>
        </div>
      ))}
    </div>
  )
}

export default Transition
