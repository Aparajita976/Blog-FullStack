import React, { useState, useEffect, useContext } from 'react';
import "./blogdetails.css";
import { AiFillDelete } from 'react-icons/ai'
import { FiEdit } from 'react-icons/fi'
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { Context } from '../../context/Context';
export default function BlogDetails() {
    const { user } = useContext(Context);
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    //console.log(path);
    const [post, setPost] = useState({});
    const [title, setTitle] = useState("");
    const [description, setDesc] = useState("");
    const [update, setUpdate] = useState(false);
    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res = await axios.get(`/blog/${path}`)
                console.log(res.data);
                setPost(res.data.blog);
                setTitle(res.data.blog.title);
                setDesc(res.data.blog.description);
            }
            catch (err) {
                console.log(err);
            }
        };
        fetchPost()
    }, [path])
    const handleDelete = async () => {
        try {
            const res = await axios.delete(`/blog/${path}`, {
                data: { user: localStorage.getItem("userId") }
            })
            window.location.replace("/");
        }
        catch (err) { }
    }
    const handleUpdate = async () => {
        console.log(title);
        console.log(description);
        try {
            await axios.put(`/update/${path}`, {


                title,
                description

            });
            setUpdate(false)
        } catch (err) { }
    };



    return (
        <div className="container ">
            <div className="singlePostWrapper">
                <img className='blogImg' src={post.image}></img>
                {
                    update ?

                        <input type='text' class="form control1 form-control " placeholder="Enter the title" onChange={(e) => setTitle(e.target.value)} /> : (


                            <>
                                <div >
                                    <span className='blogTitle mx-auto' style={{ display: "block" }}>{post.title}</span>
                                </div>

                                {post.user === (user && localStorage.getItem("userId")) && (
                                    <div className='icons'>
                                        <i class="navbar-brand navbar-brand2 icon " onClick={handleDelete}><AiFillDelete /></i>
                                        <i class="navbar-brand navbar-brand2 icon " onClick={
                                            () => setUpdate(true)}><FiEdit /></i>
                                    </div>)}
                            </>

                        )}
                {/*<span>
                        Author:
                        <b className="singlePostAuthor">
                            <Link className="link" to="/posts?username=Safak">
                                Safak
                            </Link>
                        </b>
                    </span>*/}
                {
                    update ? <textarea class="form control1 form-control" placeholder="Enter the text" onChange={(e) => setDesc(e.target.value)} /> :
                        (<div className='container'>
                            <p className="blogText"> {post.description}</p>
                        </div>)
                }
                {update && (

                    <Link className="btn btn-dark btn-md" style={{ backgroundColor: "maroon" }} to={"/"} onClick={handleUpdate}>
                        Update
                    </Link>
                )}
            </div>

        </div >

    )
}

