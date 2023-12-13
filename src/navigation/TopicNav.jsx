import { Button, Menu, MenuItem } from '@mui/material'
import { useEffect, useState } from 'react'
import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom'
import { getAllTopics } from '../../api/api'


const TopicNav = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const navigate = useNavigate()
  const [allTopics, setAllTopics] = useState([])
 
  useEffect(() => {
    getAllTopics().then((topics) => {
      setAllTopics(topics)
    })
  }, [])

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const navigateToTopics = (topic) => {
    navigate({
      pathname: '/myfeed',
      search: createSearchParams({
        topic,
      }).toString(),
    })
  }

  return (
    <>
      <Button id="menu-button" onClick={handleClick}>
        Topics
      </Button>
      <Menu
        id="topic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {allTopics.map((topic) => {
          return (
            <MenuItem
              onClick={() => {
                navigateToTopics(topic.slug), handleClose()
              }}
              key={topic.slug}
            >
              {topic.slug.charAt(0).toUpperCase() + topic.slug.slice(1)}
            </MenuItem>
          )
        })}
      </Menu>
    </>
  )
}
export default TopicNav
