import React from 'react'
import PropTypes from 'prop-types'
import { text } from './styles.css'

function Logout (props) {
  return(
    <div className={text}>
      {'You are now Logged out'}
    </div>
  )
}

Logout.PropTypes = {

}

export default Logout