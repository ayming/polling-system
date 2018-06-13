import React from 'react'

import Home from './Home'
import Layout from '../../components/Layout'
import { hasPollSelector } from '../../selectors'
import { fetchAll } from '../../actions/poll'

async function action({ store }) {
  const state = store.getState()
  const hasPoll = hasPollSelector(state)
  if (!hasPoll) {
    await store.dispatch(fetchAll())
  }
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
