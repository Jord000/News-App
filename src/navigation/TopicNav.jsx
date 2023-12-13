import { MenuItem } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'

const TopicNav = ({ topic}) => {
  const navigate = useNavigate()
  const navigateToTopic = () => {
    navigate(`/myfeed?topic=${topic.slug}`)
  }


  return (
    <MenuItem
      onClick={() => {
        navigateToTopic(topic)
      }}
    >
      {topic.slug.charAt(0).toUpperCase() + topic.slug.slice(1)}
    </MenuItem>
  )
}

export default TopicNav
