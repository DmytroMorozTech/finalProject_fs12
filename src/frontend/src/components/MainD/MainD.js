import React from 'react'
import Feed from '../Main/Feed/Feed'
import Grid from '@material-ui/core/Grid'
import MainLeft from './MainLeft'
import styleMain from './styleMain'
import { Container, Hidden } from '@material-ui/core'
import MainRight from './MainRight'

function Main () {
  // xs 0-600px the Feed will take the whole width of the viewport
  // sm 600-960px the Feed will take ___% of the whole width of the viewport

  const classes = styleMain()

  return (
    <Container className={classes.container} maxWidth={'lg'} justify={'center'} >
      <Grid container spacing={2} alignItems={'flex-start'} justify={'center'}>

        <Hidden smDown>
          <Grid item sm={3} md={3} lg={2} xl={2}>
            <MainLeft />
          </Grid>
        </Hidden>

        <Grid item xs={12} sm={12} md={9} lg={8} xl={8}>
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