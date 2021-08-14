import React from 'react'
import styles from './styles'
import {Container} from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Bookmark from '../../../shared/BookmarkIcon/Bookmark'

function SavedPosts () {
  const classes = styles()
    
  return (
    <Container className={classes.container} maxWidth={'lg'}>
      <Grid container spacing={2} alignItems={'flex-start'} justifyContent={'center'}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <div className={classes.savedElementsPanel}>
            <h3 className={classes.savedElementsHeading}>
              <Bookmark/>
              My Items
            </h3>
            <p className={classes.savedElementsSubheading}>All posts and articles you save will be here</p>
            <Button className={classes.savedElementsBtnAll}>All</Button>
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}

export default SavedPosts