import React from 'react'
import PropTypes from 'prop-types'
import Header from '../Header'
import './Layout.css'

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {
    return (
      <div className="Layout--wrapper">
        <div className="Layout--body">{this.props.children}</div>
        <Header className="Layout--header" />
      </div>
    )
  }
}

export default Layout
