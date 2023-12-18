import { Button, Menu, MenuItem } from '@mui/material'
import { useContext, useState } from 'react'
import { UsernameContext } from '../../contexts/UsernameContext'
import { useNavigate } from 'react-router-dom'

const MenuNav = ({ screen }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const { setUsername } = useContext(UsernameContext)
  const open = Boolean(anchorEl)
  const navigate = useNavigate()
  const navDropDown = screen > 900 ? '15%' : '30%'
  const navButtonFontSize = screen > 900 ? screen / 55 : screen / 30
  const navMenuFontSize = screen > 900 ? screen / 65 : screen / 28


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
    <>
      <Button id="menu-button" onClick={handleClick} style={{ display: 'flex', alignItems: 'end', width: 'auto', fontSize: navButtonFontSize }} >
        Menu
      </Button >
      <Menu id="nav-menu" anchorEl={anchorEl} open={open} onClose={handleClose}
        slotProps={{
          paper: {
            sx: {
              fontSize: '2vw',
              width: navDropDown,
            },
          }
        }}
      >
        <MenuItem
          sx={{ fontSize: navMenuFontSize }}
          onClick={() => {
            navigateToMyFeed(), handleClose()
          }}
        >
          My Feed
        </MenuItem>
        <MenuItem
          sx={{ fontSize: navMenuFontSize }}
          onClick={() => {
            logOut(), handleClose()
          }}
        >
          Log-Out
        </MenuItem>
      </Menu>
    </>
  )
}
export default MenuNav
