import styles from './styles'
import clsx from 'clsx'
import { Link } from 'react-router-dom'

function SharedLinkSquare ({ title, to = '#', icon, className = '', onClick }) {
  const classes = styles()

  return (
    <Link to={to} className={clsx(classes.link, className)}>
      <div onClick={onClick}>
        {title}
        {icon}
      </div>
    </Link>
  )
}

export default SharedLinkSquare
