import DeleteIcon from '@mui/icons-material/Delete'
import { Box, IconButton } from '@mui/material'
import { useContext, useState } from 'react'
import { UsernameContext } from '../../contexts/UsernameContext'
import { deleteCommentById } from '../../api/api'
import { CommentSeedContext } from '../../contexts/CommentSeedContext'
import { useLocation } from 'react-router-dom'

const CommentBody = ({ comment }) => {
  const { username } = useContext(UsernameContext)
  const { commentSeed, setCommentSeed } = useContext(CommentSeedContext)
  const [binColor, setBinColor] = useState('default')
  let commentAuthor = 'comment-author'
  let commentContainer = 'comment-container'
  let commentBody = 'comment-body'
  let commentIdVotesDate = 'comment-id-votes-date'
  const path = useLocation().pathname
  if (path === '/myfeed') {
    commentAuthor = 'comment-author-sidebar'
    commentContainer = 'comment-container-sidebar'
    commentBody = 'comment-body-sidebar'
    commentIdVotesDate = 'comment-id-votes-date-sidebar'
  }

  const handleDelete = (id) => {
    setBinColor('secondary')
    deleteCommentById(id).then((data) => {
      if (data.error) {
        setBinColor('error')
      } else {
        setCommentSeed(!commentSeed)
      }
    })
  }


  const { article_id, author, body, comment_id, created_at, votes } = comment
  return (
    <>
      <div id={commentContainer}>
        <div>
          <b id={commentAuthor}>
            {author} says...
          </b>
          <p
            id={commentBody}
          >
            {body}
          </p>
          <p
            id={commentIdVotesDate}
          >
            {comment_id} - {created_at.substring(0, 10)} votes: {votes}
          </p>
          {binColor === 'error' && <p style={{ color: 'red' }}>Error deleting comment</p>}
        </div>
        {username === author && path !== '/myfeed' && (
          <IconButton
            aria-label="delete"
            onClick={() => {
              handleDelete(comment_id)
            }}
            style={{ marginLeft: 'auto', marginRight: '10px' }}
            color={binColor}
          >
            <DeleteIcon />
          </IconButton>
        )}
      </div>
    </>
  )
}

export default CommentBody
