import React, { useEffect, useState } from 'react'
import Blogs from '../../components/blogs/blogs';
import axios from 'axios'
export default function Homepage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res = await axios.get("/blog/")
                console.log(res.data);
                setPosts(res.data.blogs);
            }
            catch (err) {
                console.log(err);
            }
        };
        fetchPost()
    }, [])
    return (
        <div >


            <div >


                <Blogs posts={posts} />

            </div>
        </div>


    )
}

/*const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res = await axios.get("http://localhost:5000/blog/")
                console.log(res.data);
                setPosts(res.data.blogs);
            }
            catch (err) {
                console.log(err);
            }
        };
        fetchPost()
    }, [])
    console.log({ posts });*/