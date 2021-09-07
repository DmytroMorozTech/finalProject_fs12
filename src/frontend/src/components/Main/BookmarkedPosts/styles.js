import {makeStyles} from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  container: {
    marginTop: '75px'
  },

  savedElementsPanel: {
    border: theme.border.simple,
    borderRadius: theme.shape.medium,
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing(2),
    paddingLeft: theme.spacing(4)
  },

  savedElementsHeading: {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.grey[700]
  },

  savedElementsSubheading: {
    paddingLeft: theme.spacing(1),
    paddingTop: theme.spacing(1)
  }
}))
