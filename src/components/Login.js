import { Component } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    submitHandler = e => {
        e.preventDefault();
        axios.post('https://localhost:7212/api/Accounts/login', this.state)
            .then(response => {
                    console.log(response); 
                    if(response.status !== 200) return;
                    
                    localStorage.setItem("loggedUser", JSON.stringify(response.data));
                    let isLog = (localStorage.getItem("isLoggedLS") === 'true');
                    localStorage.setItem("isLoggedLS", !isLog);
                })
            .catch(error => { console.log(error) });
    }

    render() {
        const { email, password } = this.state;
        return (
            <div className="Login">
                <div>
                    <h1>Log in</h1>
                    <form className="login-form" onSubmit={this.submitHandler}>
                        <input
                            type="text"
                            placeholder="Email"
                            name="email"
                            value={email}
                            onChange={this.changeHandler}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={password}
                            onChange={this.changeHandler}
                        />
                        <button type="submit">
                            Login
                        </button>
                    </form>
                    <div className="not-registred">
                        <p>Do not have an account?</p>
                        <Link to="/register">Register</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login