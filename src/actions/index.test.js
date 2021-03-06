import * as actions from './index'
import faker from 'faker'
import * as actionTypes from './constants'

describe('Bento search actions', () => {
  let value = faker.lorem.word()

  describe('BENTO_SEARCH', () => {
    it('should create an action to search', () => {
      let expectedAction = {
        type: actionTypes.BENTO_SEARCH,
        payload: value
      }
      expect(actions.search(value)).toEqual(expectedAction)
    })
  })

  describe('BENTO_SEARCH_BEGIN', () => {
    it('should create an action to begin search', () => {
      let expectedAction = {
        type: actionTypes.BENTO_SEARCH_BEGIN,
        payload: value
      }
      expect(actions.beginSearch(value)).toEqual(expectedAction)
    })
  })

  describe('BENTO_SEARCH_CANCEL', () => {
    it('should create an action to cancel a search', () => {
      let expectedAction = {
        type: actionTypes.BENTO_SEARCH_CANCEL,
        payload: value
      }
      expect(actions.cancelSearch(value)).toEqual(expectedAction)
    })
  })

  describe('BENTO_SEARCH_FINISH', () => {
    it('should create an action to finish a search', () => {
      let expectedAction = {
        type: actionTypes.BENTO_SEARCH_SUCCESS,
        payload: value
      }
      expect(actions.finishSearch(value)).toEqual(expectedAction)
    })
  })

  describe('BENTO_SEARCH_FAIL', () => {
    it('should create an action and set action.error to true', () => {
      let error = new TypeError(value)
      let expectedAction = {
        type: actionTypes.BENTO_SEARCH_ERROR,
        payload: error,
        error: true
      }
      expect(actions.failSearch(error)).toEqual(expectedAction)
    })
  })
})