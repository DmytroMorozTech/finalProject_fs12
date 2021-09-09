import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({

  network: {
    marginTop: '75px'
  },

  '@media screen and (max-width: 2000px)': {
    networkLeft: {
      width: '325px'
    },

    networkMain: {
      width: '807px'
    }
  },

  '@media screen and (max-width: 1160px)': {
    networkLeft: {
      width: '300px'
    },

    networkMain: {
      width: '617px'
    }
  },

  '@media screen and (max-width: 945px)': {
    networkLeft: {
      width: '300px'
    },

    networkMain: {
      width: '427px'
    }
  },

  '@media screen and (max-width: 786px)': {
    networkLeft: {
      width: '617px'
    },

    networkMain: {
      width: '617px'
    }
  },

  '@media screen and (max-width: 645px)': {
    networkLeft: {
      minWidth: '380px',
      width: '427px'
    },

    networkMain: {
      minWidth: '380px',
      width: '427px'
    }
  },

  '@media screen and (max-width: 400px)': {
    networkLeft: {
      minWidth: '300px'
    },

    networkMain: {
      minWidth: '300px'
    }
  }
}))
