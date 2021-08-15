import React from 'react'
// import {useDispatch} from 'react-redux'
import {Formik, Field, Form} from 'formik'
import * as Yup from 'yup'
import {makeStyles} from '@material-ui/core/styles'
import {TextField} from 'formik-material-ui'
// import toggleModalAction from '../../../redux/Modal/modalActions'
// import { createNewCertificationAction } from '../../../redux/Certification/certificationAction'
import SharedButton from '../../../shared/Button/SharedButton'

const useStyles = makeStyles((theme) => ({
  root: {
    width: 600,
    height: 600,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  form: {
    marginTop: 10
  },
  buttons_form: {
    marginTop: 15,
    display: 'flex',
    justifyContent: 'center'
  },
  button_distance_left: {
    marginRight: 30
  },
  button_distance_right: {
    marginLeft: 30
  }
}))

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required')
})

export const AddNewCertification = () => {
  const classes = useStyles()

  return (

    <div>
      <h1>Signup</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: ''
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          // same shape as initial values
          console.log(values)
        }}
      >
        {({ values }) => (
          <Form className={classes.root}>
            <Field className={classes.form}
              name="firstName"
              label="Name"
              required
              placeholder="Ex: Microsoft certified network associate security"
              type="text"
              variant="outlined"
              component={TextField}
              fullWidth
              size="small"
              InputLabelProps={{
                shrink: true
              }}/>
            <Field className={classes.form}
              name="lastName"
              label="lastName"
              required
              placeholder="Ex: Microsoft"
              type="text"
              variant="outlined"
              component={TextField}
              fullWidth
              size="small"
              InputLabelProps={{
                shrink: true
              }}/>
            <button type="submit">
              <SharedButton/>
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
// const AddNewCertification = () => {
//   const classes = useStyles()
//   // const dispatch = useDispatch()
//   const [certificationInputName, setCertificationInputName] = React.useState('')
//
//   const handleCertificationInputChange = e => {
//     let certificationInputVal = e.currentTarget.value
//     setCertificationInputName(certificationInputVal)
//   }
//
//   return (
//     <div className='checkout'>
//       <h4 align="center">{'Please enter customer data below'}</h4>
//       <Formik
//         initialValues={{
//           name: '',
//           Iss: '',
//           toggle: false,
//           checked: []
//         }}
//
//         validationSchema={Yup.object().shape({
//           name: Yup.string()
//             .min(2, 'Too Short!')
//             .max(50, 'Too Long!')
//             .required('Required'),
//           Iss: Yup.string()
//             .min(2, 'Too Short!')
//             .max(50, 'Too Long!')
//             .required('Required'),
//           cell: Yup.string()
//             .matches('^(\\+\\d{1,3}( )?)?\\d{11}$', 'Cell number begins +380')
//             .required('Cell number is required'),
//           age: Yup.number()
//             .moreThan(17, 'Your age should be not less than 18 years')
//             .required('Age is required')
//         })}
//
//         onSubmit={async (values) => {
//           // eslint-disable-next-line promise/param-names
//           await new Promise((r) => setTimeout(r, 500))
//           alert(JSON.stringify(values, null, 2))
//         }}
//         // onSubmit={(fields) => {
//         //   dispatch(createNewCertificationAction(fields))
//         //   dispatch(toggleModalAction())
//         // }}
//       >
//         render={({values, errors, status, touched}) => (
//           <Form className={classes.root}>
//             <div className={classes.form}>
//               <Field component={TextField}
//                 fullWidth
//                 size="small"
//                 value={certificationInputName}
//                 onChange={handleCertificationInputChange}
//                 label="Name"
//                 placeholder="Ex: Microsoft certified network associate security"
//                 name="name"
//                 type="text"
//                 variant="outlined"
//                 required
//                 InputLabelProps={{
//                   shrink: true
//                 }}
//               />
//             </div>
//             <div className={classes.form}>
//               <Field component={TextField}
//                 fullWidth
//                 size="small"
//                 value={certificationInputName}
//                 onChange={handleCertificationInputChange}
//                 label="Issuing organization"
//                 placeholder="Ex: Microsoft"
//                 name="Iss"
//                 type="text"
//                 variant="outlined"
//                 required
//                 InputLabelProps={{
//                   shrink: true
//                 }}
//               />
//             </div>
//             <div>
//               <label>
//                 <Field type="checkbox" name="toggle" />
//                 {`${values.toggle}`}
//               </label>
//             </div>
//             <div>
//               <div className={classes.dropDownBtn}>
//                 <SharedButton type="submit" title="Save">Save</SharedButton>
//               </div>
//             </div>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   )
// }
//
export default AddNewCertification