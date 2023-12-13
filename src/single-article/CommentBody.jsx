import DeleteIcon from '@mui/icons-material/Delete'
import { Box, IconButton } from '@mui/material'
import { useContext, useState } from 'react'
import { UsernameContext } from '../../contexts/UsernameContext'
import { deleteCommentById } from '../../api/api'
import { CommentSeedContext } from '../../contexts/CommentSeedContext'

const CommentBody = ({ comment }) => {
  const { username } = useContext(UsernameContext)
  const { commentSeed, setCommentSeed } = useContext(CommentSeedContext)
  const [binColor, setBinColor] = useState('default')

  const handleDelete = (id) => {
    setBinColor('secondary')
    deleteCommentById('error').then((data) => {
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
      <div style={{ display: 'flex' }}>
        <div>
          <b
            style={{
              fontSize: '14px',
              marginTop: '20px',
              paddingBottom: '12px',
            }}
          >
            {author} says...
          </b>
          <p
            style={{
              fontSize: '16px',
              marginTop: '10px',
              paddingBottom: '10px',
            }}
          >
            {body}
          </p>
          <p
            style={{ fontSize: '12px', marginTop: '5px', marginBottom: '15px' }}
          >
            {comment_id} - {created_at.substring(0, 10)} votes: {votes}
          </p>
          {binColor==='error' && <p style={{color:'red'}}>Error deleting comment</p>}
        </div>
        {username === author && (
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
