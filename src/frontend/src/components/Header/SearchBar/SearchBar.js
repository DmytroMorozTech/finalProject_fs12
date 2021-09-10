import React, {useCallback, useState} from 'react'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded'
import styles from './styles'
import {Hidden} from '@material-ui/core'
import http from '../../../services/httpService'
import _ from 'lodash'
import clsx from 'clsx'

function SearchBar ({placeholder, data}) {
  const classes = styles()
  const [inputValue, setInputValue] = useState('')
  const [foundOrganizations, setFoundOrganizations] = useState(null)

  const handleChange = (event) => {
    const {value} = event.target
    console.log(value)
    setInputValue(value)
    debounce(value)
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
  )
  return (
    <div>
      <Hidden smDown>
        <div className={classes.headerSearch}>
          <SearchRoundedIcon fontSize="inherit"/>
          <input placeholder={placeholder} onChange={handleChange} />
        </div>
      </Hidden>

      {foundOrganizations &&
      (
        <div className={clsx(classes.searchDropDownWrapper, inputValue.length === 0 ? classes.hidden : '')}>
          {foundOrganizations.map(
            (org, index) => (<button
              type='button'
              key={index}
              className={classes.dropDownItem}
              // onClick={() => {
              //   setInputValue(org.name)
              //   setFoundOrganizations(null)
              // }}
            >
              {org.name}
            </button>))}
        </div>
      )
      }
    </div>
  )
}
export default SearchBar