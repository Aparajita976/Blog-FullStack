import React from 'react';

import Blog from '../blog/blog';
import './blogs.css';
export default function Blogs({ posts }) {
    return (
        <div class=" container" style={{
            marginBottom: "1.2rem", marginTop: "2rem"
        }} >

            <div class=" row row-cols-1 row-cols-md-3 g-4 ">
                {posts.map((p) => (
                    <Blog post={p} />
                ))}
            </div>
        </div>


    );
}
