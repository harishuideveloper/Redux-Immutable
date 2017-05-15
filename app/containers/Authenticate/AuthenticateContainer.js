import React from 'react'
import PropTypes from 'prop-types'
import { Authenticate } from 'components'
import auth from 'helpers/auth'

class AuthenticateContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
    this.handleAuth = this.handleAuth.bind(this)
  }

  handleAuth() {
    auth().then((user) => {
      console.log('Auth user', user)
    })
  }

  render () {
    return (
      <Authenticate
        isFetching = {false}
        error= ''
        onAuth={this.handleAuth} />
    )
  }
}

AuthenticateContainer.PropTypes = {
}

export default AuthenticateContainer
