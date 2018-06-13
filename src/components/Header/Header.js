import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import './Header.css'

class Header extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
  }

  render() {
    const { className } = this.props
    return (
      <header className={classnames('Header--wrapper', className)}>
        <div className="Header--title">Polling System</div>
      </header>
    )
  }
}

export default Header
