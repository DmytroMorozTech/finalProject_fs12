import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
  container: {
    display: 'grid',
    gridArea: 'leftside'
  },

  profileCard: {
    textAlign: 'center',
    overflow: 'hidden',
    marginBottom: '7.5px',
    boxShadow: '0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 19.5%)',
    borderRadius: '4.5px',
    border: 'none',
    position: 'relative',
    transition: 'box-shadow 85ms'
  },

  profileInfo: {
    wordBreak: 'break-word',
    borderBottom: '1px solid rgba(0, 0, 0, 0.5)',
    wordWrap: 'break-word',
    padding: '12px 12px 15.5px'
  },

  profileBg: {
    background: 'center, no-repeat, 462px',
    height: '53.5px',
    margin: '-11.5px -11.5px 0'
  },

  profilePic: {
    background: 'center, white, content-box, 60%, no-repeat',
    border: '1.5px solid #fff',
    boxSizing: 'border-box',
    boxShadow: 'none',
    width: '71.5px',
    height: '71.5px',
    borderRadius: '29.5%',
    margin: '-37.5px auto 11.5px'
  },

  profileInfoText: {
    marginTop: '3.5px',
    color: '#0a66c2',
    fontSize: '12px',
    fontWeight: '390',
    lineHeight: '1.32'
  },

  profileWidget: {
    paddingTop: '11.5px',
    paddingBottom: '11.5px',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    'a': {
      display: 'flex',
      textDecoration: 'none',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '3.5px 11.5px',
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.9)'
      }
    }
  },

  profileWidgetText: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    fontSize: '12px',
    lineHeight: '1.33',
    '&:first-child': {
      color: 'rgba(0, 0, 0, 0.6)',
    },
    '&:nth-child(2)': {
      color: 'rgba(0, 0, 0, 0.11)'
    }
  },

  profileItem: {
    borderColor: 'rgba(0, 0, 0, 0.8)',
    textAlign: 'left',
    padding: '12px',
    fontSize: '12px',
    display: 'block',
  },

  socialCard: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    padding: '7.5px 0 0',
    'a': {
      color: 'black',
      fontSize: '11.5px',
      padding: '3.5px 11.5px 3.5px 11.5px',
      '&:hover': {
        color: '#0a66c2',
      },
      'span': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      '&:last-child': {
        textDecoration: 'none',
        color: 'rgba(0, 0, 0, 0.5)',
        padding: '11.5px',
        borderTop: '1px solid #d6cec2',
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.09)'
        }
      }
    } 
  },
  
  profileLink: {
    color: 'rgba(0, 0, 0, 0.5)',
    fontSize: '14px',
    lineHeight: '1.5',
    fontWeight: '560'
  }
}))
