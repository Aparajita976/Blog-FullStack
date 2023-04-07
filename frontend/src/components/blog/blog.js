
import React from 'react';
import { Link } from 'react-router-dom';
import "./blog.css";
export default function blog({ post }) {
    return (

        <div class="col">
            <div class="card card-1 h-100 " >
                <img src={post.image} alt="..."></img>
                <div >
                    <Link class="nav-link nav-link2 card-title card-title1" to={`/post/${post._id}`}>
                        {post.title}
                    </Link>

                    <p class="card-text card-text1" >{post.description}</p>

                </div>
            </div>
        </div>

    )
}
/* <img src="post.image" alt="..."></img>
                <div >
                    <h5 >{post.title}</h5>
                    <p >{post.description}</p>
                </div>*/