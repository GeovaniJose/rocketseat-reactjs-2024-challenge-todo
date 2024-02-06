import { PlusCircle } from '@phosphor-icons/react';

import styles from './NewTask.module.css';

export function NewTask() {
  return (
    <form action="" className={styles.taskForm}>
      <input type="text" name="newTask" placeholder="Adicione uma nova tarefa" />

      <button type="submit">
        Criar
        <PlusCircle size={16} weight="bold" />
      </button>
    </form>
  );
}
