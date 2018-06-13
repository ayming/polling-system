import React from 'react'
import PropTypes from 'prop-types'
import './NotFound.css'

class NotFound extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
  }

  render() {
    return (
      <div className="NotFound--wrapper">
        <div className="NotFound--container">
          <h1>{this.props.title}</h1>
          <p>Sorry, the page you were trying to view does not exist.</p>
        </div>
      </div>
    )
  }
}

export default NotFound
