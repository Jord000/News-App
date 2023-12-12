import { useContext, useState } from 'react'
import { Fab, TextField, Box } from '@mui/material/'
import { UsernameContext } from '../contexts/UsernameContext'
import AddCommentIcon from '@mui/icons-material/AddComment'
import { postCommentToArticle } from '../api/api'


const AddComment = ({ id, setCommentSeed }) => {
  const { username } = useContext(UsernameContext)
  const [userComment, setUserComment] = useState('')

  const submitCommentHandler = () => {
    setCommentSeed(true)
    postCommentToArticle(userComment, username, id)
    setUserComment('')
  }

  const inputHandler = (event) => {
    setUserComment(event.target.value)
  }

  return (
    <Box className="comment-input-container">
      <TextField
        className="comment-input"
        variant="outlined"
        label="Comment"
        value={userComment}
        onChange={inputHandler}
      ></TextField>
      <Box className='comment-button-container'>
        <Fab onClick={submitCommentHandler}>
          <AddCommentIcon />
        </Fab>
      </Box>
    </Box>
  )
}

export default AddComment
