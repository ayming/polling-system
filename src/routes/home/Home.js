import React from 'react'

import HomeHeroContainer from './containers/HomeHeroContainer'
import HomeListContainer from './containers/HomeListContainer'
import './Home.css'

class Home extends React.PureComponent {
  render() {
    return (
      <div className="Home--wrapper">
        <HomeHeroContainer />
        <HomeListContainer />
      </div>
    )
  }
}

export default Home
