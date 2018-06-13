import React from 'react'

import HomeHeroContainer from './containers/HomeHeroContainer'
import './Home.css'

class Home extends React.PureComponent {
  render() {
    return (
      <div className="Home--wrapper">
        <HomeHeroContainer />
        <div className="row">
          <div className="col-sm-6">123</div>
          <div className="col-sm-6">123</div>
        </div>
      </div>
    )
  }
}

export default Home
