import * as actions from './postActionTypes'

const initialStore = {
  posts: []
}

const postReducer = (store = initialStore, action) => {
  switch (action.type) {
    case actions.SAVE_POSTS:
      return { ...store, posts: action.payload }

    case actions.ADD_NEW_POST:
      return { ...store, posts: [...store.posts, action.payload] }

    default: {
      return store
    }
  }
}

export default postReducer