import { Grid } from '@mui/material'
import CommentsById from '../single-article/CommentsById'
import { useState } from 'react'


const ArticleComments = ({ article }) => {
  const [comments, setComments] = useState([])
  return (
    <>
      <Grid item xs={4} style={{
        overflowY: 'scroll',
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
        height: '40vh',
        padding: '8px',
        marginLeft: 'auto',
        marginTop: '8px',
        marginBottom: '5px',
        backgroundColor: '#fdfaff',
        borderRadius: '5px'

      }}>
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
