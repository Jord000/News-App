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

    useEffect(() => {
        getUsernames().then((users) => {
            setAllUsers(users);
        }).then(() => {
            setIsLoading(false)
        });
    }, []);

    const handleChange = (event) => {
        setUserSelected(event.target.value)

    }

    const handleLogIn = (event) => {
        setUsername(userSelected)
        navigate("/myfeed")
    }

    if (isLoading) {
        return (
            <Box sx={{ width: '100%' }}>
                <LinearProgress />
            </Box>)
    }
    else return <>

        <h2>Login to see your feed...</h2>

        <Box sx={{ minWidth: 120 }}>
            <FormControl style={{ minWidth: 300 }}>
                <InputLabel id="demo-simple-select-label">Username</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    defaultValue=""
                    label="Username"
                    onChange={handleChange}
                ><MenuItem value=''>Username</MenuItem>
                    {allUsers.map((user) => {
                        return <MenuItem key={user.username} value={user.username}>Username:{user.username} Name:{user.name}</MenuItem>
                    })}

                </Select>
                <Button variant="contained" onClick={handleLogIn}>Lets Go!</Button>
            </FormControl>
        </Box>
    </>
}
export default LogInPage