import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import moment from 'moment'

import Link from '../../../../components/Link'
import './HomeListItem.css'

class HomeListItem extends React.PureComponent {
  static propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    publishedDate: PropTypes.number.isRequired,
    className: PropTypes.string,
  }

  static defaultProps = {
    className: '',
  }

  get date() {
    const { publishedDate } = this.props
    return moment(publishedDate * 1000).format('DD MMM YYYY')
  }

  render() {
    const { id, title, className } = this.props
    return (
      <Link
        className={classnames("HomeListItem--wrapper", className)}
        to={`/poll/${id}`}
      >
        <div className="HomeListItem--title">{this.date}</div>
        <p className="HomeListItem--body">{title}</p>
      </Link>
    )
  }
}

export default HomeListItem
