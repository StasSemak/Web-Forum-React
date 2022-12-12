import { useNavigate } from "react-router-dom";

export default function QuestionPreview(props){

    const navigate = useNavigate();

    const navigateToQuestion = () => {
        navigate("/question", {
            state: {
                question: props.question
            }
        });
    }

    return(
        <div className="QuestionPreview">
            <div className="ques-header">
                <p className="username">{props.question.userName}</p>
                <p className="date">{props.question.time}</p>
            </div>
            <div className="ques-prew-body">
                <div className="title">
                    <h1>{props.question.title}</h1>
                    <p className="topic">{props.question.topicName}</p>
                </div>
            </div>
            <div className="ques-footer">
                <button className="open-btn" onClick={navigateToQuestion}>
                    Open
                </button>
            </div>
        </div>
    );
}