import React from 'react'
import styles from './styles'
import {Container, Hidden} from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import SavedLeft from './SavedLeft/SavedLeft'
import SavedRight from './SavedRight/SavedRight'
import Button from '@material-ui/core/Button'

function SavedPosts () {
  const classes = styles()
    
  return (
    <Container className={classes.container} maxWidth={'lg'}>
      <Grid container spacing={2} alignItems={'flex-start'} justifyContent={'center'}>
        <Hidden smDown>
          <Grid item sm={3} md={3} lg={2} xl={2}>
            <SavedLeft/>
          </Grid>
        </Hidden>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <div className={classes.savedElementsPanel}>
            <h3 className={classes.savedElementsHeading}>Saved Posts</h3>
            <p className={classes.savedElementsSubheading}>All posts and articles you save will be here</p>
            <Button className={classes.savedElementsBtnAll}>All</Button>
            <Button className={classes.savedElementsBtnArticles}>Articles</Button>
          </div>
        </Grid>
        <Hidden mdDown>
          <Grid item lg={2} xl={2}>
            <SavedRight/>
          </Grid>
        </Hidden>
      </Grid>
    </Container>
  )
}

export default SavedPosts