import React from 'react'
import {withStyles} from '@material-ui/core/styles'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import styles from './styles'
import Typography from '@material-ui/core/Typography'
import {Form, Formik} from 'formik'
import * as Yup from 'yup'
import TextField from '../../../shared/FormComponents/TextField/TextField'
import Select from '../../../shared/FormComponents/Select/Select'
import Grid from '@material-ui/core/Grid'
import month from '../../../data/month.json'
import year from '../../../data/year.json'
import SharedButton from '../../../shared/Button/SharedButton'

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(3)
  }
}))(MuiDialogContent)

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(1)
  }
}))(MuiDialogActions)

const EditEducationModal = () => {
  const classes = styles()
  const INITIAL_FORM_STATE = {
    school: '',
    degree: '',
    fieldOfStudy: '',
    startMonth: '',
    startYear: '',
    endMonth: '',
    endDate: '',
    grade: '',
    activitiesAndSocieties: '',
    description: ''
  }
  const FORM_VALIDATION = Yup.object().shape({
    school: Yup.string()
      .required('School is required'),
    degree: Yup.string(),
    fieldOfStudy: Yup.string(),
    startMonth: Yup.string(),
    startYear: Yup.number(),
    endMonth: Yup.string(),
    endDate: Yup.number(),
    grade: Yup.string(),
    activitiesAndSocieties: Yup.string(),
    description: Yup.string()
  })
  return (
    <div>
      <Typography variant="subtitle1" className={classes.title}>
                Edit education
      </Typography>

      <Grid container>
        <Formik
          initialValues={{
            ...INITIAL_FORM_STATE
          }}
          validationSchema={FORM_VALIDATION}
          onSubmit={values => {
            console.log(values)
          }}
        >
          <Form>
            <DialogContent dividers>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    name="school"
                    label="School"
                    helperText="Ex: Boston University"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="degree"
                    label="Degree"
                    helperText="Ex: Bachelor`s"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="fieldOfStudy"
                    label="Field of study"
                    helperText="Ex: Business"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Select
                    name="startMonth"
                    label="Month"
                    options={month}
                    helperText="Start date"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Select
                    name="startYear"
                    label="Year"
                    options={year}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Select
                    name="endMonth"
                    label="Month"
                    options={month}
                    helperText="End date"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Select
                    name="endDate"
                    label="Year"
                    options={year}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="activitiesAndSocieties"
                    label="Activities and societies"
                    multiline={true}
                    row={2}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="description"
                    label="Description"
                    multiline={true}
                    row={4}
                  />
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <SharedButton title="Delete education" variant="outlined" color="secondary"/>
              <SharedButton title="Save"/>
            </DialogActions>
          </Form>
        </Formik>
      </Grid>
    </div>
  )
}
export default EditEducationModal
