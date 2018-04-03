import * as actions from './index'
import faker from 'faker'
import * as actionTypes from './constants'

describe('Bento search actions', () => {
  let value = faker.lorem.word()

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
        type: actionTypes.BENTO_SEARCH_FINISH,
        payload: value
      }
      expect(actions.finishSearch(value)).toEqual(expectedAction)
    })
  })

  describe('BENTO_SEARCH_FAIL', () => {
    it('should create an action to fail a search', () => {
      let expectedAction = {
        type: actionTypes.BENTO_SEARCH_FAIL,
        payload: value
      }
      expect(actions.failSearch(value)).toEqual(expectedAction)
    })
  })
})