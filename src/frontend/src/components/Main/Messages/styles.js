import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({

  layoutListDetail: {
    margin: '75px auto',
    paddingLeft: '50px',
    maxWidth: '70%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },

  listDetailInner: {
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    borderRadius: 12,
    boxShadow: 'inset 0 0 0 1px #8080802b'
  },

  layoutList: {
    maxWidth: '40%',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: 'inset 0 0 0 1px #8080802b'
  },

  containerHeader: {
    position: 'relative!important'
  },

  containerTitle: {
    height: '44px',
    borderBottom: '1px solid rgba(0,0,0,0.08)',
    display: 'flex',
    alignItems: 'center'
  },

  flexGrow: {
    flexGrow: '1!important',
    paddingLeft: '16px!important',
    paddingRight: '40px!important',
    fontSize: '15px',
    fontWeight: '600'
  },

  menu: {
    marginLeft: '2px',
    marginRight: '2px',
    cursor: 'pointer',
    width: '40px',
    height: '40px',
    '& > .MuiSvgIcon-root': {
      margin: '8px',
      color: 'rgb(95 97 99)'
    },
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.10)',
      borderRadius: '50%'
    }
  },

  header_search: {
    position: 'relative',
    marginLeft: '15px',
    width: '290px',
    display: 'flex',
    alignItems: 'center',
    padding: '5px',
    borderRadius: 5,
    backgroundColor: '#eef3f8',
    marginTop: '5px',
    boxShadow: 'none',
    '&:hover': {
      boxShadow: 'inset 0 0 0 1px #000'
    },
    '& > .MuiSvgIcon-root': {
      color: 'rgb(95 97 99)'
    },
    '& > input': {
      fontSize: 18,
      marginLeft: 30,
      border: 0,
      outlineWidth: 0,
      backgroundColor: 'transparent',
      '&::placeholder': {
        color: 'grey',
        fontSize: '15px'
      }
    }
  },

  iconSearch: {
    left: '8px'
  },

  iconNavMenu: {
    right: '5px'
  },

  containerConversationsList: {
    position: 'relative',
    flex: 1,
    overflowX: 'hidden',
    listStyle: 'none!important',
    padding: 0,
    margin: 0,
    marginTop: 6
  },

  containerConvoItem: {
    position: 'relative',
    display: 'block',
    width: '100%',
    boxShadow: 'none',
    '&:hover': {
      boxShadow: 'inset 4px 0 0 0 #057642',
      backgroundColor: '#eef3f8'
    }
  },

  containerConvoItemActive: {
    position: 'relative',
    display: 'block',
    width: '100%',
    boxShadow: 'inset 4px 0 0 0 #057642',
    backgroundColor: '#eef3f8'
  },

  conversationCard: {
    position: 'relative',
    cursor: 'pointer',
    overflow: 'hidden',
    left: 0
  },

  dFlex: {
    display: 'flex'
  },

  selectableEntity: {
    minWidth: '60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  absolut: {
    position: 'absolute'
  },

  userAvatar: {
    width: 56,
    height: 56,
    borderRadius: '50%',
    marginTop: 10,
    marginLeft: 15,
    border: 'none'
  },

  statusUserAvatar: {
    border: '2px solid #057642',
    borderWidth: '3px',
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    background: '#fff',
    boxSizing: 'border-box',
    position: 'absolute',
    boxShadow: '0 0 0 2px #fff',
    bottom: '2px',
    right: 0

  },

  conversationCardContent: {
    height: '92px',
    padding: '12px 8px',
    borderBottom: '1px solid rgba(0,0,0,0.08)',
    overflow: 'hidden',
    flexGrow: 1
  },

  conversationCardTitleRow: {
    alignItems: 'center'
  },

  userName: {
    flex: 1,
    width: 0,
    display: '-webkit-box',
    whiteSpace: 'nowrap!important',
    overflow: 'hidden!important',
    textOverflow: 'ellipsis!important'
  },

  dataMessage: {
    display: 'inline-block',
    flex: '0 0 auto',
    marginRight: 'auto',
    overflow: 'hidden'
  },

  flexGrow2: {
    flexGrow: '1!important',
    paddingLeft: '8px'
  },

  conversationCardMessageSnippet: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: 'box',
    margin: '0 auto',
    maxHeight: '2rem',
    flex: 1,
    color: 'rgba(0, 0, 0, 0.6)',
    boxSizing: 'inherit',
    fontSize: 13
  },

  messagingDetail: {
    padding: 0,
    overflow: 'hidden',
    width: '100%',
    height: '100%'
  },

  scaffoldLayout: {
    maxWidth: 'initial',
    minWidth: 'initial',
    height: '100%',
    minHeight: 340,
    flexDirection: 'column',
    flex: '0 0 492px',
    position: 'relative!important',
    display: 'flex!important'
  },

  sharedTitleBarContainer: {
    height: 44,
    flexShrink: 0,
    minWidth: '45%'
  },

  titleBar: {
    height: 44,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'left',
    justifyContent: 'space-between',
    padding: '0 12px',
    position: 'relative',
    top: 0,
    zIndex: 'auto',
    backgroundColor: 'transparent',
    borderBottom: '1px solid #00000014'
  },

  threadLinkToProfile: {
    display: 'block',
    alignItems: 'center',
    textDecoration: 'none',
    color: '#000000e6',
    width: '100%'
  },

  entityLockup: {
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    minWidth: 0,
    fontWeight: 600,
    width: '100%',
    padding: '0 12px 0 0'
  },

  statusUserRight: {
    display: 'inline-block',
    border: '1px solid #057642',
    borderWidth: 2,
    width: 8,
    height: 8,
    borderRadius: '50%',
    background: '#fff',
    boxSizing: 'border-box',
    boxShadow: '0 0 0 2px #fff'
  },

  userDeviceStyle: {
    display: 'inline-block',
    fontSize: 12,
    marginLeft: 10,
    marginRight: 10
  },

  messageListContainer: {
    flexDirection: 'column'
  },

  messageList: {
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    justifyContent: 'flex-start',
    overflowY: 'auto'
  },

  messageListContent: {
    minHeight: 'auto',
    padding: '0 0 0',
    listStyle: 'none!important'
  },

  entityContainer: {
    display: 'block'
  },

  entityLockupImage: {
    position: 'relative',
    flexShrink: 0
  },

  presenceEntity: {
    display: 'flex',
    position: 'relative',
    width: 72,
    height: 72
  },

  presenceEntityIndicator: {
    border: '2px solid #057642',
    borderRadius: '50%',
    background: '#fff',
    flexShrink: 0,
    boxSizing: 'border-box',
    width: 16,
    height: 16,
    position: 'absolute',
    boxShadow: '0 0 0 2px #fff',
    bottom: -12,
    right: -12,
    borderWidth: 4
  },

  entityLockupContent: {
    alignSelf: 'center',
    display: 'block',
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 12
  },

  entityLockupTitle: {
    fontWeight: 600,
    fontSize: '1.6rem',
    lineHeight: 1.5,
    display: 'inline-flex'
  },

  profileLink: {
    fontSize: 16,
    color: '#000000e6',
    fontWeight: 600,
    textDecoration: 'none',
    backgroundColor: 'transparent',
    border: 0,
    '&:hover': {
      textDecoration: 'underline',
      color: '#000000e6'
    }
  },

  entityLockupSubtitle: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    margin: '0 auto',
    maxHeight: '4rem',
    fontSize: 12
  },

  messageListTimeHeading: {
    fontSize: 12,
    color: '#00000099',
    alignItems: 'center',
    clear: 'both',
    display: 'flex',
    letterSpacing: 1,
    margin: '8px 0',
    textTransform: 'uppercase',
    '&::before': {
      marginRight: 12,
      display: 'block',
      content: '""',
      flexGrow: 1,
      borderTop: '1px solid #00000099'
    },
    '&::after': {
      marginLeft: 12,
      display: 'block',
      content: '""',
      flexGrow: 1,
      borderTop: '1px solid #00000099'
    }
  },

  eventListItem: {
    display: 'flex',
    flexDirection: 'column',
    listStyle: 'none',
    boxSizing: 'border-box',
    position: 'relative',
    padding: 0,
    margin: 0,
    width: '100%'
  },

  eventListItemLink: {
    position: 'absolute',
    zIndex: 1
  },

  myAvatarMessage: {
    width: 40,
    height: 40
  },

  messageGroupMeta: {
    width: '80%',
    position: 'absolute',
    lineHeight: 1,
    marginBottom: 4,
    padding: '0 0 0 65px'
  },

  messageGroupName: {
    textDecoration: 'none',
    fontWeight: 600,
    color: '#000000e6',
    '&:hover': {
      textDecoration: 'underline',
      color: '#0a66c2'
    }
  },

  messageGroupTime: {
    color: '#00000099',
    position: 'absolute',
    top: 0
  },

  eventListItemMessageBubble: {
    display: 'inline-block',
    maxWidth: '100%',
    padding: 0,
    position: 'relative'
  },

  eventListItemBody: {
    fontSize: 13,
    paddingRight: 12,
    margin: '26px 0 4px 67px',
    color: '#000000e6',
    wordWrap: 'break-word',
    whiteSpace: 'pre-line'
  },

  msgForm: {
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '100%',
    position: 'static',
    width: '100%',
    boxShadow: '0px -3px 0px rgb(0 0 0 / 8%)'
  },

  msgFormActive: {
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '100%',
    position: 'static',
    width: '100%',
    boxShadow: '0px -3px 0px #057642'
  },

  formMsgContentContainer: {
    display: 'flex',
    Flex: '1 0 auto',
    flexDirection: 'column',
    maxHeight: '100%',
    overflow: 'hidden',
    position: 'relative',
    flexGrow: 1,
    boxSizing: 'inherit'
  },

  formMsgContentContainerScrollable: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    height: '100%',
    maxHeight: '120px',
    overflow: 'auto',
    position: 'relative!important'
  },

  addMsg: {
    display: 'flex',
    alignItems: 'flex-start',
    paddingLeft: '20px',
    paddingRight: '10px',
    width: '90%'
  },

  activeMsgButton: {
    display: 'flex',
    marginLeft: '80px',
    marginBottom: '10px'
  },

  msgButton: {

  }

}))