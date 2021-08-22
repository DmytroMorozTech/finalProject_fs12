import React from 'react'
import {withStyles} from '@material-ui/core/styles'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import styles from './styles'
import Typography from '@material-ui/core/Typography'
import {Form, Formik} from 'formik'
import * as Yup from 'yup'
import FormikTextField from '../../../shared/FormComponents/FormikTextField'
import FormikSelect from '../../../shared/FormComponents/FormikSelect'
import Grid from '@material-ui/core/Grid'
import month from '../../../data/month.json'
import year from '../../../data/year.json'
import SharedButton from '../../../shared/Button/SharedButton'
import {useDispatch} from 'react-redux'
import toggleModalAction from '../../../redux/Modal/modalActions'
import {createNewExperienceAction} from '../../../redux/Profile/profileActions'
import FormikCheckBox from '../../../shared/FormComponents/FormikCheckBox'

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(3)
  }
}))(MuiDialogContent)

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    display: 'flex',
    justifyContent: 'flex-end',
    padding: theme.spacing(1)
  }
}))(MuiDialogActions)

const AddExperienceModal = () => {
  const dispatch = useDispatch()

  const classes = styles()
  const INITIAL_FORM_STATE = {
    position: '',
    organization: '',
    location: '',
    hasCurrentlyWorking: false,
    startMonth: '',
    startYear: '',
    endMonth: '',
    endYear: '',
    responsibilities: ''
  }
  const FORM_VALIDATION = Yup.object().shape({
    position: Yup.string()
      .required('Required'),
    organization: Yup.string()
      .required('Required'),
    location: Yup.string()
      .required('Required'),
    hasCurrentlyWorking: Yup.boolean(),
    startMonth: Yup.string()
      .required('Required'),
    startYear: Yup.number()
      .required('Required'),
    endMonth: Yup.string()
      .when('doesNotExpire', {
        is: true,
        then: Yup.string().required('Required')
      }),
    endYear: Yup.number()
      .when('doesNotExpire', {
        is: true,
        then: Yup.string().required('Required')
      }),
    responsibilities: Yup.string()
      .required('Required')
  })
  return (
    <div>
      <Typography variant="subtitle1" className={classes.title}>
                Add experience
      </Typography>

      <Grid container>
        <Formik
          initialValues={{
            ...INITIAL_FORM_STATE
          }}
          validationSchema={FORM_VALIDATION}
          onSubmit={values => {
            console.log(values)
            dispatch(createNewExperienceAction(values))
            dispatch(toggleModalAction())
          }}
        >
          {({values}) => (
            <Form>
              <DialogContent dividers>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <FormikTextField
                      name="position"
                      label="Position"
                      size="small"
                      InputLabelProps={{
                        shrink: true
                      }}
                      placeholder="Ex: Sales Manager"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormikTextField
                      name="organization"
                      label="Company"
                      size="small"
                      InputLabelProps={{
                        shrink: true
                      }}
                      placeholder="Ex: Microsoft"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormikTextField
                      name="location"
                      label="Location"
                      size="small"
                      InputLabelProps={{
                        shrink: true
                      }}
                      placeholder="Ex: Kyiv, Ukraine"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormikCheckBox
                      name="hasCurrentlyWorking"
                      label="I am currently working in this role"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormikSelect
                      name="startMonth"
                      label="Month"
                      size="small"
                      options={month}
                      helperText="Start date"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormikSelect
                      name="startYear"
                      label="Year"
                      size="small"
                      options={year}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormikSelect
                      disabled={values.hasCurrentlyWorking === true}
                      name="endMonth"
                      label="Month"
                      size="small"
                      options={month}
                      helperText="End date"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormikSelect
                      disabled={values.hasCurrentlyWorking === true}
                      name="endYear"
                      label="Year"
                      size="small"
                      options={year}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormikTextField
                      name="responsibilities"
                      label="Responsibilities"
                      size="small"
                      InputLabelProps={{
                        shrink: true
                      }}
                      multiline={true}
                      row={4}
                    />
                  </Grid>
                </Grid>
              </DialogContent>
              <DialogActions>
                <SharedButton title="Save" type="submit"/>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </Grid>
    </div>
  )
}
export default AddExperienceModal
