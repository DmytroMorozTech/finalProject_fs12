import React, {useCallback} from 'react'
import {useField, useFormikContext} from 'formik'
import {TextField} from '@material-ui/core'
import _ from 'lodash'

const FormikSearchField = ({
  name,
  ...otherProps
}) => {
  const [field, meta, helpers] = useField(name)
  const {setFieldValue} = useFormikContext()

  const handleChange = (event) => {
    const {value} = event.target
    setFieldValue(name, value)
    // setState(event.target.value)
    // debounce(event.target.value)
  }
  const configTextField = {
    ...field,
    helpers,
    ...otherProps,
    fullWidth: true,
    variant: 'outlined',
    onChange: handleChange
  }
  if (meta && meta.touched && meta.error) {
    configTextField.error = true
    configTextField.helperText = meta.error
  }
  return (
    <TextField {...configTextField}/>
  )
}
export default FormikSearchField
// const FormikSearchField = ({
//   name,
//   options,
//   ...otherProps
// }) => {
//   const {setFieldValue} = useFormikContext()
//   const [field, meta, helpers] = useField(name)
//   const handleOnChange = event => {
//     const {value} = event.target
//     setFieldValue(name, value)
//   }
//   const configSelect = {
//     ...field,
//     ...otherProps,
//     select: true,
//     variant: 'outlined',
//     fullWidth: true,
//     onChange: handleOnChange
//   }
//   if (meta && meta.touched && meta.error) {
//     configSelect.error = true
//     configSelect.helperText = meta.error
//   }
//   return (
//     <TextField {...configSelect}>
//       {Object.keys(options).map((item, pos) => {
//         return (
//           <MenuItem key={pos} value={item}>
//             {options[item]}
//           </MenuItem>
//         )
//       })}
//     </TextField>
//   )
// }
// export default FormikSearchField