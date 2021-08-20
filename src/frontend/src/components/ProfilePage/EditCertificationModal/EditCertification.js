import React from 'react'
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
import FormikSelect from '../../../shared/FormComponents/FormikSelect/FormikSelect'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
// import { updateCertificationAction } from '../../../redux/Certification/certificationAction'
import Typography from '@material-ui/core/Typography'
import styles from './styles'
import { DELETE_CERTIFICATION } from '../../../redux/Modal/modalTypes'

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

const CertificationSchema = Yup.object().shape({
  Name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name is a required field'),
  issOrg: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Issuing organization is a required field'),
  hasExpiryDate: Yup.boolean(),
  IssueDateMonth: Yup.string()
    .required('Issue date Month is required'),
  IssueDateYear: Yup.string()
    .required('Issue date Year is required'),
  ExpirationDateMonth: Yup.string()
    .when('doesNotExpire', {
      is: true,
      then: Yup.string().required('Expiration date Month is required')
    }),
  ExpirationDateYear: Yup.string()
    .when('doesNotExpire', {
      is: true,
      then: Yup.string().required('Expiration date Year is required')
    }),
  CredentialID: Yup.string(),
  CredentialUrl: Yup.string()
    .url()

})

const EditCertification = (props) => {
  const {
    Name = 'DAN-IT Education',
    issOrg = 'DAN-IT',
    IssueDateMonth = 'April',
    IssueDateYear = '2019',
    ExpirationDateMonth = 'April',
    ExpirationDateYear = '2049',
    CredentialID = '2987553783',
    CredentialUrl = 'https://https://dan-it.com.ua/'
  } = props
  const classes = styles()
  const dispatch = useDispatch()

  return (
    <div>
      <Typography variant="subtitle1" className={classes.title}>
        Edit certification
      </Typography>
      <Formik
        initialValues={{
          Name: `${Name}`,
          issOrg: '',
          hasExpiryDate: false,
          IssueDateMonth: '',
          IssueDateYear: '',
          ExpirationDateMonth: '',
          ExpirationDateYear: '',
          CredentialID: '',
          CredentialUrl: ''
        }}
        validationSchema={CertificationSchema}
        onSubmit={values => {
          console.log(values)
          // dispatch(updateCertificationAction({ values }))
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
                    default ={issOrg}
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
                      name="hasExpiryDate"
                    />
                    <span>This credential does not expire</span>
                  </label>
                </Grid>
                <Grid item xs={6}>
                  <FormikSelect className={classes.formPadding}
                    default ={IssueDateMonth}
                    size="small"
                    name="IssueDateMonth"
                    label="Month"
                    options={month}
                  />
                </Grid>
                <Grid item xs={6}>
                  <FormikSelect className={classes.formPadding}
                    default ={IssueDateYear}
                    size="small"
                    name="IssueDateYear"
                    label="Year"
                    options={year}
                  />
                </Grid>
                <Grid item xs={6}>
                  <FormikSelect className={classes.formPadding}
                    default ={ExpirationDateMonth}
                    disabled={values.hasExpiryDate === false}
                    size="small"
                    name="ExpirationDateMonth"
                    label="Month"
                    options={month}
                  />
                </Grid>
                <Grid item xs={6}>
                  <FormikSelect className={classes.formPadding}
                    default ={ExpirationDateYear}
                    disabled={values.hasExpiryDate === false}
                    size="small"
                    name="ExpirationDateYear"
                    label="Year"
                    options={year}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field className={classes.formPadding}
                    default ={CredentialID}
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
                    default ={CredentialUrl}
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
            <DialogActions classes='justifyContent'>
              <SharedButton onClick={() =>
                dispatch(toggleModalAction({modalType: DELETE_CERTIFICATION}))} variant="outlined" color="secondary" title="Delete license or certification"/>
              <SharedButton type="submit" title="Save"/>
            </DialogActions>
          </Form>
        )}
      </Formik>
    </div>
  )
}
export default EditCertification