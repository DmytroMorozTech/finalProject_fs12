import React, {useCallback, useState} from 'react'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded'
import styles from './styles'
import {Hidden} from '@material-ui/core'
import http from '../../../services/httpService'
import _ from 'lodash'
import clsx from 'clsx'
import {Link} from 'react-router-dom'

function SearchBar () {
  const classes = styles()
  const [inputValue, setInputValue] = useState('')
  const [foundUsers, setFoundUsers] = useState(null)
  const [showDropDown, setShowDropDown] = useState(false)

  const handleChange = (event) => {
    const {value} = event.target
    setInputValue(value)
    debounce(value)
  }

  const onLinkClickHandler = () => {
    setFoundUsers(null)
    setInputValue('')
  }

  const findUsersByName = (searchInput) => {
    return http
      .get(`/api/users/find_by_name/${searchInput}`)
      .then((res) => res.data)
  }

  // eslint-disable-next-line
  const debounce = useCallback(
    _.debounce((_searchVal) => {
      // send the server request here
      findUsersByName(_searchVal)
        .then((usersList) => {
          setFoundUsers(usersList)
          setShowDropDown(true)
        })
    }, 1000),
    []

  )
  return (
    <div className={classes.searchBarContainer}>

      <Hidden smDown>
        <div className={classes.headerSearch}>
          <SearchRoundedIcon fontSize="inherit"/>
          <input
            placeholder="Search for people"
            onChange={handleChange}
            value={inputValue}
            onBlur={() => setTimeout(() => setShowDropDown(false), 200)}
          />
        </div>
      </Hidden>

      {foundUsers && showDropDown &&
      (
        <div className={clsx(classes.searchDropDownWrapper, inputValue.length === 0 ? classes.hidden : '')} >
          {foundUsers.map((user, index) =>
            (<Link
              to={`/profiles/${user.id}`}
              className={classes.link}
              onClick={onLinkClickHandler}
            >
              <div
                key={index}
                className={classes.dropDownItem}
              >
                <div className={classes.searchIcon}>
                  <SearchRoundedIcon fontSize="medium"/>
                </div>

                {user.fullName}
              </div>
            </Link>
            ))}
        </div>
      )
      }
    </div>
  )
}
export default SearchBar