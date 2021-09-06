import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  following: {
    marginTop: theme.spacing(12)
  },

  filter: {
    border: theme.border.simple,
    borderRadius: theme.shape.medium,
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing(3),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing(1),
    fontSize: theme.typography.h4.fontSize
  },

  kindOfFilter: {
    fontWeight: theme.typography.fontWeightBold
  },

  filterMenu: {
    cursor: 'pointer'
  },

  peopleFollowing: {
    border: theme.border.simple,
    borderRadius: theme.shape.medium,
    backgroundColor: theme.palette.common.white,
    marginTop: theme.spacing(3),
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'hidden'
  }
}))
