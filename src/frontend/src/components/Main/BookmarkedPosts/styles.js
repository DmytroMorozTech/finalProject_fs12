import {makeStyles} from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  container: {
    marginTop: '75px'
  },
  savedElementsBtnAll: {
    borderRadius: '1.99rem',
    fontSize: '1.6rem',
    padding: '8px 12px',
    backgroundColor: 'transparent',
    color: theme.palette.grey[600],
    marginLeft: '21.4px'
  },
  savedElementsPanel: {
    border: theme.border.simple,
    borderRadius: theme.shape.medium,
    backgroundColor: theme.palette.common.white,
    marginBottom: theme.spacing(3)
  },
  savedElementsHeading: {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.grey[500],
    fontSize: '18px',
    paddingLeft: '35px',
    fontWeight: 'bold'
  },
  savedElementsSubheading: {
    color: theme.palette.grey[500],
    fontSize: '15px',
    paddingLeft: '35px'
  }
}))
