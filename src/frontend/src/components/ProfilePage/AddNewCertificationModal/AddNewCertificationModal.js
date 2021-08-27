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
import { createNewCertificationAction } from '../../../redux/Profile/profileActions'
import Typography from '@material-ui/core/Typography'
import styles from './styles'
import convertYearMonthToLocalDate from '../../../utils/convertYearMonthToLocalDate'

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(3)
  },
  children: {
    paddingBottom: 25
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
      then: Yup.string()
        .required('Expiration month is required')
        .test(
          'chronological_order',
          'You should follow chronological order',
          function () {
            const {issueDateMonth, issueDateYear, expirationDateMonth, expirationDateYear} = this.parent
            if (!expirationDateMonth || !expirationDateYear) return true
            const startDateStr = convertYearMonthToLocalDate(issueDateYear, issueDateMonth)
            const endDateStr = convertYearMonthToLocalDate(expirationDateYear, expirationDateMonth)
            const startDateMillis = Date.parse(startDateStr)
            const endDateMillis = Date.parse(endDateStr)
            return (endDateMillis - startDateMillis) > 0
          })
    }),
  expirationDateYear: Yup.string()
    .when('hasExpiryDate', {
      is: true,
      then: Yup.string()
        .required('Expiration year is required')
        .test(
          'chronological_order',
          'You should follow chronological order',
          function () {
            const {issueDateMonth, issueDateYear, expirationDateMonth, expirationDateYear} = this.parent
            console.log(expirationDateYear)
            if (!expirationDateMonth || !expirationDateYear) return true
            const startDateStr = convertYearMonthToLocalDate(issueDateYear, issueDateMonth)
            const endDateStr = convertYearMonthToLocalDate(expirationDateYear, expirationDateMonth)
            const startDateMillis = Date.parse(startDateStr)
            const endDateMillis = Date.parse(endDateStr)
            return (endDateMillis - startDateMillis) > 0
          })
    }),
  credentialId: Yup.string(),
  credentialUrl: Yup.string().url()
})

export const AddNewCertificationModal = () => {
  const classes = styles()
  const dispatch = useDispatch()

  return (
    <div>
      <Typography variant="subtitle1" className={classes.title}>
        Add license or certification
      </Typography>
      <Formik
        initialValues={{
          name: '',
          issuingOrganization: '',
          hasExpiryDate: false,
          issueDateMonth: '',
          issueDateYear: '',
          expirationDateMonth: '',
          expirationDateYear: '',
          credentialId: '',
          credentialUrl: ''
        }}
        validationSchema={CertificationSchema}
        onSubmit={values => {
          dispatch(createNewCertificationAction(values))
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
                    <span>Has expiration date</span>
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
            <DialogActions>
              <SharedButton type="submit" title="Save"/>
            </DialogActions>
          </Form>
        )}
      </Formik>
    </div>
  )
}
export default AddNewCertificationModal