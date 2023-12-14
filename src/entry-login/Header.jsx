import { useContext } from "react";
import { UsernameContext } from "../../contexts/UsernameContext.jsx";
import { useLocation } from 'react-router-dom'


const Header = () => {
    const location = useLocation();

    const { username } = useContext(UsernameContext);

    if (username === 'username' || username === '' || username === null || location.pathname === '/login') {

        return <> <h1 className="title">THE NEWS...</h1></>

    } else {
        return <div className="header-container">
            <p className="logged-in-text">{username} is logged in</p >
            <h1 className="title-feed">THE NEWS...</h1>
        </div>
    }


}

export default Header