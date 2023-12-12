import { Button, Menu, MenuItem } from '@mui/material'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UsernameContext } from '../../contexts/UsernameContext'

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const navigate = useNavigate()
  const { setUsername } = useContext(UsernameContext)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const navigateToMyFeed = () => {
    navigate('/myfeed')
  }
  const logOut = () => {
    sessionStorage.setItem('username', null)
    setUsername(null)
    navigate('/')
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
        <MenuItem
          onClick={() => {
            logOut(), handleClose()
          }}
        >
          Log-Out
        </MenuItem>
      </Menu>
    </div>
  )
}

export default NavBar
