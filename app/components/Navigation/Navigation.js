import React from 'react'
import { Link } from 'react-router'
import {container, navContainer, link} from './styles.css'
import { ModalContainer } from 'containers'

function NavLinks ({ isAuthed }) {
  return isAuthed === true
    ? <ul>
      <li><Link className={link} to='/'> {'Home'} </Link></li>
    </ul>
    : null
}

function ActionLinks ({ isAuthed }) {
  return isAuthed === true
    ? <ul>
      <li><ModalContainer /></li>
      <li><Link className={link} to='/logout'> {'Logout'} </Link></li>
    </ul>
    : <ul>
      <li><Link className={link} to='/'> {'Home'} </Link></li>
      <li><Link className={link} to='/auth'> {'Authenticated'} </Link></li>
    </ul>
}

function Navigation ({ isAuthed }) {
  return(
    <div className={container}>
      <nav className={navContainer}>
        <NavLinks isAuthed = {isAuthed}/>
        <ActionLinks isAuthed = {isAuthed}/>
      </nav>
    </div>
  )
}

export default Navigation
