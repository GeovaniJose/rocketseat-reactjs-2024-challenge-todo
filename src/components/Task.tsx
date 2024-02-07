import { CheckCircle, Circle, Trash } from '@phosphor-icons/react';

import { TaskProps } from '../App';

import styles from './Task.module.css';

interface TaskComponentProps {
  task: TaskProps;
  onRemoveTask: (task: TaskProps) => void;
  onToggleCheck: (task: TaskProps) => void;
}

export function Task({ task, onToggleCheck, onRemoveTask }: TaskComponentProps) {
  function handleRemoveTask() {
    onRemoveTask(task);
  }

  function handleToggleCheck() {
    onToggleCheck(task);
  }

  const taskChecked = task.isChecked;

  return (
    <div className={styles.taskContainer}>
      <label htmlFor="checkbox" onClick={handleToggleCheck}>
        <input readOnly type="checkbox" checked={taskChecked} />
        <span className={`${styles.checkbox} ${taskChecked && styles.checked}`}>
          {taskChecked ? <CheckCircle size={20} weight="fill" /> : <Circle size={20} />}
        </span>

        <p className={`${styles.title} ${taskChecked && styles.checked}`}>
          {task.title}
        </p>
      </label>

      <button title="Deletar task" onClick={handleRemoveTask}>
        <Trash size={20} />
      </button>
    </div>
  );
}
