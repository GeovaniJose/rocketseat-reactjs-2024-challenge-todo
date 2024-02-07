import { CheckCircle, Circle, Trash } from '@phosphor-icons/react';

import styles from './Task.module.css';

export function Task() {
  return (
    <div className={styles.taskContainer}>
      <label htmlFor="checkbox">
        <input readOnly name="checkbox" type="checkbox" checked />
        <span className={`${styles.checkbox} ${styles.checked}`}>
          <CheckCircle size={20} weight="fill" />
          <Circle size={20} />
        </span>

        <p className={`${styles.title} ${styles.checked}`}>
          Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
        </p>
      </label>

      <button title="Deletar task">
        <Trash size={20} />
      </button>
    </div>
  );
}
