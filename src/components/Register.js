import { Component } from "react";
import axios from 'axios';

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            username: '',
            password: ''
        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    submitHandler = e => {
        e.preventDefault();
        axios.post('https://localhost:7212/api/Accounts/register', this.state)
            .then(response => { console.log(response) })
            .catch(error => { console.log(error) });
    }

    render() {
        const { email, username, password } = this.state;
        return (
            <div className="Register">
                <div>
                    <h1>Register</h1>
                    <form className="register-form" onSubmit={this.submitHandler}>
                        <input
                            type="text"
                            placeholder="Email"
                            name="email"
                            value={email}
                            onChange={this.changeHandler}
                        />
                        <input
                            type="text"
                            placeholder="Username"
                            name="username"
                            value={username}
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
                            Register    
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Register

//export default function Register() {
//    return (
//        <div className="Register">
//            <div>
//                <h1>Register</h1>
//                <form className="register-form">
//                    <input type="text" placeholder="Email"></input>
//                    <input type="text" placeholder="Username"></input>
//                    <input type="password" placeholder="Password"></input>
//                    <button>Register</button>
//                </form>
//            </div>
//        </div>
//    );
//}