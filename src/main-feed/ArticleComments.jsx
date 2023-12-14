import { Box, Grid } from '@mui/material'
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
        padding: '8px',
        marginLeft: 'auto',
        marginTop: '8px',
        marginBottom: '20px',
        backgroundColor: '#fdfaff',
        borderRadius: '8px',


      }}>
        <Box style={{ height: '30vh' }}>
          <CommentsById
            comments={comments}
            setComments={setComments}
            id={article.article_id}
          />
        </Box>
      </Grid>
    </>
  )
}

export default ArticleComments
