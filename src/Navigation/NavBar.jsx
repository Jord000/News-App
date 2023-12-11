import { Button, Menu, MenuItem } from "@mui/material"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate()

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const navigateToMyFeed = () => {
        navigate('/myfeed');
    }


    return (
        <div>
            <Button
                id="menu-button"
                onClick={handleClick}
            >
                Menu
            </Button>
            <Menu
                id="nav-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={navigateToMyFeed}>My Feed</MenuItem>
            </Menu>
        </div>
    );
}


export default NavBar