import React from 'react'
import PropTypes from 'prop-types'
import { Navigation } from 'components'
import { connect } from 'react-redux'
import { container, innerContainer } from './styles.css'
import { bindActionCreators } from 'redux'
import * as userActionCreators from 'redux/modules/users'
import { formatUserData } from 'helpers/utils'
import { firebaseAuth } from 'config/constants'

class MainContainer extends React.Component {

  componentDidMount () {
    firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        const userData = user.providerData[0]
        const userInfo = formatUserData(userData.displayName, userData.photoURL, user.uid)
        this.props.authUser(user.uid)
        this.props.fetchingUserSuccess(user.uid, userInfo, Date.now())
        if(this.props.location.pathname === '/') {
          this.context.router.replace('feed')
        }
      } else {
        this.props.removeFetching()
      }
    })
  }

  render () {
    return this.props.isFetching
      ? null
      : <div className={container}>
          <div className={innerContainer}>
            <Navigation isAuthed = {this.props.isAuthed}/>
            { this.props.children }
          </div>
        </div>
  }
}

MainContainer.contextTypes = {
  router: PropTypes.object.isRequired,
}

export default connect(
  (state) => ({ isAuthed: state.users.isAuthed, isFetching: state.users.isFetching}),
  (dispatch) => bindActionCreators(userActionCreators, dispatch)
)(MainContainer)
