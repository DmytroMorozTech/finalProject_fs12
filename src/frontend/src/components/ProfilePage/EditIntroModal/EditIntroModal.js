import React from 'react'
import {withStyles} from '@material-ui/core/styles'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import styles from './styles'
import Typography from '@material-ui/core/Typography'
import {Form, Formik} from 'formik'
import * as Yup from 'yup'
import TextField from '../../../shared/FormComponents/TextField/TextField'
import Grid from '@material-ui/core/Grid'
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
    justifyContent: 'flex-end',
    padding: theme.spacing(1)
  }
}))(MuiDialogActions)

const EditIntroModal = () => {
  const classes = styles()
  const INITIAL_FORM_STATE = {
    firstName: '',
    lastName: '',
    position: ''
  }
  const FORM_VALIDATION = Yup.object().shape({
    firstName: Yup.string()
      .required('First name is required'),
    lastName: Yup.string()
      .required('Last name is required'),
    position: Yup.string()
  })
  return (
    <div>
      <Typography variant="subtitle1" className={classes.title}>
                Edit intro
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
                <Grid item xs={6}>
                  <TextField
                    name="firstName"
                    label="First name"
                    // helperText="Ex: Boston University"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    name="lastName"
                    label="Last name"
                    // helperText="Ex: Bachelor`s"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="position"
                    label="Position"
                    helperText="Ex: Business"
                  />
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <SharedButton title="Save"/>
            </DialogActions>
          </Form>
        </Formik>
      </Grid>
    </div>
  )
}
export default EditIntroModal
