export default function Question(params) {
    return (
        <div className="Question">
            <div className="ques-header">
                <p className="username">{params.question.userName}</p>
                <p className="date">{params.question.time}</p>
            </div>
            <div className="ques-body">
                <div className="title">
                    <h1>{params.question.title}</h1>
                    <p className="topic">{params.question.topicName}</p>
                </div>
                <p>
                    {params.question.text}
                </p>
            </div>
        </div>    
    );
}