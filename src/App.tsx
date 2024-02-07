import { useState } from 'react';

import { Empty } from './components/Empty';
import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { Task } from './components/Task';
import { TasksCount } from './components/TasksCount';

import styles from './App.module.css';

import './global.css';

export interface TaskProps {
  id: number
  title: string
  isChecked: boolean
}

export function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([])
  console.log('🚀  tasks', tasks);

  function onAddNewTask(task: TaskProps) {
    setTasks(state => [...state, task])
  }

  return (
    <div>
      <Header />

      <main className={styles.wrapper}>
        <NewTask onAddNewTask={onAddNewTask} />

        <TasksCount tasks={tasks} />

        {tasks.length
          ? <Task />
          : <Empty />
        }
      </main>
    </div>
  );
}
