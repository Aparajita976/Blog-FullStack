import React, { useContext, useState } from 'react'
import './settings.css';
import { Context } from '../../context/Context';
import axios from "axios";
import jwt_decode from "jwt-decode";
import { Link } from 'react-router-dom';
const Settings = () => {

    const { user } = useContext(Context);
    const { dispatch } = useContext(Context);
    const path = JSON.parse(localStorage.getItem("user"));
    const id = localStorage.getItem("userId");
    //const [user, setUser] = useState(null);
    const [success, setSuccess] = useState(false);
    console.log({ path });
    //console.log({ path.accessToken });
    /*const refreshToken = async () => {
        try {
            const res = await axios.post("http://localhost:5000/user/refresh", { token: user.refreshToken });
            setUser({
                ...user,
                accessToken: res.data.user.accessToken,
                refreshToken: res.data.user.refreshToken,
            });
            return res.data;
        } catch (err) {
            console.log(err);
        }
        try {
            const res = await axios.post("http://localhost:5000/user/refresh", { token: path.Refreshtoken });
            console.log(res.data);
            const data = await res.data;
            return data;

        } catch (err) {
            console.log(err);
        }
    };*/

    /*const axiosJWT = axios.create()

    axiosJWT.interceptors.request.use(
        async (config) => {
            let currentDate = new Date();
            const decodedToken = jwt_decode(user.accessToken);
            if (decodedToken.exp * 1000 < currentDate.getTime()) {
                const data = await refreshToken();
                config.headers["authorization"] = "Bearer " + data.accessToken;
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );*/

    const handleDelete = async () => {


        localStorage.setItem("userId", null)
        try {
            //const data=
            const res = await axios.post("/user/refresh", { token: path.Refreshtoken });
            console.log(res.data);
            const res1 = await axios.delete(`/user/${id}`, {
                headers: {
                    authorization: "Bearer " + res.data.newAccressToken
                },

            })
            //window.location.replace("")
            dispatch({ type: "DELETE_SUCCESS" });
            alert("Account Deleted")

            // window.location.replace("");


        }
        catch (err) { return console.log(err); }
    }
    return (

        <>{
            user &&

            <div class="container">
                <div class="card card1 contain1  mx-auto">
                    <div style={{ margin: "auto" }}>
                        <h1 style={{ margin: "auto", marginBottom: "10%" }}>Account Details</h1>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-sm-3">
                                <h6 class="mb-0" style={{ fontSize: "1.5rem" }}>Full Name</h6>
                            </div>
                            <div class="col-sm-9 text-secondary" style={{ fontSize: "1.5rem" }}>
                                {path.user.name}
                            </div>
                        </div>
                        <hr />
                        <div class="row">
                            <div class="col-sm-3">
                                <h6 class="mb-0" style={{ fontSize: "1.5rem" }}>Email</h6>
                            </div>
                            <div class="col-sm-9 text-secondary" style={{ fontSize: "1.5rem" }}>
                                {path.user.email}                        </div>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>}
            <Link class=" nav-item btn btn-dark btn-md btn1 mx-auto button " onClick={handleDelete} to="/">Delete Account

            </Link >
        </>


    )
}
export default Settings;
// <Link class="nav-link nav-link1" onClick={handleLogout} to="">Logout</Link>