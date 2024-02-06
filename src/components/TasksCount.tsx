import styles from './TasksCount.module.css';

export function TasksCount() {
  return (
    <section className={styles.container}>
      <div>
        <strong className={styles.title}>Tarefas criadas</strong>
        <span className={styles.counter}>0</span>
      </div>

      <div>
        <strong className={styles.title && styles.done}>Concluídas</strong>
        <span className={styles.counter}>0</span>
      </div>
    </section>
  );
}
