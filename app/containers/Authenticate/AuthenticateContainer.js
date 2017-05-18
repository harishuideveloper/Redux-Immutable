import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Authenticate } from 'components'
import * as userActionCreators from 'redux/modules/users'

class AuthenticateContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
    this.handleAuth = this.handleAuth.bind(this)
  }

  handleAuth (e) {
    e.preventDefault()
    this.props.fetchAndHandleAuthUser()
      .then(() => this.context.router.replace('feed'))
  }

  render () {
    return (
      <Authenticate
        isFetching = {this.props.isFetching}
        error= {this.props.error}
        onAuth={this.handleAuth} />
    )
  }
}

AuthenticateContainer.PropTypes = {
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  fetchAndHandleAuthUser: PropTypes.func.isRequired,
}

AuthenticateContainer.contextTypes = {
  router: PropTypes.object.isRequired,
}

function mapStateToProps (state) {
  return {
    isFetching: state.isFetching,
    error: state.error,
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(userActionCreators, dispatch)
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthenticateContainer)
