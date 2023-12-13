import { Button, Menu, MenuItem } from '@mui/material'
import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import SortArticle from './SortArticle'

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const navigate = useNavigate()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const navigateToMyFeed = () => {
    navigate('/myfeed')
  }

  const location = useLocation()


  return (
    <div style={{ display: 'flex', flexWrap:'wrap'}}>
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
      {location.pathname==='/myfeed' && <SortArticle />}
    </div>
  )
}

export default NavBar
