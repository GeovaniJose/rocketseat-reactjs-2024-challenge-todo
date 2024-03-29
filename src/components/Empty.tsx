import { Clipboard } from '@phosphor-icons/react';

import styles from './Empty.module.css';

export function Empty() {
  return (
    <div className={styles.empty}>
      <Clipboard size={56} />

      <footer>
        <strong>
          Você ainda não tem tarefas cadastradas
        </strong>
        <span>
          Crie tarefas e organize seus itens a fazer
        </span>
      </footer>
    </div>
  );
}
