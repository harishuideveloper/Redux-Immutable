import React from 'react'
import { Navigation } from 'components'
import { connect } from 'react-redux'
import { container, innerContainer } from './styles.css'

class MainContainer extends React.Component {
  render () {
    return (
      <div className={container}>
        <div className={innerContainer}>
          <Navigation isAuthed = {this.props.isAuthed}/>
          { this.props.children }
        </div>
      </div>
    )
  }
}

export default connect(
  (state) => ({ isAuthed: state.isAuthed })
)(MainContainer)
