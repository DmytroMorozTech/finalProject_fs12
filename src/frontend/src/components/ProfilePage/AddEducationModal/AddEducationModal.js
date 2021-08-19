import React from 'react'
import {withStyles} from '@material-ui/core/styles'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import styles from './styles'
import Typography from '@material-ui/core/Typography'
import {Form, Formik} from 'formik'
import * as Yup from 'yup'
import FormikTextField from '../../../shared/FormComponents/FormikTextField/FormikTextField'
import FormikSelect from '../../../shared/FormComponents/FormikSelect/FormikSelect'
import Grid from '@material-ui/core/Grid'
import month from '../../../data/month.json'
import year from '../../../data/year.json'
import SharedButton from '../../../shared/Button/SharedButton'
import {useDispatch} from 'react-redux'
import toggleModalAction from '../../../redux/Modal/modalActions'
import {createNewEducationAction} from '../../../redux/Profile/profileActions'

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

const AddEducationModal = () => {
  const dispatch = useDispatch()

  const classes = styles()
  const INITIAL_FORM_STATE = {
    school: '',
    degreeReceived: '',
    fieldOfStudy: '',
    startMonth: '',
    startYear: '',
    endMonth: '',
    endYear: '',
    activities: '',
    description: ''
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
      .required('Required'),
    endYear: Yup.number()
      .required('Required'),
    activities: Yup.string()
      .required('Required'),
    description: Yup.string()
      .required('Required')
  })
  return (
    <div>
      <Typography variant="subtitle1" className={classes.title}>
       Add education
      </Typography>
     
      <Grid container>
        <Formik
          initialValues={{
            ...INITIAL_FORM_STATE
          }}
          validationSchema={FORM_VALIDATION}
          onSubmit={values => {
            console.log(values)
            dispatch(createNewEducationAction(values))
            dispatch(toggleModalAction())
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
                    name="endMonth"
                    label="Month"
                    size="small"
                    options={month}
                    helperText="End date"
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
            </DialogActions>
          </Form>
        </Formik>
      </Grid>
    </div>
  )
}
export default AddEducationModal
