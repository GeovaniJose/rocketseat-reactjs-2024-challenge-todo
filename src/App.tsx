import { Header } from './components/Header';
import { NewTask } from './components/NewTask';

import styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <main className={styles.wrapper}>
        <NewTask />

        <h1>Todo List</h1>
      </main>
    </div>
  );
}
