import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import styles from '../styles'
import Typography from '@material-ui/core/Typography'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import FormikTextField from '../../../../shared/FormComponents/FormikTextField'
import FormikSelect from '../../../../shared/FormComponents/FormikSelect'
import FormikSearchField from '../../../../shared/FormComponents/FormikSearchField'
import Grid from '@material-ui/core/Grid'
import month from '../../../../data/month.json'
import year from '../../../../data/year.json'
import companies from '../../../../data/companies.json'
import SharedButton from '../../../../shared/SharedButton/SharedButton'
import { useDispatch } from 'react-redux'
import toggleModalAction from '../../../../redux/Modal/modalActions'
import {
  createNewWorkPlaceAction,
  deleteWorkPlaceAction,
  updateWorkPlaceAction
} from '../../../../redux/Profile/profileActions'
import convertLocalDateToYearMonthObj from '../../../../utils/convertLocalDateToYearMonthObj'
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

const ExperienceModal = (props) => {
  const classes = styles()
  const dispatch = useDispatch()

  const workPlace = props.workPlace
  let start, end

  if (workPlace) {
    const {isCurrentlyEmployed} = workPlace
    start = convertLocalDateToYearMonthObj(workPlace.dateStart)
    end = !isCurrentlyEmployed ? convertLocalDateToYearMonthObj(workPlace.dateFinish) : null
  }

  const INITIAL_FORM_STATE = {
    position: workPlace?.position || '',
    organizationId: workPlace?.organization.id || '',
    isCurrentlyEmployed: workPlace?.isCurrentlyEmployed || false,
    startMonth: start?.month || '',
    startYear: start?.year || '',
    endMonth: (end ? end.month : '') || '',
    endYear: (end ? end.year : '') || '',
    responsibilities: workPlace?.responsibilities || ''
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
        {workPlace
          ? 'Edit experience'
          : 'Add experience'}
      </Typography>

      <Grid container>
        <Formik
          initialValues={{
            ...INITIAL_FORM_STATE
          }}
          validationSchema={FORM_VALIDATION}
          onSubmit={values => {
            console.log(values)
            if (workPlace) {
              dispatch(updateWorkPlaceAction(values, workPlace.id))
              dispatch(toggleModalAction())
            } else {
              dispatch(createNewWorkPlaceAction(values))
              dispatch(toggleModalAction())
            }
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
                    <FormikSearchField
                      name="organizationId"
                      label="Organisation"
                      size="small"
                      InputLabelProps={{
                        shrink: true
                      }}
                      placeholder="Ex: Microsoft"
                      // options={companies}
                    />
                    {/* <FormikTextField */}
                    {/*  name="organizationId" */}
                    {/*  label="Organization ID" */}
                    {/*  // later on a drop-down list with organizations should be implemented */}
                    {/*  size="small" */}
                    {/*  InputLabelProps={{ */}
                    {/*    shrink: true */}
                    {/*  }} */}
                    {/*  placeholder="Ex: Microsoft" */}
                    {/*  disabled = {true} */}
                    {/* /> */}
                  </Grid>
                  <Grid item xs={12}>
                    <label className={classes.checkbox}>
                      <Field
                        type="checkbox"
                        name="isCurrentlyEmployed"
                      />
                      <span>I am currently working in this role</span>
                    </label>
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
                        disabled={values.isCurrentlyEmployed === true}
                        name="endMonth"
                        label="Month"
                        size="small"
                        options={month}
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
                <SharedButton type="submit" title="Save"/>
                {workPlace
                  ? <SharedButton title="Delete experience" variant="outlined" color="secondary"
                    onClick={() => {
                      dispatch(deleteWorkPlaceAction(workPlace.id))
                      dispatch(toggleModalAction())
                    }}/>
                  : ''
                }
              </DialogActions>
            </Form>
          )}
        </Formik>
      </Grid>
    </div>
  )
}

export default ExperienceModal
