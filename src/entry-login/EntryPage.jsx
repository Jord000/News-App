import Button from '@mui/material/Button'
import { useNavigate } from "react-router-dom";

const EntryPage = () => {
    const navigate = useNavigate()
    const proceedClick = () => {
        navigate("/login")
    }

    return <>
        <h1>Welcome to... THE NEWS</h1>

        <Button variant="contained" onClick={proceedClick}>Let me see what everyone is talking about</Button>
    </>
}

export default EntryPage