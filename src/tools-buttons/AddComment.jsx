import { useContext, useState } from 'react'
import { postCommentToArticle } from '../../api/api'
import { UsernameContext } from '../../contexts/UsernameContext'
import { CommentSeedContext } from '../../contexts/CommentSeedContext'
import { Fab, TextField } from '@mui/material/'
import AddCommentIcon from '@mui/icons-material/AddComment'

const AddComment = ({ id, comments, setComments }) => {
  const { username } = useContext(UsernameContext)
  const { commentSeed, setCommentSeed } = useContext(CommentSeedContext)
  const [userComment, setUserComment] = useState('')
  const [commentColor, setCommentColor] = useState('default')

  const submitCommentHandler = () => {

    if (userComment.length < 1 || !(/[a-zA-Z]/g).test(userComment)) {
      setCommentColor('error')
    } else {
      setCommentColor('secondary')
      const tempComment = {
        article_id: id,
        author: username,
        body: userComment,
        comment_id: 0,
        created_at: 'right now',
        votes: 0,
      }
      setComments([tempComment, ...comments])
      postCommentToArticle(userComment, username, id).then(() => {
        setCommentSeed(!commentSeed)
        setCommentColor('default')
      })
      setUserComment('')
    }
  }

  const inputHandler = (event) => {
    setUserComment(event.target.value)
    setCommentColor('default')
  }

  return (
    <div className="comment-input-container">

      <TextField
        className="comment-input"
        variant="outlined"
        label="Comment"
        value={userComment}
        onChange={inputHandler}
        multiline
        fullWidth
      ></TextField>

      <div className="comment-button-container">
        <Fab onClick={submitCommentHandler} color={commentColor}>
          <AddCommentIcon />
        </Fab>
      </div>
      {commentColor === 'error' && (
        <p style={{ color: 'red' }}>please enter a comment to submit</p>
      )}
    </div>
  )
}

export default AddComment
