import { useNavigate } from "react-router-dom";

export default function Logout(){

    const navigate = useNavigate();

    if((localStorage.getItem("isLoggedLS") === 'false')){
        navigate(-1);
    }

    const logoutHandler = () => {
        localStorage.setItem("isLoggedLS", false);
        localStorage.setItem("loggedUser", JSON.stringify({}));
    }

    return(
        <div className="Logout">
            <h1>Log out</h1>
            <div>
                <p>You surely want to log out?</p>
                <div className="buttons-container">
                    <button onClick={logoutHandler}>Yes</button>
                    <button onClick={() => navigate(-1)}>No</button>
                </div>
            </div>
        </div>
    );
}