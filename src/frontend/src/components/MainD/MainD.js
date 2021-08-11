import React from 'react'
import Feed from '../Main/Feed/Feed'
import Grid from '@material-ui/core/Grid'
import MainLeft from './MainLeft/MainLeft'
import MainLeftSticky from './MainSticky/MainLeftSticky'
import styleMain from './styleMain'
import { Container, Hidden } from '@material-ui/core'

function Main () {
  const classes = styleMain()

  return (
    <Container className={classes.container} maxWidth={'lg'} >
      <Grid container spacing={2} alignItems={'flex-start'} justifyContent={'center'} >

        <Hidden smDown>
          <Grid item sm={3} md={3} lg={2} xl={2}>
            <MainLeft />
            <MainLeftSticky />
          </Grid>
        </Hidden>

        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Feed/>
        </Grid>

        <Hidden mdDown>
          <Grid item lg={2} xl={2}>
            <MainLeft/>
          </Grid>
        </Hidden>

      </Grid>
    </Container>
  )
}

export default Main