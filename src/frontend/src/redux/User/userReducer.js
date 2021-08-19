import * as actions from './userActionTypes'

const initialState = {
  loadingUser: false,
  activeUser: {},
  educations: [
    { id: 7,
      school: 'Boston University',
      degreeReceived: 'Master`s',
      activities: 'Football',
      description: 'sdf',
      fieldOfStudy: 'Business',
      dateStart: '2001',
      dateFinish: '2004'
    },
    {
      school: 'DANIT',
      degreeReceived: 'Master`s',
      activities: 'Football',
      description: 'sdf',
      fieldOfStudy: 'Business',
      dateStart: '2019',
      dateFinish: '2021'
    }
  ],
  certifications: [],
  workPlaces: []
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SAVE_ACTIVE_USER:
      return {
        ...state,
        activeUser: action.payload
      }
    case actions.SIGN_OUT:
      localStorage.clear()
      window.location.href = '/'
      return {
        ...state,
        activeUser: action.payload
      }

    case actions.ADD_NEW_EDUCATION:
      return {
        ...state,
        educations:
              [ state.educations
                ? [ ...state.educations, action.payload ]
                : action.payload]
      }
    default: {
      return state
    }
  }
}

export default userReducer