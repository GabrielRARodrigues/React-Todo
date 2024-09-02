import todoLogo from '../assets/todo-logo.svg'

import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <img
        src={todoLogo}
        alt="Logo do site Todo: um foguete azul seguido do nomo site nas cores azul e roxo"
      />
    </header>
  )
}
