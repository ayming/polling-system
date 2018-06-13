import { handleActions } from 'redux-actions'

import { FETCH_ALL_SUCCESS, SUBMIT_SUCCESS } from '../actions/poll'

// ------------------------------------
// Helper
// ------------------------------------
const replacePolls = (_, { payload }) => payload
  // normalize data structure to have indexing
  .polls.reduce((prev, question) => ({ ...prev, [question.id]: question }), {})

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {}

export default handleActions({
  [FETCH_ALL_SUCCESS]: replacePolls,
  [SUBMIT_SUCCESS]: replacePolls,
}, initialState)
