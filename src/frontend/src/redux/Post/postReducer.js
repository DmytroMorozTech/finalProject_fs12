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

    case actions.GET_COMMENTS_FOR_POST:
      let { listOfComments, postId } = action.payload
      if (listOfComments.length === 0) return store

      let currentPost2 = store.postsList.find((post) => post.id === postId)

      let currentPost2Copy = {...currentPost2}
      currentPost2Copy.comments = listOfComments

      const indexOfCurrentPost2 = store.postsList.indexOf(currentPost2)

      return update(store, {
        postsList: { $splice: [[indexOfCurrentPost2, 1, currentPost2Copy]] }
      })

    default: {
      return store
    }
  }
}

export default postReducer