import React from 'react'
import PropTypes from 'prop-types'
import { button } from './styles.css'

function FacebookAuthButton ({onAuth, isFetching}) {
  return (
    <div>
      <button className={button} onClick={onAuth}>
        {isFetching === true
          ? 'Loading'
          : 'Login with Facebook'}
      </button>
    </div>
  )
}

FacebookAuthButton.PropTypes = {
  isFetching: PropTypes.bool.isRequired,
  onAuth: PropTypes.func.isRequired,
}

export default FacebookAuthButton
