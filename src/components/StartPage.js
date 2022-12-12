import axios from "axios";
import { useEffect, useState } from "react";
import QuestionPreview from "./QuestionPreview";

export default function StartPage(){

    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        axios.get(`https://localhost:7212/api/Questions/get`)
             .then(res => {
                console.log(res);
                if(res.status === 200) setQuestions(res.data);
             })
             .catch(error => { console.log(error) });
    }, [])

    return(
        <div className="StartPage">
            <h1>Newest questions</h1>
            {questions.map(ques => (
                <QuestionPreview key={ques.id} question={ques}/>
            ))}
        </div>
    );
}