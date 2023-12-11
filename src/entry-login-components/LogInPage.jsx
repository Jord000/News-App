import { useEffect, useState } from "react";
import { useContext } from "react";
import { UsernameContext } from "../../contexts/UsernameContext";
import Header from "./Header"
import { Select, MenuItem, FormControl, InputLabel, Box } from '@mui/material';
import { getUsernames } from '../../api/api.js'

const LogInPage = () => {
    const [userSelected, setUserSelected] = useState('username')
    const [allUsers, setAllUsers] = useState([])
    const { setUsername } = useContext(UsernameContext);

    useEffect(() => {
        getUsernames().then((users) => {
            setAllUsers(users);
        });
    }, []);

    const handleChange = (event) => {
        setUserSelected(event.target.value);
    }


    return <>
        <Header />
        <h2>Login to see your feed...</h2>

        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Username</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value=""
                    label="Username"
                    onChange={handleChange}
                >
                    {allUsers.map((user) => {
                        return <MenuItem value={user.username}>Username:{user.username} Name:{user.name}</MenuItem>
                    })}

                </Select>
            </FormControl>
        </Box>
    </>
}
export default LogInPage