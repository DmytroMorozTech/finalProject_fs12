import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  networkMain: {
    display: 'flex',
    flexDirection: 'column'
  },

  block: {
    border: theme.border.simple,
    borderRadius: theme.shape.medium,
    backgroundColor: theme.palette.common.white,
    overflow: 'hidden'
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: theme.spacing(2),
    fontSize: theme.typography.h5.fontSize,
    color: theme.palette.grey[700],
    '& > div': {
      paddingTop: theme.spacing(1)
    }
  },

  invitationHeader: {
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(4),
    padding: theme.spacing(1)
  },

  people: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(2)
  },

  miniProfiles: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingLeft: theme.spacing(1)
  },

  '@media screen and (max-width: 445px)': {
    smallMiniProfiles: {
      justifyContent: 'center'
    }
  }
}))
