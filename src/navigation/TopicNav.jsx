import { Button, Menu, MenuItem } from '@mui/material'
import { useEffect, useState } from 'react'
import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom'
import { getAllTopics } from '../../api/api'


const TopicNav = ({ setOrder, setSort, screen }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const navigate = useNavigate()
  const [allTopics, setAllTopics] = useState([])
  const navDropDown = screen > 900 ? '15%' : '30%'
  const navButtonFontSize = screen > 900 ? screen / 55 : screen / 30
  const navMenuFontSize = screen > 900 ? screen / 65 : screen / 28

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
    setOrder('ASC')
    setSort('')
    navigate({
      pathname: '/myfeed',
      search: createSearchParams({
        topic,
      }).toString(),
    })
  }

  return (
    <>
      <Button id="menu-button" onClick={handleClick} style={{ display: 'flex', alignItems: 'end', justifyContent: 'flex-start', fontSize: navButtonFontSize }}>
        Topics
      </Button>
      <Menu
        id="topic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            sx: {
              width: navDropDown,
            },
          }
        }}
      >
        {allTopics.map((topic) => {
          return (
            <MenuItem
              sx={{ fontSize: navMenuFontSize }}
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
