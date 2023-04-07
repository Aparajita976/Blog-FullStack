import React from 'react'
//import { useFormik } from 'formik';
import { useState } from "react";
import { Link } from "react-router-dom";
//import * as yup from 'yup';
import './signup.css'
import axios from "axios";
/*const validationSchema = yup.object({
    name: yup.string().min(2, "name must have at least two characters").required(),
    email: yup.string().email().required(),
    password: yup.string().min(6, "name must have at least six characters").required()
})
function Signup() {

    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);


    const onSubmit = async (values, { resetForm }) => {
        /*console.log(values);
          const { name, ...data } = values;
         const response = await axios.post("http://localhost:5000/user/signup", data)
             .catch((err) => {
                 if (err && err.response) setError(err.response.data.message);
                 setSuccess(null);
             });
 
         if (response && response.data) {
             setError(null);
             setSuccess(response.data.message);
             formik.resetForm();
         }
         if (setSuccess != null) {
             alert("registration successfull");
        const res = await axios
            .post("http://localhost:5000/user/signup", {
                name: values.name,
                email: values.email,
                password: values.password,
            })
            .catch((err) => console.log(err));
        const data = await res.data;
        return data;
        fetch("http://localhost:5000/user/signup", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({


                name: values.name,
                email: values.email,
                password: values.password

            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "userRegister");
                if (data.status == "ok") {
                    alert("Registration Successful");
                } else {
                    alert("Something went wrong");
                }
            });
    }


    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: ''
        },
        onSubmit,
        validationSchema: validationSchema,
    })*/
const Signup = () => {
    const [error, setError] = useState(false);
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: "",
    });
    const handleChange = (e) => {
        setInputs((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };
    const sendRequest = async () => {
        setError(false);
        try {
            const res = await axios
                .post("/user/signup", {
                    name: inputs.name,
                    email: inputs.email,
                    password: inputs.password
                })
            // const data = await res.data;
            //return data;
            const data = await res.data;
            window.location.replace("/login");
            return data;
        }
        catch (err) {
            return console.log(err),
                setError(true);
        }
        // const data = await res.data;
        //return data;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // send http request

        sendRequest()


    };

    return (
        <div className='container-fluid details2'>
            <h1>SIGN UP</h1>
            <form onSubmit={handleSubmit}>
                <div className="row mb-3">

                    <div className="col-sm-10">
                        <input type="text" name="name" className="form-control" id="name"
                            placeholder="Enter your name" onChange={handleChange} value={inputs.name} />

                    </div>
                </div>
                <div className="row mb-3">

                    <div className="col-sm-10">
                        <input type="email" name="email" className="form-control" id="email"
                            placeholder="Enter a valid email" onChange={handleChange} value={inputs.email} />

                    </div>
                </div>
                <div className="row mb-3">

                    <div className="col-sm-10">
                        <input type="password" name="password" className="form-control" id="password"
                            placeholder="Enter password" onChange={handleChange} value={inputs.password} />

                    </div>
                </div>
                <div>
                    <button className="btn btn-dark  btn-md" type="submit">Register</button>

                </div>
                <div>
                    {error && <span style={{ color: "red" }}>Something went wrong</span>}
                </div>
                <div>
                    <Link className="btn btn-dark btn-md" style={{ backgroundColor: "maroon" }} to={"/login/"}>
                        Login
                    </Link>
                </div>

            </form >

        </div >
    )
}

export default Signup;
//{formik.touched.name && formik.errors.name && <span style={{ color: 'red' }}>{formik.errors.name}</span>}