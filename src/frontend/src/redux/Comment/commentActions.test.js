// import configureStore from 'redux-mock-store' // ES6 modules
import thunk from 'redux-thunk'
import * as actions from './commentActionTypes'
import http from '../../services/httpService'

const { configureStore } = require('redux-mock-store') // CommonJS

const middlewares = [thunk] // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares)

// You would import the action from your codebase in a real scenario
function success () {
  return {
    type: actions.UPDATE_COMMENT,
    payload: {
      comment: {
        id: 4,
        text: 'Comment no.4 goes here.',
        user: {
          id: 2,
          fullName: 'Frank Jackson',
          avatarPublicId: 'linkedin/avatars/kgpkn4a4fudfjpebyegx',
          positionAndCompany: 'Head of CIS region at Apple'
        },
        createdDate: '2020-04-03T12:11:11.111111',
        lastModifiedDate: '2020-04-03T12:11:11.111111',
        isLikedByActiveUser: true,
        numberOfLikes: 1
      },
      postId: 9
    }
  }
}

function fetchData () {
  return dispatch => {
    http
      .post(`/api/comments/toggle_like/4`)
      .then((res) => res.data)
      .then((newCommentObj) => {
        dispatch({ type: actions.UPDATE_COMMENT, payload: {comment: newCommentObj, postId: 9} })
      })
  }
}

it('should execute fetch data', () => {
  const store = mockStore({})

  // Return the promise
  return store.dispatch(fetchData())
    .then(() => {
      const actions = store.getActions()
      expect(actions[0]).toEqual(success())
    })
})
