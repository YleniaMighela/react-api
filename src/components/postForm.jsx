import { useState, } from 'react';
import axios from "axios";

const PostsForm = () => {
    const [post, setPost] = useState([]);


    //funzione di gestione chiamate API
    function fetchPosts() {
        axios.get("http://localhost:3000/posts/")
            .then((res) => {
                console.log(res.data);
            }


            )
    }
}

export default postForm