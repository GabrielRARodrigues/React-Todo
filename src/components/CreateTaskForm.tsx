import { PlusCircle } from '@phosphor-icons/react'

import styles from './CreateTaskForm.module.css'
import { ChangeEvent, FormEvent, useState } from 'react'
import { Button } from './Button'
import { Input } from './Input'

interface CreateTaskFormProps {
  onCreateTask: (content: string) => void
}

export function CreateTaskForm({ onCreateTask }: CreateTaskFormProps) {
  const [taskContent, setTaskContent] = useState('')

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    onCreateTask(taskContent)
    setTaskContent('')
  }

  function handleTaskContentChange(event: ChangeEvent<HTMLInputElement>) {
    setTaskContent(event.target.value)
  }

  const buttonIsDisabled = taskContent.length <= 0

  return (
    <form className={styles.form} onSubmit={handleCreateNewTask}>
      <Input
        id="new-task"
        name="task"
        type="text"
        placeholder="Adicione uma nova tarefa"
        required
        value={taskContent}
        onChange={handleTaskContentChange}
      />

      <Button title="Criar tarefa" type="submit" disabled={buttonIsDisabled}>
        Criar <PlusCircle size={20} />
      </Button>
    </form>
  )
}
