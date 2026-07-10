import React from 'react'
import Logo from './Logo'
import Menu from './Menu'
import styles from "./Nav.module.css"

export default function Nav() {
  return (
    <div className={styles.nav}>
      <Logo />
      <Menu/>
    </div>
  )
}
