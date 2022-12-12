import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export default function AddReply(props){

    const location = useLocation();
    const navigate = useNavigate();

    const [reply, setReply] = useState({
        text: '',
        time: new Date(),
        userId: '',
        userName: '',
        questionId: 0
    });
    const onChange = e => {
        let newValue = ({[e.target.name]: e.target.value});
        setReply(rep => ({
            ...rep,
            ...newValue
        }));
    }

    function checkLogin(){
        if((localStorage.getItem("isLoggedLS") === 'false')) 
            navigate("/login")
    }

    const submitHandler = e => {
        checkLogin();

        e.preventDefault();
        
        reply.time = new Date();
        let currentUser = JSON.parse(localStorage.loggedUser);
        reply.userId = currentUser.id;
        reply.userName = currentUser.userName;
        reply.questionId = location.state.questionId;

        console.log(reply);
         axios.post("https://localhost:7212/api/Replies/add", reply)
               .then(res => { console.log(res) })
               .catch(error => { console.log(error) });
    }

    return(
        <div className="AddReply">
            <h2>Reply</h2>
            <form onSubmit={submitHandler}>
                <textarea rows="7" 
                        type="text" 
                        placeholder="Reply text"
                        name="text"
                        onChange={onChange}/>
                <button type="submit">Reply</button>
            </form>
        </div>
    );
}