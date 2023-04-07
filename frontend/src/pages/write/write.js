import React, { useState } from 'react'
import './write.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function Write() {
    const [title, setTitle] = useState('');
    const [description, setDesc] = useState('');
    const [image, setImage] = useState('');
    const navigate = useNavigate();
    const sendRequest = async () => {
        const res = await axios.post("/blog/add", {
            title,
            description,
            image,
            user: localStorage.getItem("userId")
        })
            .catch((err) => console.log(err));
        const data = await res.data;
        console.log(localStorage.getItem("userId"))
        return data;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest().then((data) => console.log(data)).then(() => navigate("/posts"))
    }
    return (
        <div className='container-fluid box details3'>
            <h1>WRITE A BLOG</h1>
            <form onSubmit={handleSubmit}>

                <div class="row mb-3">

                    <div class="col-sm-10">
                        <input type="text" name="image" class="form form-control form-control3" id="image" src="" alt="Submit"
                            placeholder="Enter an image" value={image}
                            onChange={
                                (e) => setImage(e.target.value)} />
                    </div>
                </div>
                <div class="row mb-3">

                    <div class="col-sm-10">
                        <input type="text" name="title" class="form form-control form-control3" id="title"
                            placeholder="Enter a title" value={title}
                            onChange={
                                (e) => setTitle(e.target.value)} />
                    </div>
                </div>
                <div class="row mb-3">

                    <div class="col-sm-10">
                        <textarea name="description" class="form form-control form-control3" id="description"
                            placeholder="Enter the story" value={description}
                            onChange={
                                (e) => setDesc(e.target.value)} />
                    </div>
                </div>
                <div>
                    <button class="btn btn-dark  btn-md" type="submit">Publish</button>
                </div>

            </form>

        </div >
    )
}
