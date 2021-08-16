import React from 'react'
// import {useDispatch} from 'react-redux'
import {Formik, Field, Form} from 'formik'
import * as Yup from 'yup'
import {makeStyles} from '@material-ui/core/styles'
import {TextField} from 'formik-material-ui'
// import toggleModalAction from '../../../redux/Modal/modalActions'
// import { createNewCertificationAction } from '../../../redux/Certification/certificationAction'
import SharedButton from '../../../shared/Button/SharedButton'
import toggleModalAction from '../../../redux/Modal/modalActions'
import { useDispatch } from 'react-redux'
import { createNewPostAction } from '../../../redux/Post/postActions'

const useStyles = makeStyles((theme) => ({
  root: {
    width: 600,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },

  modal_header: {
    borderBottom: '1px solid rgba(0,0,0,.15)',
    paddingLeft: 30
  },

  form: {
    marginTop: 15,
    marginBottom: 15,
    width: '90%',
    margin: 'auto'
  },

  btn: {
    borderTop: '1px solid rgba(0,0,0,.15)',
    paddingRight: 25,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'right'
  },

  container: {
    display: 'flex',
    flexWrap: 'wrap'
  }
}))

const SignupSchema = Yup.object().shape({
  Name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name is a required field'),
  issOrg: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Issuing organization is a required field'),
  IssueDate: Yup.string()
    .required('Issue date is required'),
  ExpirationDate: Yup.string()
    .required('Expiration date is required'),
  CredentialID: Yup.string(),
  CredentialUrl: Yup.string()

})

export const AddNewCertification = () => {
  const classes = useStyles()
  const dispatch = useDispatch()

  return (
    <div>
      <div className={classes.modal_header}>
        <h2>Add license or certification</h2>
      </div>
      <Formik
        initialValues={{
          Name: '',
          issOrg: '',
          toggle: true,
          IssueDate: '',
          ExpirationDate: '',
          CredentialID: '',
          CredentialUrl: ''
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          // same shape as initial values
          console.log(values)
          dispatch(createNewPostAction({ text: values }))
          dispatch(toggleModalAction())
        }}

      >
        {({values}) => (
          <Form className={classes.root}>
            <Field className={classes.form}
              name="Name"
              label="Name"
              required
              placeholder="Ex: Microsoft certified network associate security"
              type="text"
              variant="outlined"
              component={TextField}
              size="small"
              InputLabelProps={{
                shrink: true
              }}/>
            <Field className={classes.form}
              name="issOrg"
              label="Issuing organization"
              required
              placeholder="Ex: Microsoft"
              type="text"
              variant="outlined"
              component={TextField}
              size="small"
              InputLabelProps={{
                shrink: true
              }}/>
            <div className={classes.form}>
              <label>
                <Field
                  type="checkbox"
                  name="toggle" />
                <span>This credential does not expire</span>
              </label>
            </div>
            <Field className={classes.form}
              variant="outlined"
              name="IssueDate"
              id="date"
              label="Issue Date"
              type="date"
              defaultValue="2017-05-24"
              InputLabelProps={{
                shrink: true
              }}
              component={TextField}
              size="small"
            />
            <Field className={classes.form}
              variant="outlined"
              disabled={values.toggle === true}
              name="ExpirationDate"
              id="date"
              label="Expiration Date"
              type="date"
              defaultValue="2017-05-24"
              InputLabelProps={{
                shrink: true
              }}
              component={TextField}
              size="small"
            />
            <Field className={classes.form}
              name="CredentialID"
              label="Credential ID"
              type="text"
              variant="outlined"
              component={TextField}
              size="small"
              InputLabelProps={{
                shrink: true
              }}/>
            <Field className={classes.form}
              name="CredentialUrl"
              label="Credential URL"
              type="text"
              variant="outlined"
              component={TextField}
              size="small"
              InputLabelProps={{
                shrink: true
              }}/>
            <div className={classes.btn}>
              <SharedButton title="Save" type="submit"/>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}
export default AddNewCertification