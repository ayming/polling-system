import React from 'react'
import PropTypes from 'prop-types'

import HomeListItem from './HomeListItem'
import './HomeList.css'

class HomeList extends React.PureComponent {
  static propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      publishedDate: PropTypes.number.isRequired,
    })).isRequired,
  }

  render() {
    const { list } = this.props
    return (
      <div className="row">
        {list.map(item => (
          <HomeListItem
            {...item}
            key={`poll-${item.id}`}
            className="col-sm-6"
            />
        ))}
      </div>
    )
  }
}

export default HomeList
