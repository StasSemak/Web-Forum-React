export default function Reply(props) {
    return (
        <div className="Reply">
            <div className="reply-header">
                <p className="username">{props.reply.userName}</p>
                <p className="date">{props.reply.time}</p>
            </div>
            <div className="reply-body">
                <p>
                    {props.reply.text}
                </p>
            </div>
        </div>    
    );
}