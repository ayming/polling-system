import { handleActions } from 'redux-actions'

import { FETCH_ALL_SUCCESS, SUBMIT_SUCCESS } from '../actions/poll'

// ------------------------------------
// Helper
// ------------------------------------
const replacePolls = (_, { payload }) => payload.polls

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = []

export default handleActions({
  [FETCH_ALL_SUCCESS]: replacePolls,
  [SUBMIT_SUCCESS]: replacePolls,
}, initialState)
