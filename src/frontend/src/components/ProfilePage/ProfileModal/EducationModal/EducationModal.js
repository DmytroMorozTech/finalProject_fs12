import React from 'react'
import {withStyles} from '@material-ui/core/styles'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import styles from '../styles'
import Typography from '@material-ui/core/Typography'
import {Form, Formik} from 'formik'
import * as Yup from 'yup'
import FormikTextField from '../../../../shared/FormComponents/FormikTextField'
import FormikSelect from '../../../../shared/FormComponents/FormikSelect'
import Grid from '@material-ui/core/Grid'
import month from '../../../../data/month.json'
import year from '../../../../data/year.json'
import SharedButton from '../../../../shared/SharedButton/SharedButton'
import convertLocalDateToYearMonthObj from '../../../../utils/convertLocalDateToYearMonthObj'
import {
  updateEducationAction,
  deleteEducationAction,
  createNewEducationAction
} from '../../../../redux/Profile/profileActions'
import toggleModalAction from '../../../../redux/Modal/modalActions'
import { useDispatch } from 'react-redux'
import convertYearMonthToLocalDate from '../../../../utils/convertYearMonthToLocalDate'

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(3)
  }
}))(MuiDialogContent)

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    padding: theme.spacing(1)
  }
}))(MuiDialogActions)

const EducationModal = (props) => {
  const dispatch = useDispatch()

  const education = props.education
  let start, end

  if (education) {
    start = convertLocalDateToYearMonthObj(education.dateStart)
    end = convertLocalDateToYearMonthObj(education.dateFinish)
  }

  const classes = styles()
  const INITIAL_FORM_STATE = {
    school: education?.school || '',
    degreeReceived: education?.degreeReceived || '',
    fieldOfStudy: education?.fieldOfStudy || '',
    startMonth: start?.month || '',
    startYear: start?.year || '',
    endMonth: end?.month || '',
    endYear: end?.year || '',
    activities: education?.activities || '',
    description: education?.description || ''
  }
  const FORM_VALIDATION = Yup.object().shape({
    school: Yup.string()
      .required('Required'),
    degreeReceived: Yup.string()
      .required('Required'),
    fieldOfStudy: Yup.string()
      .required('Required'),
    startMonth: Yup.string()
      .required('Required'),
    startYear: Yup.number()
      .required('Required'),
    endMonth: Yup.string()
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
        }),
    endYear: Yup.number()
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
        }),
    activities: Yup.string()
      .required('Required'),
    description: Yup.string()
      .required('Required')
  })
  return (
    <div>
      <Typography variant="subtitle1" className={classes.title}>
        {education
          ? 'Edit education'
          : 'Add education'}
      </Typography>

      <Grid container>
        <Formik
          initialValues={{
            ...INITIAL_FORM_STATE
          }}
          validationSchema={FORM_VALIDATION}
          onSubmit={values => {
            if (education) {
              dispatch(updateEducationAction(values, education.id))
              dispatch(toggleModalAction())
            } else {
              dispatch(createNewEducationAction(values))
              dispatch(toggleModalAction())
            }
          }}
        >
          <Form>
            <DialogContent dividers>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <FormikTextField
                    name="school"
                    label="School"
                    size="small"
                    InputLabelProps={{
                      shrink: true
                    }}
                    placeholder="Ex: Boston University"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormikTextField
                    name="degreeReceived"
                    label="Degree"
                    size="small"
                    InputLabelProps={{
                      shrink: true
                    }}
                    placeholder="Ex: Bachelor`s"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormikTextField
                    name="fieldOfStudy"
                    label="Field of study"
                    size="small"
                    InputLabelProps={{
                      shrink: true
                    }}
                    placeholder="Ex: Business"
                  />
                </Grid>
                <Grid container item spacing={2}>
                  <Grid xs={12}>
                    <Typography variant='h6' className={classes.subtitle}>Start date</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <FormikSelect
                      name="startMonth"
                      label="Month"
                      size="small"
                      options={month}
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
                </Grid>
                <Grid container item spacing={2}>
                  <Grid xs={12}>
                    <Typography variant='h6' className={classes.subtitle}>End date</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <FormikSelect
                      name="endMonth"
                      label="Month"
                      size="small"
                      options={month}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormikSelect
                      name="endYear"
                      label="Year"
                      size="small"
                      options={year}
                    />
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <FormikTextField
                    name="activities"
                    label="Activities and societies"
                    size="small"
                    InputLabelProps={{
                      shrink: true
                    }}
                    placeholder="Ex: Alpha Phi Omega, Marching band, Volleyball"
                    multiline={true}
                    row={2}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormikTextField
                    name="description"
                    label="Description"
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
              {education
                ? <SharedButton title="Delete education" variant="outlined" color="secondary"
                  onClick={() => {
                    dispatch(deleteEducationAction(education.id))
                    dispatch(toggleModalAction())
                  }}/>
                : ''}
            </DialogActions>
          </Form>
        </Formik>
      </Grid>
    </div>
  )
}

export default EducationModal
