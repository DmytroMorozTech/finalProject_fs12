import React, {useCallback, useState} from 'react'
import {useField} from 'formik'
import {TextField} from '@material-ui/core'
import _ from 'lodash'
import http from '../../../services/httpService'
import styles from './styles'
import clsx from 'clsx'

const FormikSearchField = ({
  name,
  ...otherProps
}) => {
  const [field, meta, helpers] = useField(name)
  const {setValue} = helpers

  const {setOrgHandler} = otherProps

  const [inputVal, setInputVal] = useState('')
  const [foundOrganizations, setFoundOrganizations] = useState(null)
  const classes = styles()

  const findOrganizationsByName = (name) => {
    return http
      .get(`/api/organizations/${name}`)
      .then((res) => res.data)
  }

  const handleChange = (event) => {
    const {value} = event.target
    setInputVal(value)
    setOrgHandler(null)
    if (value.length === 0) {
      setFoundOrganizations(null)
      return
    }
    debounce(value)
  }

  // eslint-disable-next-line
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
        <div className={clsx(classes.searchDropDownWrapper, inputVal.length === 0 ? classes.hidden : '')}>
          {foundOrganizations.map(
            (org, index) => (<button
              type='button'
              key={index}
              className={classes.dropDownItem}
              onClick={() => {
                setOrgHandler(org)
                setValue(org.name)
                setInputVal(org.name)
                setFoundOrganizations(null)
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