import { Grid } from '@mui/material'
import CommentsById from '../single-article/CommentsById'
import { useState } from 'react'


const ArticleComments = ({ article }) => {
  const [comments, setComments] = useState([])
  return (
    <>
      <Grid item xs={4} style={{overflowY:'scroll',height:'300px',width:'100%'}}>
        <CommentsById
          comments={comments}
          setComments={setComments}
          id={article.article_id}
        />
      </Grid>
    </>
  )
}

export default ArticleComments
