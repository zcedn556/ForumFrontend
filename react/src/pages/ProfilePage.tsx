import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom";

export default function ProfilePage(){
    const { token, logout } = useContext(AuthContext)
    const navigate = useNavigate()
    if(token){
        return (
            <>
                <h2>Profile page</h2>
                <button onClick={() => {
                    logout();
                    navigate("/")
                }}>Logout</button>
            </>
        )
    }
}