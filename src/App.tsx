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
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  function onAddNewTask(taskToAdd: TaskProps) {
    setTasks(state => [...state, taskToAdd]);
  }

  function onRemoveTask(taskToRemove: TaskProps) {
    setTasks(state => state.filter(task => task.id !== taskToRemove.id));
  }

  function onToggleCheck(taskToToggle: TaskProps) {
    setTasks(state => state.map(task =>
      task.id === taskToToggle.id ? { ...task, isChecked: !taskToToggle.isChecked } : task
    ));
  }

  return (
    <div>
      <Header />

      <main className={styles.wrapper}>
        <NewTask onAddNewTask={onAddNewTask} />

        <TasksCount tasks={tasks} />

        {tasks.length
          ? tasks.map(task =>
              <Task
                key={task.id}
                task={task}
                onRemoveTask={onRemoveTask}
                onToggleCheck={onToggleCheck}
              />
            )
          : <Empty />
        }
      </main>
    </div>
  );
}
