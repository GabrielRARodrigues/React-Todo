import { useState } from 'react'

import { v4 as uuidv4 } from 'uuid'

import styles from './App.module.css'

import { Header } from './components/Header'
import { CreateTaskForm } from './components/CreateTaskForm'
import { Task } from './components/Task'

import ClipboardIcon from './assets/icons/clipboard.svg?react'

export interface Task {
  id: string
  content: string
  done: boolean
}

export function App() {
  const [tasks, setTasks] = useState<Task[]>([])

  const numberOfTasks = tasks.length

  const numberOfDoneTasks = tasks.filter(task => task.done).length

  function createTask(taskContent: string) {
    const newTaskId = uuidv4()

    const newTask: Task = {
      id: newTaskId,
      content: taskContent,
      done: false
    }

    setTasks([...tasks, newTask])
  }

  function deleteTask(taskToDelete: Task) {
    const id = taskToDelete.id

    const tasksWithoutDeletedTask = tasks.filter(task => task.id !== id)

    setTasks(tasksWithoutDeletedTask)
  }

  function toggleTaskStatus(taskId: string) {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        task.done = !task.done
      }

      return task
    })

    setTasks(updatedTasks)
  }

  return (
    <div>
      <Header />

      <main className={styles.container}>
        <section className={styles.form}>
          <CreateTaskForm onCreateTask={createTask} />
        </section>
        <section className={styles.tasks}>
          <div className={styles.tasksInfo}>
            <strong className={styles.createdTasks}>
              Tarefas criadas{' '}
              <span className={styles.tasksNumber}>{numberOfTasks}</span>
            </strong>
            <strong className={styles.completedTasks}>
              Concluídas{' '}
              <span className={styles.tasksNumber}>
                {numberOfDoneTasks} {numberOfTasks > 0 && `de ${numberOfTasks}`}
              </span>
            </strong>
          </div>
          {tasks.length > 0 ? (
            <ul className={styles.taskList}>
              {tasks.map(task => (
                <li className={styles.taskListItem} key={task.id}>
                  <Task
                    task={task}
                    onToggleTaskStatus={toggleTaskStatus}
                    onDeleteTask={deleteTask}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <div className={styles.content}>
              <ClipboardIcon />
              <div>
                <p>
                  <strong>Você ainda não tem tarefas cadastradas</strong>
                </p>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  )
}
