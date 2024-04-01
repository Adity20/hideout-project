// eslint-disable-next-line no-unused-vars
import React from "react";

export default function Header() {
    return (
        <header>
        <nav>
            <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/sign-in">Sign In</a>
            </li>
            <li>
                <a href="/sign-out">Sign Out</a>
            </li>
            <li>
                <a href="/about">About</a>
            </li>
            <li>
                <a href="/profile">Profile</a>
            </li>
            </ul>
        </nav>
        </header>
    );
    }