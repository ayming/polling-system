import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Link from '../Link'
import './Header.css'

class Header extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
  }

  render() {
    const { className } = this.props
    return (
      <header className={classnames('Header--wrapper', className)}>
        <Link className="Header--title" to="/">Polling System</Link>
      </header>
    )
  }
}

export default Header
