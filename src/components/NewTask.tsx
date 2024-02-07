import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { PlusCircle } from '@phosphor-icons/react';

import { TaskProps } from '../App';

import styles from './NewTask.module.css';

interface NewTaskProps {
  onAddNewTask: (task: TaskProps) => void;
}

export function NewTask({ onAddNewTask }: NewTaskProps) {
  const [newTaskValue, setNewTaskValue] = useState('');

  function handleNewTaskValueChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setNewTaskValue(event.target.value);
  }

  function handleNewTaskValueInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório');
  }

  function handleAddNewTask(event: FormEvent) {
    event.preventDefault();

    onAddNewTask({
      id: 1,
      title: newTaskValue,
      isChecked: false
    });

    setNewTaskValue('');
  }

  return (
    <form onSubmit={handleAddNewTask} className={styles.taskForm}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={newTaskValue}
        onChange={handleNewTaskValueChange}
        onInvalid={handleNewTaskValueInvalid}
        required
      />

      <button type="submit">
        Criar
        <PlusCircle size={16} weight="bold" />
      </button>
    </form>
  );
}
