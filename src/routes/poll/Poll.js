import React from 'react'
import './Poll.css'

class Poll extends React.PureComponent {
  render() {
    return (
      <div className="Poll--wrapper">
        <pre>{JSON.stringify(this.props, null, 2)}</pre>
      </div>
    )
  }
}

export default Poll
