import  { Navigate } from 'react-router-dom'

export default function ProfileTransition(){
    if((localStorage.getItem("isLoggedLS") === 'false')){
        return <Navigate to="/login"/>
    }
    else return <Navigate to="/profile"/>
}