import styles from './styles'
import Grid from '@material-ui/core/Grid'
import { Container, Hidden } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Post from '../Main/Feed/Post/Post'
import { findSinglePostByIdAction } from '../../redux/Post/postActions'
import { useDispatch, useSelector } from 'react-redux'
import { singlePostSelector } from '../../redux/Post/postSelector'
import Preloader from '../../shared/Preloader/Preloader'

function SinglePost (props) {
  const classes = styles()

  const postId = props.match.params.id
  const dispatch = useDispatch()
  const singlePost = useSelector(singlePostSelector)
  const [postIsLoading, setPostIsLoading] = useState(true)

  useEffect(() => {
    dispatch(findSinglePostByIdAction(postId, setPostIsLoading))
  }, [dispatch, postId])

  return (
    <>
      {postIsLoading && <Preloader/>}
      {!postIsLoading &&
      <Container className={classes.singlePost} maxWidth={'lg'}>
        <Grid container spacing={4} justifyContent={'center'}>

          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Post post={singlePost} singlePostRender={true}/>
          </Grid>

        </Grid>
      </Container>
      }
    </>
  )
}

export default SinglePost
