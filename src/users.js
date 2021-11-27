import React, { createContext, useContext } from 'react';
import {UserCheck} from '../api/api.js';

const UsersContext = createContext();
export const useUser = () => useContext(UsersContext);

export const UserProvider = ({children}) => {
    
    //const [user,setUsers] = useState([]);
    const handleUser = (user_name,password)=>{
        UserCheck(user_name,password)
    }

    return (
        <UsersContext.Provider value={{
            UserCheck:handleUser
        }}>
            {children}
        </UsersContext.Provider>
    );
};

 
