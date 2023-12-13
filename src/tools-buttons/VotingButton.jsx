import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import ThumbDownIcon from '@mui/icons-material/ThumbDown'
import { Box, Fab } from '@mui/material'
import { addVotesToArticleId } from '../../api/api'
import { useState } from 'react'

const VotingButton = ({ id, votes }) => {
  const [currVotes, setCurrVotes] = useState(votes)
  const [timesClicked, setTimesClicked] = useState(0)
  const [buttonColor1, setButtonColor1] = useState('default')
  const [buttonColor2, setButtonColor2] = useState('default')

  const upVote = () => {
    if (timesClicked <= 0) {
      setButtonColor1('secondary')
      setTimesClicked(timesClicked + 1)
      setCurrVotes(currVotes + 1)
      addVotesToArticleId(1, id).then((data) => {
        if (data.error) {
          setButtonColor1('error')
        } else {
          setTimeout(() => {
            setButtonColor1('default')
          }, 100)
        }
      })
    }
  }
  const downVote = () => {
    if (timesClicked >= 0) {
      setButtonColor2('secondary')
      setTimesClicked(timesClicked - 1)
      setCurrVotes(currVotes - 1)
      addVotesToArticleId(-1, id).then((data) => {
        if (data.error) {
          setButtonColor2('error')
        } else {
          setTimeout(() => {
            setButtonColor2('default')
          }, 100)
        }
      })
    }
  }

  return (
    <>
      <Box className="thumbs-up">
        <p style={{ display: 'inline', marginRight: '20px' }}>
          Votes: {currVotes}
        </p>
        <Fab size="small" onClick={upVote} color={buttonColor1}>
          <ThumbUpIcon />
        </Fab>
      </Box>
      <Box className="thumbs-down">
        <Fab size="small" color={buttonColor2} onClick={downVote}>
          <ThumbDownIcon />
        </Fab>
      </Box>
    </>
  )
}

export default VotingButton
