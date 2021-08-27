import React from 'react'
import {withStyles} from '@material-ui/core/styles'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import styles from './styles'
import Typography from '@material-ui/core/Typography'
import {Field, Form, Formik} from 'formik'
import * as Yup from 'yup'
import FormikTextField from '../../../shared/FormComponents/FormikTextField'
import FormikSelect from '../../../shared/FormComponents/FormikSelect'
import Grid from '@material-ui/core/Grid'
import month from '../../../data/month.json'
import year from '../../../data/year.json'
import SharedButton from '../../../shared/Button/SharedButton'
import {useDispatch} from 'react-redux'
import toggleModalAction from '../../../redux/Modal/modalActions'
import {createNewWorkPlaceAction} from '../../../redux/Profile/profileActions'
import convertYearMonthToLocalDate from '../../../utils/convertYearMonthToLocalDate'

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
    organizationId: '',
    isCurrentlyEmployed: false,
    startMonth: '',
    startYear: '',
    endMonth: '',
    endYear: '',
    responsibilities: ''
  }
  const FORM_VALIDATION = Yup.object().shape({
    position: Yup.string()
      .required('Required'),
    organizationId: Yup.string()
      .required('Required'),
    isCurrentlyEmployed: Yup.boolean(),
    startMonth: Yup.string()
      .required('Required'),
    startYear: Yup.string()
      .required('Required'),
    endMonth: Yup.string()
      .when('isCurrentlyEmployed', {
        is: false,
        then: Yup.string()
          .required('Required')
          .test(
            'chronological_order',
            'You should follow chronological order',
            function () {
              const {startMonth, startYear, endMonth, endYear} = this.parent
              if (!endMonth || !endYear) return true
              const startDateStr = convertYearMonthToLocalDate(startYear, startMonth)
              const endDateStr = convertYearMonthToLocalDate(endYear, endMonth)
              const startDateMillis = Date.parse(startDateStr)
              const endDateMillis = Date.parse(endDateStr)
              return (endDateMillis - startDateMillis) > 0
            })
      }),
    endYear: Yup.string()
      .when('isCurrentlyEmployed', {
        is: false,
        then: Yup.string()
          .required('Required')
          .test(
            'chronological_order',
            'You should follow chronological order',
            function () {
              const {startMonth, startYear, endMonth, endYear} = this.parent
              if (!endMonth || !endYear) return true
              const startDateStr = convertYearMonthToLocalDate(startYear, startMonth)
              const endDateStr = convertYearMonthToLocalDate(endYear, endMonth)
              const startDateMillis = Date.parse(startDateStr)
              const endDateMillis = Date.parse(endDateStr)
              return (endDateMillis - startDateMillis) > 0
            })
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
            dispatch(createNewWorkPlaceAction(values))
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
                      name="organizationId"
                      label="Organization ID"
                      // later on a drop-down list with organizations should be implemented
                      size="small"
                      InputLabelProps={{
                        shrink: true
                      }}
                      placeholder="Ex: Microsoft"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <label>
                      <Field
                        type="checkbox"
                        name="isCurrentlyEmployed"
                      />
                      <span>I am currently working in this role</span>
                    </label>
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
                      disabled={values.isCurrentlyEmployed === true}
                      name="endMonth"
                      label="Month"
                      size="small"
                      options={month}
                      helperText="End date"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormikSelect
                      disabled={values.isCurrentlyEmployed === true}
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
