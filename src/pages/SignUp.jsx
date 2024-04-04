import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signup } from "../../../api/controllers/auth.controller";
import '../css/style.css';

export default function SignUp() {
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (res.ok) {
                const data = await res.json();
                console.log(data); // You can handle the response data here
                // Optionally, you can redirect the user or show a success message
            } else {
                // Handle error responses, maybe show an error message
                console.error('Error:', res.status);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div className="container">
            <input type="checkbox" id="check" />
            <div className="login form">
                <header>Login</header>
                <form>
                    <input type="text" placeholder="Enter your Name" onChange={handleChange} name="name" />
                    <input type="text" placeholder="Enter your email" onChange={handleChange} name="email" />
                    <input type="password" placeholder="Enter your password" onChange={handleChange} name="password" />
                    <a href="#">Forgot password?</a>
                    <button className="button" onClick={handleSubmit}>Login</button>
                </form>
                <div className="signup">
                    <span className="signup">
                        <Link to="/sign-up">
                        Don't have an account? 
                        <label htmlFor="check">Signup</label>
                        </Link>
                    </span>
                </div>
            </div>
            <div className="registration form">
                <header>Signup</header>
                <form>
                    <input type="text" placeholder="Enter your name" onChange={handleChange} name="name" />
                    <input type="text" placeholder="Enter your email" onChange={handleChange} name="email" />
                    <input type="password" placeholder="Create a password" onChange={handleChange} name="password" />
                    <button className="button" onClick={handleSubmit}>Signup</button>
                </form>
                <div className="sign-up">
                    <span className="signup">
                        Already have an account?
                        <Link to="/sign-in">
                            <label htmlFor="check">Login</label>
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    );
}
