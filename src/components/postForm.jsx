import { useState, useEffect } from 'react';
import axios from "axios";

const PostForm = () => {
    const [posts, setPost] = useState([]);


    //funzione di gestione chiamate API
    function fetchPosts() {
        axios.get("http://localhost:3000/posts/")
            .then((res) => {
                setPost(res.data);
            })
    }

    useEffect(fetchPosts, []);


    return (

        <>

            {
                posts.map((post) => (
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <img src={post.image} alt={post.title} />
                        <p>{post.content}</p>
                    </div >
                ))

            }
        </>
    )

}



export default PostForm