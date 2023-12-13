import { Button } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'

const ErrorPage = () => {
  const navigate = useNavigate()
  const goHome = () => {
    navigate('/')
  }
  return (
    <>
      <h2>ERROR! 404 page not found</h2>

      <Button variant="contained" onClick={goHome}>
        Take Me Home
      </Button>
    </>
  )
}

export default ErrorPage
