import React, {useCallback, useState} from 'react'
import {useField, useFormikContext} from 'formik'
import {TextField} from '@material-ui/core'
import _ from 'lodash'
import http from '../../../services/httpService'
import styles from './styles'

const FormikSearchField = ({
  name,
  ...otherProps
}) => {
  const [field, meta, helpers] = useField(name)
  // const {setFieldValue} = useFormikContext()

  const [inputVal, setInputVal] = useState('')
  const [foundOrganizations, setFoundOrganizations] = useState(null)
  const [debouncedState, setDebouncedState] = useState('')
  const [chosenOrganization, setChosenOrganization] = useState('')
  const classes = styles()

  const findOrganizationsByName = (name) => {
    return http
      .get(`/api/organizations/${name}`)
      .then((res) => res.data)
  }

  const handleChange = (event) => {
    const {value} = event.target
    setInputVal(value)
    debounce(value)
  }

  const debounce = useCallback(
    _.debounce((_searchVal) => {
      // setFoundOrganizations(null)
      setDebouncedState(_searchVal)
      console.log(`Debounce. ${_searchVal}`)
      // send the server request here
      findOrganizationsByName(_searchVal)
        .then((organizationsList) => {
          setFoundOrganizations(organizationsList)
          console.log('FOUND ORGANIZATIONS')
          console.log(organizationsList)
          // console.log(foundOrganizations)
        })
    }, 1000),
    []
  )

  const configTextField = {
    ...field,
    helpers,
    ...otherProps,
    fullWidth: true,
    variant: 'outlined',
    onChange: handleChange,
    value: inputVal,
    autocomplete: 'off'
  }
  if (meta && meta.touched && meta.error) {
    configTextField.error = true
    configTextField.helperText = meta.error
  }
  return (
    <div className={classes.searchFieldWrapper}>
      <TextField {...configTextField}/>
      {foundOrganizations &&
      (
        <div className={classes.searchDropDownWrapper}>
          {foundOrganizations.map(
            (org, index) => (<button
              type='button'
              key={index}
              className={classes.dropDownItem}
              onClick={(ev) => {
                setChosenOrganization(org)
                setInputVal(org.name)
                console.log('Chosen organization:')
                console.log(org)
                setFoundOrganizations(null)
                // ev.preventDefault()
                // ev.stopPropagation()
                // ev.nativeEvent.stopImmediatePropagation()
              }}
            >
              {org.name}
            </button>))}
        </div>
      )
      }
    </div>
  )
}
export default FormikSearchField