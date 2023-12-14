import { Box } from '@mui/material';
import Button from '@mui/material/Button'
import { useNavigate } from "react-router-dom";

const EntryPage = () => {
    const navigate = useNavigate()
    const proceedClick = () => {
        navigate("/login")
    }

    return <Box textAlign='center'>
        <h1 className='entry-text'>Welcome to... <br></br>THE NEWS</h1>

        <Button variant="contained" onClick={proceedClick}>Let me see what everyone is talking about</Button>
    </Box>
}

export default EntryPage