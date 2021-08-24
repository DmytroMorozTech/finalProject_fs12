import React from 'react'
import {withStyles} from '@material-ui/core/styles'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import styles from './styles'
import Typography from '@material-ui/core/Typography'
import {Form, Formik} from 'formik'
import * as Yup from 'yup'
import FormikTextField from '../../../shared/FormComponents/FormikTextField'
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
      .required('Position is required')
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
                  <FormikTextField
                    name="firstName"
                    label="First name"
                    size="small"
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <FormikTextField
                    name="lastName"
                    label="Last name"
                    size="small"
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormikTextField
                    name="position"
                    label="Position"
                    size="small"
                    InputLabelProps={{
                      shrink: true
                    }}
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
