import Question from "./Question";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Reply from "./Reply";
import AddReply from "./AddReply";

export default function QuestionPage(props){
    
    const location = useLocation();
    let questionId = location.state.question.id;

    const [replies, setReplies] = useState([{}]);
    useEffect(() =>{
        axios.get(`https://localhost:7212/api/Replies/question/${questionId}`)
             .then(res => {
                console.log(res);
                if (res.status === 200) setReplies(res.data);  
             })
             .catch(error => { console.log(error) });
    }, [questionId])

    console.log(replies);

    return(
        <div className="QuestionPage">
            <Question question={location.state.question}/>
            <div className="replies-container">
                <h2>Replies</h2>
                {replies.map(rep => (
                    <Reply key={rep.id} reply={rep}/>
                ))}
            </div>
            <div>
                <AddReply/>
            </div>
        </div>
    );
}