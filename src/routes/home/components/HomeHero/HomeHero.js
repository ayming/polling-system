import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import numeral from 'numeral'

import './HomeHero.css'

class HomeHero extends React.PureComponent {
  static propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    publishedDate: PropTypes.number.isRequired,
    answer: PropTypes.shape({
      type: PropTypes.string.isRequired,
      options: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
      })).isRequired,
    }).isRequired,
    totalRecords: PropTypes.number,
  }

  static defaultProps = {
    totalRecords: 0,
  }

  get date() {
    const { publishedDate } = this.props
    return moment(publishedDate * 1000).format('DD MMM YYYY')
  }

  get total() {
    const { totalRecords } = this.props
    return numeral(totalRecords).format('0,0')
  }

  render() {
    const { title } = this.props
    return (
      <div className="HomeHero--wrapper">
        <div className="HomeHero--title">
          <i className="HomeHero--icon" />
          Latest Poll
        </div>
        <p>{title} <span className="HomeHero--date">{this.date}</span></p>
        <div className="HomeHero--button">
          <button className="HomeHero--button-yes">YES</button>
          <button className="HomeHero--button-no">NO</button>
        </div>
        <div>Total number of votes recorded: {this.total}</div>
        <hr />
      </div>
    )
  }
}

export default HomeHero
