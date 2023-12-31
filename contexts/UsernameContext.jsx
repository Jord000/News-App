import { createContext, useState } from "react";

export const UsernameContext = createContext();

export const UsernameProvider = (props) => {
    const [username, setUsername] = useState(sessionStorage.getItem("username"));
    
   

    return (
        <UsernameContext.Provider value={{ username, setUsername }}>
            {props.children}
        </UsernameContext.Provider>
    );
};
