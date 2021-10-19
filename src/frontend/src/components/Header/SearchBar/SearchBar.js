import React, { useCallback, useState } from 'react'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded'
import styles from './styles'
import http from '../../../services/httpService'
import _ from 'lodash'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import Image from '../../../shared/Image/Image'
import Typography from '@material-ui/core/Typography'

function SearchBar (props) {
  const {handleCloseSearchBar, isHandleClose} = props
  const classes = styles()
  const [inputValue, setInputValue] = useState('')
  const [foundUsers, setFoundUsers] = useState(null)
  const [showDropDown, setShowDropDown] = useState(false)

  const onInputChangeHandler = (event) => {
    const {value} = event.target
    setInputValue(value)
    debounce(value)
  }

  const resetInputHandler = () => {
    setFoundUsers(null)
    setInputValue('')
  }

  const findUsersByName = (searchInput) => {
    if (searchInput.trim() === '') {
      return Promise.resolve()
    }
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
          if (usersList) {
            setFoundUsers(usersList)
            setShowDropDown(true)
          }
        })
    }, 1000),
    []
  )

  return (
    <div className={classes.searchBarContainer}>

      <div className={classes.headerSearch}>
        <SearchRoundedIcon fontSize="inherit"/>
        <input
          placeholder="Search for people"
          onChange={onInputChangeHandler}
          value={inputValue}
          onBlur={() => setTimeout(() => setShowDropDown(false), 200)}
          onFocus={onInputChangeHandler}
        />
      </div>

      {foundUsers && showDropDown && (
        <div
          id='searchDropDownWrapper'
          className={clsx(classes.searchDropDownWrapper, inputValue.length === 0 ? classes.hidden : '')}
          onClick={isHandleClose ? handleCloseSearchBar : null}
        >
          {foundUsers.map((user) =>
            (<Link key={user.id}
              to={`/profiles/${user.id}`}
              className={classes.link}
              onClick={resetInputHandler}>

              <div className={classes.dropDownItem}>
                <div className={classes.dropDownUser}>
                  <Image
                    imageUrl={user.avatarPublicId}
                    alt={'user avatar'}
                    type={'smallAvatar'}
                    className={classes.smallAvatar}
                  />
                  <Typography variant='h5'>{user.fullName}</Typography>
                </div>
                <hr className={classes.line}/>
              </div>

            </Link>
            ))}
        </div>
      )}
    </div>
  )
}
export default SearchBar
