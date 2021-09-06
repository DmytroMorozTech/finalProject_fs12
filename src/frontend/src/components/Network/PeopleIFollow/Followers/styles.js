import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  followers: {
    marginTop: theme.spacing(12)
  },

  peopleFollowers: {
    marginTop: theme.spacing(1),
    border: theme.border.simple,
    borderRadius: theme.shape.medium,
    backgroundColor: theme.palette.common.white,
    display: 'flex'
  }
}))
