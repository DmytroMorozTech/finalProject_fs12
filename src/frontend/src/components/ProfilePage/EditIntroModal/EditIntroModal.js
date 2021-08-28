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
import {editIntroAction} from '../../../redux/Profile/profileActions'
import toggleModalAction from '../../../redux/Modal/modalActions'
import {useDispatch} from 'react-redux'

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

const EditIntroModal = (props) => {
  const dispatch = useDispatch()
  const profile = props.profile.profile
  const classes = styles()
  const fullName = profile.fullName
  const splitNameArr = fullName.split(' ')
  const firstName = splitNameArr[0]
  const lastName = splitNameArr[1]
  
  const INITIAL_FORM_STATE = {
    firstName: firstName,
    lastName: lastName,
    headline: profile.headline,
    country: profile.country,
    city: profile.city
  }
  const FORM_VALIDATION = Yup.object().shape({
    firstName: Yup.string()
      .required('First name is required'),
    lastName: Yup.string()
      .required('Last name is required'),
    headline: Yup.string()
      .required('Required'),
    country: Yup.string()
      .required('Required'),
    city: Yup.string()
      .required('Required')
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
            console.log('!!!!!!!!!!!')
            console.log(`Values read from form: ${JSON.stringify(values)}`)
            dispatch(editIntroAction(values))
            dispatch(toggleModalAction())
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
                    name="headline"
                    label="Headline"
                    size="small"
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormikTextField
                    name="country"
                    label="Country"
                    size="small"
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormikTextField
                    name="city"
                    label="City"
                    size="small"
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <SharedButton type="submit" title="Save"/>
            </DialogActions>
          </Form>
        </Formik>
      </Grid>
    </div>
  )
}
export default EditIntroModal
