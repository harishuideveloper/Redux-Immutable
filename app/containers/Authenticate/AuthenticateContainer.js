import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Authenticate } from 'components'
import auth from 'helpers/auth'
import * as userActionCreators from 'redux/modules/users'

class AuthenticateContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
    this.handleAuth = this.handleAuth.bind(this)
  }

  handleAuth () {
    this.props.fetchingUser()
    auth().then((user) => {
      this.props.fetchingUserSuccess(user.uid, user, Date.now())
      this.props.authUser(user.uid)
    })
    .catch(e => {
      this.props.fetchingUserFailure(e)
    })
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
  fetchingUser: PropTypes.func.isRequired,
  authUser: PropTypes.func.isRequired,
  fetchingUserFailure: PropTypes.func.isRequired,
  fetchingUserSuccess: PropTypes.func.isRequired,
}

function mapStateToProps (state) {
  console.log(state)
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
