import { useEffect, useState } from "react";
import { useContext } from "react";
import { UsernameContext } from "../../contexts/UsernameContext.jsx";
import { Select, MenuItem, FormControl, InputLabel, Box, Button, LinearProgress } from '@mui/material';
import { getUsernames } from '../../api/api.js'
import { useNavigate } from "react-router-dom";

const LogInPage = () => {
    const [userSelected, setUserSelected] = useState('username')
    const [allUsers, setAllUsers] = useState([])
    const { setUsername } = useContext(UsernameContext);
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(true)
    const [buttonColor, setButtonColor] = useState('primary')
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        getUsernames().then((users) => {
            setAllUsers(users);
        }).then(() => {
            setIsLoading(false)
        });
    }, []);

    const handleChange = (event) => {
        setUserSelected(event.target.value)
        if (event.target.value !== '' && event.target.value !== 'username') {
            setIsError(false)
            setButtonColor('primary')

        }
    }

    const handleLogIn = (event) => {
        if (!userSelected || userSelected === 'username') {
            event.preventDefault()
            setIsError(true)
            setButtonColor('error')
        } else {
            setUsername(userSelected)
            sessionStorage.setItem("username", userSelected)
            navigate("/myfeed")
        }
    }

    if (isLoading) {
        return (
            <Box sx={{ width: '95%', marginLeft: 'auto',marginRight:'auto' }}>
                <h2 className="patience">Thank you for your patience while the data loads...</h2>
                <LinearProgress />
            </Box>)
    }
    else return <>

        <h2 className="welcome-login-text">Login to see your feed...</h2>

        <Box className='login-menu' sx={{ minWidth: 120 }}>
            <FormControl style={{ minWidth: 300 }}>
                <InputLabel id="select-label">Username</InputLabel>
                <Select
                    labelId="select-label"
                    id="simple-select"
                    defaultValue=''
                    label="Username"
                    color={buttonColor}
                    onChange={handleChange}
                >
                    {allUsers.map((user) => {
                        return <MenuItem key={user.username} value={user.username}>{user.username} --- {user.name}</MenuItem>
                    })}

                </Select>
                {isError && <p style={{ color: 'red' }}>Please select a username</p>}
                <Button variant="contained" onClick={handleLogIn}>Lets Go!</Button>
            </FormControl>
        </Box>
    </>
}
export default LogInPage