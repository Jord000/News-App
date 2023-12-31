import { useContext, useEffect, useState } from 'react'
import { getCommentsById } from '../../api/api'
import { Box, CircularProgress } from '@mui/material'
import CommentBody from './CommentBody'
import { CommentSeedContext } from '../../contexts/CommentSeedContext'
import { useLocation } from 'react-router-dom'

const CommentsById = ({ id, setComments, comments }) => {
  const { commentSeed, setCommentSeed } = useContext(CommentSeedContext)
  const [isLoading, setIsLoading] = useState(true)
  let commentHeader = 'comment-header'

  if (useLocation().pathname === '/myfeed') {
    commentHeader = 'comment-header-sidebar'
  }

  useEffect(() => {
    getCommentsById(id)
      .then((comments) => {
        setComments(comments)
      })
      .then(() => {
        setIsLoading(false)
      })
  }, [commentSeed])

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    )
  } else
    return (
      <>
        <h4 id={commentHeader}>{`Article ${id} comments`}</h4>
        {comments.map((comment) => {
          return (
            <div style={{ margin: '5px' }} key={comment.comment_id}>
              <CommentBody comment={comment} />
            </div>
          )
        })}
      </>
    )
}
export default CommentsById
