import {createContext,useState,useEffect} from 'react'
import axiosInstance from "../utils/axiosInstance";
import { API_PATHS  } from "../utils/apiPaths";



export const UserContext = createContext();

const UserProvider = ({children})=>{
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const [openAuthForm,setOpenAuthForm] = useState(false);

    useEffect(()=>{
        if(user) return;
        const accessToken = localStorage.getItem("token");
        if(!accessToken){
            setLoading(false);
            return;
        }
        const fetchUser = async () => {
            try {
               const response = await axiosInstance.get(API_PATHS.AUTH.GET_PROFILE);
               setUser(response.data); 
            } catch (error) {
                console.error("user not authenticated",error);
            } finally{
                setLoading(false);
            }
        };
        fetchUser();
    }, []);

    const updateUser = (userdata)=>{
        setUser(userdata);
        localStorage.setItem("token",userdata.token);
        setLoading(false);
    };

    const clearUser = ()=>{
        setUser(null);
        setSearchReasults([])
        localStorage.removeItem("token");
            
    };

     
    return <UserContext.Provider value={{
        user,
        setUser,
        loading,
        updateUser,
        clearUser,
        openAuthForm,
        setOpenAuthForm,

    }}>
        {children}
    </UserContext.Provider>
}

export default UserProvider;