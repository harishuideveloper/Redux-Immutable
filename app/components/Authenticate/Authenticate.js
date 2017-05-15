import React from 'react'
import PropTypes from 'prop-types'
import { FacebookAuthButton } from 'components'
import { centeredContainer, largeHeader, subHeader, errorMsg } from 'sharedStyles/styles.css'

function Authenticate ({error, isFetching, onAuth}) {
  return (
    <div className = {centeredContainer} >
      <h1 className= {largeHeader} >{'Authenticate'}</h1>
      <FacebookAuthButton isFetching={isFetching} onAuth={onAuth}/>
      { error ? <p className= {errorMsg} >{error}</p> : null }
    </div>
  )
}

Authenticate.PropTypes = {
  error: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  onAuth: PropTypes.func.isRequired,
}

export default Authenticate
