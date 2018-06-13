/**
 * Poll selectors
 */
import { createSelector } from 'reselect'

/**
 * Select poll state
 * @returns {object} polls
 */
export const pollsSelector = state => state.polls

/**
 * Select sorted poll state
 * @returns {object[]} pollList
 */
export const pollListSelector = createSelector(
  pollsSelector,
  (polls) => Object.keys(polls)
    .map(id => polls[id])
    .sort((a, b) => b.publishedDate - a.publishedDate)
)

/**
 * Select latest poll question state
 * @returns {object} question
 */
export const latestQuestionSelector = createSelector(
  pollListSelector,
  (pollList) => pollList[0] || {}
)

/**
 * Select remaining poll question state
 * @returns {object} remainingQuestionList
 */
export const remainingQuestionListSelector = createSelector(
  pollListSelector,
  (pollList) => pollList.slice(1)
)
