import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import "./topbar.css";
import { Context } from '../../context/Context';
const Topbar = () => {
    const { user } = useContext(Context);
    const { dispatch } = useContext(Context);
    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
        localStorage.setItem("userId", null);
        alert("Logged Out successfully")
    }
    return (
        <nav class="navbar navbar-expand-lg  navbar-light">
            <div class='container'>
                <span class="navbar-brand1">BLOG</span>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul class="navbar-nav ">
                        <li class="nav-item nav-item1"><Link class="nav-link nav-link1" to="/">Home</Link></li>

                        {user &&
                            <>{<li class="nav-item nav-item1"><Link class="nav-link nav-link1" to="/myblog">MyBlog</Link></li>}
                                <li class="nav-item nav-item1"><Link class="nav-link nav-link1" to="/write">Write</Link></li></>
                        }
                    </ul>
                </div>
                <div class="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo01">
                    {user ?
                        (<ul class="navbar-nav">
                            <li class="nav-item nav-item1"><Link class="nav-link nav-link1" to="/settings"><img class="img" src="https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807__340.png" alt="error"></img></Link></li>
                            <li class="nav-item nav-item1"><Link class="nav-link nav-link1" onClick={handleLogout} to="">Logout</Link></li>
                        </ul>) :
                        (
                            <ul class="navbar-nav">
                                <li class="nav-item nav-item1">
                                    <Link class="nav-link nav-link1" to="/login">
                                        Login
                                    </Link>
                                </li>
                                <li class="nav-item nav-item1">
                                    <Link class="nav-link nav-link1" to="/signup">
                                        Signup
                                    </Link>
                                </li>
                            </ul>
                        )
                    }
                </div >
            </div>
        </nav >
    )
}

export default Topbar