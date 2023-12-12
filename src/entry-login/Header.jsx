import { useContext } from "react";
import { UsernameContext } from "../../contexts/UsernameContext.jsx";



const Header = () => {
    const { username } = useContext(UsernameContext);
    
    if (username === 'username' || username === '' || username === null) {

        return <> <h1 className="title">THE NEWS...</h1></>

    } else {
        return <div className="header-container"><h1 className="title">THE NEWS...</h1>
            <p className="logged-in-text">{username} is logged in</p ></div>
    }


}

export default Header