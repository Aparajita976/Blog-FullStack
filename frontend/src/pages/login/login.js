import React, { useContext } from 'react'
//import { useFormik } from 'formik';
import axios from "axios";
import { useState } from "react";
//import * as yup from 'yup';
import './login.css';
import { Context } from '../../context/Context'
import { Link } from "react-router-dom"

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    //const passwordRef = useRef();
    const { dispatch, isFetching } = useContext(Context);
    /*const handleChange = (e) => {
        setInputs((prev) => ({
            ...prev,
            [e.target.email]: e.target.value,
        }));
    };*/
    const sendRequest = async () => {
        setError(false);
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios
                .post("/user/login", {

                    email: email,
                    password: password
                })
            console.log(res.data.user._id);
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
            const data = await res.data;
            return data;

        }

        catch (err) {
            dispatch({ type: "LOGIN_FAILURE" });

            console.log(err)
            setError(true);

        }

    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        // send http request

        /*dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios
                .post("http://localhost:5000/user/login", {

                    /*email: email,
                    password: password
                    email: userRef.current.value,
                    password: passwordRef.current.value,
                })
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
            alert("Login Successfull");
            const data = await res.data;
            console.log(data);
            return data;
        }

        catch (err) {
            dispatch({ type: "LOGIN_FAILURE" });
            return console.log(err),
                alert("Unexpected error Occured");
        }*/


        sendRequest().then((data) => localStorage.setItem("userId", data.user._id));
    };
    //console.log(isFetching);
    return (
        <div className='container-fluid details1'>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="row mb-3">

                    <div className="col-sm-10">
                        <input type="email" name="email" className="form form-control" id="email"
                            placeholder="Enter a valid email" value={email}
                            onChange={
                                (e) => setEmail(e.target.value)}
                            /*ref={userRef}*/ />
                    </div>
                </div>
                <div className="row mb-3">

                    <div className="col-sm-10">
                        <input type="password" name="password" className="form form-control" id="password"
                            placeholder="Enter password"
                            value={password} onChange={(e) => setPassword(e.target.value)}
                            /*ref={passwordRef}*/ />
                    </div>
                </div>
                <div>
                    <button className="btn btn-dark  btn-md" type="submit" >Log In</button>
                    <div>
                        {error && <span style={{ color: "red" }}>Something went wrong</span>}
                    </div>
                </div>
                <div>
                    <Link className="btn btn-dark btn-md" style={{ backgroundColor: "maroon" }} to={"/signup"}>
                        Signup
                    </Link>
                </div>
            </form>

        </div >
    )
}

export default Login