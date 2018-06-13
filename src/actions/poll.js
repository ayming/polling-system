import { createAction } from 'redux-actions'

import delay from '../utils/delay'

const PREFIX = '#POLL/'

// ------------------------------------
// Constants
// ------------------------------------
export const FETCH_ALL_REQUEST = `${PREFIX}FETCH_ALL_REQUEST`
export const FETCH_ALL_SUCCESS = `${PREFIX}FETCH_ALL_SUCCESS`
export const FETCH_ALL_FAILURE = `${PREFIX}FETCH_ALL_FAILURE`
export const SUBMIT_REQUEST = `${PREFIX}SUBMIT_REQUEST`
export const SUBMIT_SUCCESS = `${PREFIX}SUBMIT_SUCCESS`
export const SUBMIT_FAILURE = `${PREFIX}SUBMIT_FAILURE`

// ------------------------------------
// Actions
// ------------------------------------
const _fetchAll = {
  request: createAction(FETCH_ALL_REQUEST),
  success: createAction(FETCH_ALL_SUCCESS),
  failure: createAction(FETCH_ALL_FAILURE),
}

const _submit = {
  request: createAction(SUBMIT_REQUEST),
  success: createAction(SUBMIT_SUCCESS),
  failure: createAction(SUBMIT_FAILURE),
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk!

    NOTE: This is solely for demonstration purposes. In a real application,
    you'd probably want to dispatch an action of COUNTER_DOUBLE and let the
    reducer take care of this logic.  */

// ------------------------------------
// Actions (Thunks)
// ------------------------------------
const dummy = {
  "polls": [
    {
      "id": 1,
      "title": "Is bitcoin worth the time and money that mining requires?",
      "publishedDate": 1516605447,
      "answer": {
        "type": "Single",
        "options": [{
            "id": 1,
            "label": "Yes"
          },
          {
            "id": 2,
            "label": "No"
          }
        ]
      }
    },
    {
      "id": 2,
      "title": "Should chatbots replace humans in customer service jobs?",
      "publishedDate": 1516000647,
      "answer": {
        "type": "Single",
        "options": [{
            "id": 3,
            "label": "Yes"
          },
          {
            "id": 4,
            "label": "No"
          }
        ]
      }
    },
    {
      "id": 3,
      "title": "How are we feeling about 2018?",
      "publishedDate": 1515568647,
      "answer": {
        "type": "Single",
        "options": [{
            "id": 5,
            "label": "Hopeful"
          },
          {
            "id": 6,
            "label": "Doubtful"
          }
        ]
      }
    },
    {
      "id": 4,
      "title": "Which country/region have you ever visited? (Select all that applies)",
      "publishedDate": 1515482247,
      "answer": {
        "type": "Multi",
        "options": [{
            "id": 7,
            "label": "Hong Kong"
          },
          {
            "id": 8,
            "label": "China"
          },
          {
            "id": 9,
            "label": "Australia"
          },
          {
            "id": 10,
            "label": "Thailand"
          },
          {
            "id": 11,
            "label": "Korea"
          },
          {
            "id": 12,
            "label": "Japan"
          }
        ]
      }
    },
    {
      "id": 5,
      "title": "Will new benefits encourage you to study or work in mainland?",
      "publishedDate": 1515309447,
      "answer": {
        "type": "Single",
        "options": [{
            "id": 13,
            "label": "Yes"
          },
          {
            "id": 14,
            "label": "No"
          }
        ]
      }
    }
  ]
}

export const fetchAll = () => async dispatch => {
  dispatch(_fetchAll.request())
  // TODO: replace dummy data to server data
  return delay(2000)
    .then(() => dispatch(_fetchAll.success(dummy)))
}

export const submit = () => async dispatch => {
  dispatch(_submit.request())
  // TODO: replace dummy data to server data
  return delay(2000)
    .then(() => dispatch(_submit.success(dummy)))
}
