import { TaskProps } from '../App';

import styles from './TasksCount.module.css';

interface TasksCountProps {
  tasks: TaskProps[];
}

export function TasksCount({ tasks }: TasksCountProps) {
  const tasksCounter = tasks.length;

  const checkedTasksCounter = tasks.reduce((acc, current) =>
    current.isChecked ? acc + 1 : acc,
    0
  )

  return (
    <section className={styles.container}>
      <div>
        <strong className={styles.title}>Tarefas criadas</strong>
        <span className={styles.counter}>{tasksCounter}</span>
      </div>

      <div>
        <strong className={styles.title}>Concluídas</strong>
        <span className={styles.counter}>{checkedTasksCounter} de {tasksCounter}</span>
      </div>
    </section>
  );
}
