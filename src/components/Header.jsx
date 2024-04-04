// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <Link to = '/'>
                    <li>
                        <h3>Home</h3>
                    </li>
                    </Link>
                    <Link to = '/services'>
                    <li>
                        <h3>Services</h3>
                    </li>
                    </Link>
                    <Link to = '/about'>
                    <li>
                        <h3>About</h3>
                    </li>
                    </Link>
                    <Link to = 'sign-in'>
                    <li>
                        <h3>Login</h3>
                    </li>
                    </Link>
                    <Link to = '/sign-up'>
                    <li>
                        <h3>Sign Up</h3>
                    </li>
                    </Link>
                </ul>
            </nav>
        </header>
    );
    }