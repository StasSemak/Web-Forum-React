import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <Link to="/">
                <h1>WebForum</h1>
            </Link>
            <nav>
                <Link to="asktrans">Ask</Link>
                <Link to="search">Search</Link>
                <Link to="profiletrans">Profile</Link>
            </nav>
        </header>
    );
}