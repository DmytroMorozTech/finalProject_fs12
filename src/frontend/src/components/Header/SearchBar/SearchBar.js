import React, {useCallback, useState} from 'react'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded'
import styles from './styles'
import {Hidden} from '@material-ui/core'
import http from '../../../services/httpService'
import _ from 'lodash'
import clsx from 'clsx'

function SearchBar () {
  const classes = styles()
  const [inputValue, setInputValue] = useState('')
  const [foundOrganizations, setFoundOrganizations] = useState(null)
  const [foundUsers, setFoundUsers] = useState(null)

  const handleChange = (event) => {
    const {value} = event.target
    console.log(value)
    setInputValue(value)
    debounce(value)
  }
  const findUsersByLastName = (lastName) => {
    return http
      .get(`/api/users/${lastName}`)
      .then((res) => res.data)
  }
  const findOrganizationsByName = (name) => {
    return http
      .get(`/api/organizations/${name}`)
      .then((res) => res.data)
  }
  const debounce = useCallback(
    _.debounce((_searchVal) => {
      // send the server request here
      findOrganizationsByName(_searchVal)
        .then((organizationsList) => {
          setFoundOrganizations(organizationsList)
        })
    }, 1000),
    []
    // _.debounce((_searchVal) => {
    // // send the server request here
    //   findUsersByLastName(_searchVal)
    //     .then((usersList) => {
    //       setFoundUsers(usersList)
    //     })
    // }, 1000),
    // []
  )
  return (
    <div className={classes.searchBarContainer}>

      <Hidden smDown>
        <div className={classes.headerSearch}>
          <SearchRoundedIcon fontSize="inherit"/>
          <input placeholder="Search for people, companies..." onChange={handleChange} />
        </div>
      </Hidden>
      {/* {foundUsers && */}
      {foundOrganizations &&
      (
        <div className={clsx(classes.searchDropDownWrapper, inputValue.length === 0 ? classes.hidden : '')} >
          {/* {foundUsers.map( */}
          {foundOrganizations.map(
            (org, index) => (<div
              // type='button'
              key={index}
              className={classes.dropDownItem}
              // onClick={() => {
              //   setInputValue(org.name)
              //   setFoundOrganizations(null)
              // }}
            >
              <div className={classes.searchIcon}>
                <SearchRoundedIcon fontSize="medium"/>
              </div>
              {/* {org.lastName} */}

              {org.name}
            </div>))}
        </div>
      )
      }
    </div>
  )
}
export default SearchBar