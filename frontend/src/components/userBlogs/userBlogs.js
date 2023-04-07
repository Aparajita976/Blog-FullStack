import React, { useEffect, useState } from "react";
import axios from "axios";
import Blog from "../blog/blog";
const UserBlogs = () => {
    const [user, setUser] = useState();
    const id = localStorage.getItem("userId");
    /*const sendRequest = async () => {
        const res = await axios
            .get(`http://localhost:5000/blog/user/${id}`)
            .catch((err) => console.log(err));
        const data = await res.data;
        return data;
    };*/
    useEffect(() => {
        const sendRequest = async () => {
            try {
                const res = await axios
                    .get(`/blog/user/${id}`)
                    .catch((err) => console.log(err));
                setUser(res.data.user);
            }
            catch (err) {
                return console.log(err);
            }

        };
        sendRequest();
    }, []);
    console.log(user);
    return (
        <div >
            <div class="container" style={{ marginTop: "2rem" }}>
                <div class="row row-cols-1 row-cols-md-3 g-4">

                    {user &&
                        user.blogs &&
                        user.blogs.map((blog) => (
                            <Blog
                                post={blog}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default UserBlogs;