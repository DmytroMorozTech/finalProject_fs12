import * as actions from './postActionTypes'
import update from 'immutability-helper'

const initialStore = {
  postsList: [],
  loading: false
}

const postReducer = (store = initialStore, action) => {
  switch (action.type) {
    case actions.LOADING_POSTS:
      return {...store, loading: action.payload}

    case actions.SAVE_POSTS:
      return { ...store, postsList: action.payload }

    case actions.ADD_NEW_POST:
      return { ...store, postsList: [...store.postsList, action.payload] }

    case actions.UPDATE_POST:
      let updatedPost = action.payload

      const currentPost = store.postsList.find((post) => post.id === updatedPost.id)

      const indexOfCurrentPost = store.postsList.indexOf(currentPost)

      return update(store, {
        postsList: { $splice: [[indexOfCurrentPost, 1, updatedPost]] }
      })

    case actions.GET_USERS_WHO_LIKED_POST:
      let {usersList, id} = action.payload

      let currentPost1 = store.postsList.find((post) => post.id === id)
      let currentPost1Copy = {...currentPost1}
      currentPost1Copy.usersWhoLikedPost = usersList

      const indexOfCurrentPost1 = store.postsList.indexOf(currentPost1)

      return update(store, {
        postsList: { $splice: [[indexOfCurrentPost1, 1, currentPost1Copy]] }
      })

    default: {
      return store
    }
  }
}

export default postReducer