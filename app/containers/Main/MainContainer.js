import React from 'react'
import { Navigation } from 'components'
import { container, innerContainer } from './styles.css'

class MainContainer extends React.Component {
  render () {
    return (
      <div className={container}>
        <div className={innerContainer}>
          <Navigation isAuthed = {true}/>
          { this.props.children }
        </div>
      </div>
    )
  }
}

module.exports = MainContainer
