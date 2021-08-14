import React from 'react'
import {useDispatch} from 'react-redux'
import {withStyles} from '@material-ui/core/styles'
import toggleModalAction from '../../../redux/Modal/modalActions'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import styles from './styles'
import SharedButton from '../../../shared/Button/SharedButton'
import Typography from '@material-ui/core/Typography'
import {Formik, Field, Form} from 'formik'
import * as Yup from 'yup'
import {TextField} from 'formik-material-ui'

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(3)
  }
}))(MuiDialogContent)

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
    justifyContent: 'space-between'
  }
}))(MuiDialogActions)

const AddEducationModal = () => {
  const dispatch = useDispatch()
  // const onPostSubmitHandler = () => {
  //   dispatch(toggleModalAction())
  // }
  const classes = styles()
    
  return (
    <div>
      <Typography variant="subtitle1" className={classes.title}>
                Add education
      </Typography>
      <DialogContent dividers>
        <div className='checkout'>
          <Formik
            initialValues={{
              school: '',
              degree: '',
              fieldOfStudy: '',
              startYear: '',
              grade: '',
              activitiesAndSocieties: '',
              description: ''
            }}
            validationSchema={Yup.object().shape({
              school: Yup.string()
                .required('School is required'),
              degree: Yup.string(),
              fieldOfStudy: Yup.string(),
              startYear: Yup.number(),
              endDate: Yup.number(),
              grade: Yup.string(),
              activitiesAndSocieties: Yup.string(),
              description: Yup.string()
            })}
            onSubmit={(fields) => {
              // dispatch(addNewCustomerActions(fields))
              dispatch(toggleModalAction())
            }}
            render={({errors, status, touched}) => (
              <Form className={classes.root}>
                <div className={classes.form}>
                  <Field component={TextField} label="School" variant="outlined"
                    helperText="Ex: Boston University" name="school"
                    type="text" fullWidth/>
                </div>
                <div className={classes.form}>
                  <Field component={TextField} label="Degree" variant="outlined"
                    helperText="Ex: Bachelor`s" name="degree"
                    type="text" fullWidth/>
                </div>
                <div className={classes.form}>
                  <Field component={TextField} label="Field of study" variant="outlined"
                    helperText="Ex: Business" name="fieldOfStudy"
                    type="text" fullWidth/>
                </div>
                <div className={classes.form}>
                  <Field component={TextField} label="Age"
                    helperText="Please Enter Your Age" name="age" type="text"/>
                </div>
              </Form>
            )}
          />
        </div>
      </DialogContent>
      <DialogActions>
        {/* <SharedButton title="Post" onClick={onPostSubmitHandler}/> */}
        <div>
          <SharedButton variant="contained" color="primary" type="reset"
            className="btn btn-secondary">Reset</SharedButton>
        </div>
      </DialogActions>
    </div>
  )
}
export default AddEducationModal
