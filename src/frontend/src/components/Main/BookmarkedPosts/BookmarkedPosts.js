import React from 'react'
import styles from './styles'
import { Container, Typography } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import Feed from '../Feed/Feed'

function BookmarkedPosts () {
  const classes = styles()

  return (
    <Container className={classes.container} maxWidth={'lg'}>
      <Grid container spacing={4} justifyContent={'center'}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <div className={classes.savedElementsPanel}>
            <Typography variant='h3' className={classes.savedElementsHeading}>
              <BookmarkIcon/>
              Saved Items
            </Typography>
            <Typography variant='h5' className={classes.savedElementsSubheading}>
              Anything you save is private.
            </Typography>
          </div>
          <Feed type={'bookmarkedPosts'}/>
        </Grid>
      </Grid>
    </Container>
  )
}

export default BookmarkedPosts
