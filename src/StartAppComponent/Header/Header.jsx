import React from 'react'
import S from './Header.module.css'
const Header =()=>{
  return (
    <div className={`container ${S.title}` }>
      <h1>Список задач!</h1>
    </div>
  )
}

export default Header