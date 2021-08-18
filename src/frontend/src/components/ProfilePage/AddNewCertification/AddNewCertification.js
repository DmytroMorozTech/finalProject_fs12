import React, { useState } from 'react'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import { withStyles } from '@material-ui/core/styles'
import {TextField} from 'formik-material-ui'
import SharedButton from '../../../shared/Button/SharedButton'
import toggleModalAction from '../../../redux/Modal/modalActions'
import { useDispatch } from 'react-redux'
import month from '../../../data/month.json'
import year from '../../../data/year.json'
import Grid from '@material-ui/core/Grid'
import Select from '../../../shared/FormComponents/Select/Select'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import { createNewCertificationAction } from '../../../redux/Certification/certificationAction'
import Typography from '@material-ui/core/Typography'
import styles from './styles'

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(3)
  }
}))(MuiDialogContent)

const DialogActions = withStyles((theme) => ({
  root: {
    width: '100%',
    margin: 0,
    display: 'flex',
    justifyContent: 'flex-end',
    padding: theme.spacing(1)
  }
}))(MuiDialogActions)

const CertificationSchema = Yup.object().shape({
  Name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name is a required field'),
  issOrg: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Issuing organization is a required field'),
  IssueDateMonth: Yup.string()
    .required('Issue date Month is required'),
  IssueDateYear: Yup.string()
    .required('Issue date Year is required'),
  ExpirationDateMonth: Yup.string()
    .required('Expiration date Month is required'),
  ExpirationDateYear: Yup.string()
    .required('Expiration date Year is required'),
  CredentialID: Yup.string(),
  CredentialUrl: Yup.string()

})

export const AddNewCertification = () => {
  const [doesNotExpire1, setDoesNotExpire1] = useState(true)
  const classes = styles()
  const dispatch = useDispatch()

  return (
    <div>
      <Typography variant="subtitle1" className={classes.title}>
        Add certification
      </Typography>
      <Formik
        initialValues={{
          Name: '',
          issOrg: '',
          doesNotExpire: true,
          IssueDateMonth: '',
          IssueDateYear: '',
          ExpirationDateMonth: '',
          ExpirationDateYear: '',
          CredentialID: '',
          CredentialUrl: ''
        }}
        validationSchema={CertificationSchema}
        onSubmit={values => {
          // same shape as initial values
          console.log(values)
          dispatch(createNewCertificationAction({ values }))
          dispatch(toggleModalAction())
        }}
      >
        {({values}) => (
          <Form>
            <DialogContent dividers>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Field className={classes.formPadding}
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
                </Grid>
                <Grid item xs={12}>
                  <Field className={classes.formPadding}
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
                </Grid>
                <Grid item xs={12}>
                  <label>
                    <Field
                      type="checkbox"
                      name="doesNotExpire"
                      onClick={() => {
                        setDoesNotExpire1(!doesNotExpire1)
                        console.log(`doesNotExpire: ${doesNotExpire1}`)
                      }}
                    />
                    <span>This credential does not expire</span>
                  </label>
                </Grid>
                <Grid item xs={6}>
                  <Select
                    size="small"
                    name="IssueDateMonth"
                    label="Month"
                    options={month}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Select
                    size="small"
                    name="IssueDateYear"
                    label="Year"
                    options={year}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Select
                    disabled={values.doesNotExpire === true}
                    size="small"
                    name="ExpirationDateMonth"
                    label="Month"
                    options={month}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Select
                    disabled={values.doesNotExpire === true}
                    size="small"
                    name="ExpirationDateYear"
                    label="Year"
                    options={year}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field className={classes.formPadding}
                    name="CredentialID"
                    label="Credential ID"
                    type="text"
                    variant="outlined"
                    component={TextField}
                    size="small"
                    InputLabelProps={{
                      shrink: true
                    }}/>
                </Grid>
                <Grid item xs={12}>
                  <Field className={classes.formPadding}
                    name="CredentialUrl"
                    label="Credential URL"
                    type="text"
                    variant="outlined"
                    component={TextField}
                    size="small"
                    InputLabelProps={{
                      shrink: true
                    }}/>
                </Grid>

              </Grid>
            </DialogContent>
            <DialogActions>
              <SharedButton type="submit" title="Save"/>
            </DialogActions>
          </Form>
        )}
      </Formik>
    </div>
  )
}
export default AddNewCertification