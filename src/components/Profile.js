import axios from 'axios';
import { useEffect, useState } from 'react';
import  { useNavigate } from 'react-router-dom'
import QuestionPreview from './QuestionPreview';

export default function Profile(props) {
    const navigate = useNavigate();
    const [questions, setQuestions] = useState([]);

    let user = JSON.parse(localStorage.loggedUser);

    useEffect(() => {
        axios.get(`https://localhost:7212/api/Questions/user/${user.id}`)
             .then(res => {
                console.log(res);
                if(res.status === 200) setQuestions(res.data);
             })
             .catch(error => { console.log(error) })
    }, [user.id])

    return (
        <div className="Profile">
            <h1>Profile</h1>
            <div className="profile-info">
                <div>
                    <div className="name-id">
                        <p className="username">{user.userName}</p>
                        <p className="id">{user.id}</p>
                    </div>
                    <p className="email">{user.email}</p>
                </div>
                <button onClick={() => navigate("/logout")}>Log out</button>
            </div>
            <h2>My Questions</h2>
            <div>
                {questions.map(ques => (
                    <QuestionPreview key={ques.id} question={ques}/>
                ))}
            </div>
        </div>    
    );
}