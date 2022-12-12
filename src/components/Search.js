import axios from "axios";
import { useState } from "react";
import QuestionPreview from './QuestionPreview';

export default function Search() {

    const [searchInput, setSearchInput] = useState();
    const [searchResults, setSerachResults] = useState([]);

    const onChange = e => {
        setSearchInput(e.target.value);
    }

    const submitHandler = e => {
        e.preventDefault();

        axios.get(`https://localhost:7212/api/Questions/title/${searchInput}`)
             .then(res => {
                console.log(res);
                if(res.status === 200) setSerachResults(res.data);
             })
             .catch(error => { console.log(error) });
    }

    return (
        <div className="Search">
            <h1>Search</h1>
            <form className="searchForm" onSubmit={submitHandler}>
                <input type="text" 
                       placeholder="Enter your question"
                       onChange={onChange}/>
                <button type="submit">Search</button>
            </form>

            <div className="results-container">
                {searchResults.map(ques => (
                    <QuestionPreview key={ques.id} question={ques}/>
                ))}
            </div>

        </div>    
    );
}