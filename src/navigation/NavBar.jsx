import { Button, Menu, MenuItem } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAllTopics } from '../../api/api'
import TopicNav from './TopicNav'


const NavBar = () => {
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


  const navigateToMyFeed = () => {
    navigate('/myfeed')
  }

  return (
    <div>
      <Button id="menu-button" onClick={handleClick}>
        Menu
      </Button>
      <Menu id="nav-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem
          onClick={() => {
            navigateToMyFeed(), handleClose()
          }}
        >
          My Feed
        </MenuItem>
      </Menu>

    </div>
  )
}

export default NavBar
