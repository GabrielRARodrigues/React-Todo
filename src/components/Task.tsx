import { Check, Trash } from '@phosphor-icons/react'

import styles from './Task.module.css'

import { Task as ITask } from '../App'

interface TaskProps {
  task: ITask
  onToggleTaskStatus: (taskId: string) => void
  onDeleteTask: (task: ITask) => void
}

export function Task({ task, onToggleTaskStatus, onDeleteTask }: TaskProps) {
  function handleTaskStatus() {
    onToggleTaskStatus(task.id)
  }

  function handleDeleteTask() {
    onDeleteTask(task)
  }

  return (
    <div className={`${styles.task} ${task.done && styles.taskDone}`}>
      <div className={styles.taskContainer}>
        <div className={styles.taskCheck}>
          <input
            className="sr-only"
            type="checkbox"
            name="task"
            id={task.id}
            checked={task.done}
            onChange={handleTaskStatus}
          />
          <label aria-label="Marcar tarefa como feita" htmlFor={task.id}>
            {task.done && <Check weight="bold" />}
          </label>
        </div>
        <p className={styles.taskContent}>{task.content}</p>
      </div>
      <button
        aria-label="Remover tarefa"
        className={styles.taskButton}
        title="Remover tarefa"
        onClick={handleDeleteTask}
      >
        <Trash />
      </button>
    </div>
  )
}
