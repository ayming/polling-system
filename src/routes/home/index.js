import React from 'react'

import Home from './Home'
import Layout from '../../components/Layout'
import { fetchAll } from '../../actions/poll'

async function action({ store }) {
  await store.dispatch(fetchAll())
  return {
    title: 'Home',
    chunks: ['home'],
    component: (
      <Layout>
        <Home />
      </Layout>
    ),
  }
}

export default action
