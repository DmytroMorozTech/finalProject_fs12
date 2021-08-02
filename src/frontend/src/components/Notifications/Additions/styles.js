import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({

  itemWrapper: {
    display: 'flex'
  },
  icon: {
    fontSize: 30,
    color: 'grey'
  },
  itemTextWrapper: {
    marginLeft: 10,
    color: 'grey'
  },
  itemTextHeader: {
    lineHeight: 0.5
  },
  itemTextBody: {
    lineHeight: 0.5,
    fontSize: 12
  }
}))