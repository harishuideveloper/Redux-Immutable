import React from 'react'
import {container, title, slogan} from './styles.css'

function Home (props) {
  return (
    <div className={container}>
      <p className={title}>{'Ducker'}</p>
      <p className={slogan}>{'the real time, cloud based social paltform'}</p>
    </div>
  )
}

export default Home
