import axios from "axios";
import { useEffect, useState } from "react";

export default function AddQuestion() {

    const [topics, setTopics] = useState([]);

    useEffect(() => {
        axios.get("https://localhost:7212/api/Topics/get")
            .then(response => {
                console.log(response);
                if(response.status === 200) setTopics(response.data);
            })
            .catch(error => { console.log(error) });
    }, [])

    const [ques, setQues] = useState({
        title: "",
        text: "",
        time: new Date(),
        userId: "",
        userName: "",
        topicId: 0,
        topicName: ""
    }); 
    
    const onChange = e => {
        let newValue = ({[e.target.name]: e.target.value});
        setQues(ques => ({
            ...ques,
            ...newValue
        }));
    }

    const submitHandler = e => {
        e.preventDefault();

        let id = topics.find(el => el.name === ques.topicName);
        ques.topicId = id.id;
        ques.time = new Date();
        let currentUser = JSON.parse(localStorage.loggedUser);
        ques.userId = currentUser.id;
        ques.userName = currentUser.userName;
        
        console.log(ques);
        axios.post("https://localhost:7212/api/Questions/add", ques)
              .then(res => { console.log(res) })
              .catch(error => { console.log(error) });
    }

    return (
        <div className="AddQuestion">
            <h1>Ask</h1>
            <form className="ask-form" onSubmit={submitHandler}>
                <select name="topicName" onChange={onChange}>
                    <option value="" disable selected hidden>Select topic</option>
                    {topics.map((topic) => (
                        <option key={topic.id} value={topic.name}>{topic.name}</option>
                    ))}
                </select>
                <input 
                    className="title-input" 
                    type="text" 
                    placeholder="Question title"
                    name="title"
                    onChange={onChange}/>
                <textarea 
                    rows="7" 
                    type="text" 
                    placeholder="Question description"
                    name="text"
                    onChange={onChange}/>
                <button type="submit">Ask</button>
            </form>
        </div>
    );
}