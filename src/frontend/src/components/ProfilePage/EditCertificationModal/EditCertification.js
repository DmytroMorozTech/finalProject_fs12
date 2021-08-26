import React from 'react'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { withStyles } from '@material-ui/core/styles'
import { TextField } from 'formik-material-ui'
import SharedButton from '../../../shared/Button/SharedButton'
import toggleModalAction from '../../../redux/Modal/modalActions'
import { useDispatch } from 'react-redux'
import month from '../../../data/month.json'
import year from '../../../data/year.json'
import Grid from '@material-ui/core/Grid'
import FormikSelect from '../../../shared/FormComponents/FormikSelect'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import Typography from '@material-ui/core/Typography'
import styles from './styles'
import convertLocalDateToYearMonthObj from '../../../utils/convertLocalDateToYearMonthObj'
import { deleteCertificationAction, updateCertificationAction } from '../../../redux/Profile/profileActions'

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
    justifyContent: 'space-between',
    padding: theme.spacing(1)
  }
}))(MuiDialogActions)

const FORM_VALIDATION = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name is a required field'),
  issuingOrganization: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Issuing organization is a required field'),
  hasExpiryDate: Yup.boolean(),
  issueDateMonth: Yup.string()
    .required('Issue date Month is required'),
  issueDateYear: Yup.string()
    .required('Issue date Year is required'),
  expirationDateMonth: Yup.string()
    .when('hasExpiryDate', {
      is: true,
      then: Yup.string().required('Expiration date Month is required')
    }),
  expirationDateYear: Yup.string()
    .when('hasExpiryDate', {
      is: true,
      then: Yup.string().required('Expiration date Year is required')
    }),
  credentialID: Yup.string(),
  credentialUrl: Yup.string()
    .url()

})

const EditCertification = (props) => {
  const certification = props.certification
  const {hasExpiryDate} = certification
  const classes = styles()
  const dispatch = useDispatch()
  const start = convertLocalDateToYearMonthObj(certification.issueDate)
  const end = hasExpiryDate ? convertLocalDateToYearMonthObj(certification.expirationDate) : null

  const INITIAL_FORM_STATE = {
    name: certification.name,
    issuingOrganization: certification.issuingOrganization,
    hasExpiryDate: certification.hasExpiryDate,
    issueDateMonth: start.month,
    issueDateYear: start.year,
    expirationDateMonth: end ? end.month : '',
    expirationDateYear: end ? end.year : '',
    credentialId: certification.credentialId,
    credentialUrl: certification.credentialUrl
  }

  return (
    <div>
      <Typography variant="subtitle1" className={classes.title}>
        Edit certification
      </Typography>
      <Formik
        initialValues={{
          ...INITIAL_FORM_STATE
        }}
        validationSchema={FORM_VALIDATION}
        onSubmit={values => {
          console.log(values)
          dispatch(updateCertificationAction(values, certification.id))
          dispatch(toggleModalAction())
        }}
      >
        {({values}) => (
          <Form>
            <DialogContent dividers>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Field className={classes.formPadding}
                    name="name"
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
                    name="issuingOrganization"
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
                      name="hasExpiryDate"
                    />
                    <span>This credential has expiration date</span>
                  </label>
                </Grid>
                <Grid item xs={12}>
                  <span>Issue date</span>
                </Grid>
                <Grid item xs={6}>
                  <FormikSelect className={classes.formPadding}
                    size="small"
                    name="issueDateMonth"
                    label="Month"
                    options={month}
                  />
                </Grid>
                <Grid item xs={6}>
                  <FormikSelect className={classes.formPadding}
                    size="small"
                    name="issueDateYear"
                    label="Year"
                    options={year}
                  />
                </Grid>
                <Grid item xs={12}>
                  <span>Expiration date</span>
                </Grid>
                <Grid item xs={6}>
                  <FormikSelect className={classes.formPadding}
                    disabled={values.hasExpiryDate === false}
                    size="small"
                    name="expirationDateMonth"
                    label="Month"
                    options={month}
                  />
                </Grid>
                <Grid item xs={6}>
                  <FormikSelect className={classes.formPadding}
                    disabled={values.hasExpiryDate === false}
                    size="small"
                    name="expirationDateYear"
                    label="Year"
                    options={year}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field className={classes.formPadding}
                    name="credentialId"
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
                    name="credentialUrl"
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
            <DialogActions classes='justifyContent'>
              <SharedButton title="Delete certification" variant="outlined" color="secondary"
                onClick={() => {
                  dispatch(deleteCertificationAction(certification.id))
                  dispatch(toggleModalAction())
                }}/>

              <SharedButton type="submit" title="Save"/>
            </DialogActions>
          </Form>
        )}
      </Formik>
    </div>
  )
}
export default EditCertification