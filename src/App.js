import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddQuestion from './components/AddQuestion';
import Header from './components/Header';
import Login from './components/Login';
import Logout from './components/Logout';
import Profile from './components/Profile';
import ProfileTransition from './components/ProfileTransition';
import Register from './components/Register';
import Search from './components/Search';
import AskTransition from './components/AskTransition';
import QuestionPage from './components/QuestionPage';
import StartPage from './components/StartPage';
import Footer from './components/Footer';

let isLogged = localStorage.getItem("isLoggedLS");
if(isLogged === undefined || isLogged === null){
    isLogged = false;
    localStorage.setItem("isLoggedLS", isLogged);
}

let loggedUser = localStorage.getItem("loggedUser");
if (loggedUser === undefined || loggedUser === null) {
    loggedUser = {};
    localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
}
else {
    loggedUser = JSON.parse(localStorage.loggedUser);
}

export default function App(){

    return (
        <div className="App">
            <Header />
            <main>
                
                <Routes>
                    <Route path="/" element={ <StartPage /> } />
                    <Route path="search" element={ <Search /> } />
                    <Route path="register" element={ <Register /> } />
                    <Route path="login" element={ <Login /> } />
                    <Route path="ask" element={ <AddQuestion /> } />
                    <Route path="profile" element={ <Profile /> } />
                    <Route path="logout" element={ <Logout /> } />
                    <Route path="profiletrans" element={ <ProfileTransition /> }/>
                    <Route path="asktrans" element={ <AskTransition /> }/>
                    <Route path="question" element={ <QuestionPage /> }/>
                </Routes> 

            </main>
            <Footer />
        </div>
    );
}