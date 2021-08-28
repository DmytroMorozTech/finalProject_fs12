import styles from './styles'
import clsx from 'clsx'
import { Link } from 'react-router-dom'

function SharedLinkSquare ({ title, to = '#', icon, className = '' }) {
  const classes = styles()

  return (
    <Link to={to} className={clsx(classes.link, className)}>
      {title}
      {icon}
    </Link>
  )
}

export default SharedLinkSquare
