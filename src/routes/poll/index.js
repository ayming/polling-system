import React from 'react'

import Poll from './Poll'
import Layout from '../../components/Layout'
import { fetchAll } from '../../actions/poll'

async function action({ params, store }) {
  await store.dispatch(fetchAll())
  // select question by pollId
  const { pollId } = params
  const { polls = {} } = store.getState()
  const question = polls[pollId]
  if (!question) return { redirect: '/not-found' }
  return {
    title: 'Poll',
    chunks: ['poll'],
    component: (
      <Layout>
        <Poll {...question} />
      </Layout>
    ),
  }
}

export default action
