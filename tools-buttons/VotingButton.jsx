import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import ThumbDownIcon from '@mui/icons-material/ThumbDown'
import { Box, Fab } from '@mui/material'
import { addVotesToArticleId } from '../api/api'
import { useState } from 'react'

const VotingButton = ({id, votes}) => {
const [currVotes, setCurrVotes] = useState(votes)

const upVote = ()=>{
    setCurrVotes(currVotes+1)
    addVotesToArticleId(1,id)
}
const downVote = ()=>{
    setCurrVotes(currVotes-1)
    addVotesToArticleId(-1,id)
}


  return (
    <>
      <Box className="thumbs-up">
         <p style={{display:'inline',marginRight:'20px'}}>Votes: {currVotes}</p>
        <Fab  size="small" onClick={upVote}>
          <ThumbUpIcon />
        </Fab>
      </Box>
      <Box className="thumbs-down">
        <Fab  size="small" onClick={downVote}>
          <ThumbDownIcon />
        </Fab>
      </Box>
      </>
  )
}

export default VotingButton
