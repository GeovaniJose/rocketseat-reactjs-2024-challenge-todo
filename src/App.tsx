import { Empty } from './components/Empty';
import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { Task } from './components/Task';
import { TasksCount } from './components/TasksCount';

import styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <main className={styles.wrapper}>
        <NewTask />

        <TasksCount />

        <Empty />

        <Task />
      </main>
    </div>
  );
}
