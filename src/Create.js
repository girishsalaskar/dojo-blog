import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author }
        
        setIsPending(true);
        fetch('http://localhost:8000/blogs', {
            method:'POST',
            headers:{ "Content-type": "application/json" },
            body: JSON.stringify(blog)
        })
        .then( () => {
            console.log('New blog added!');
            setIsPending(false);
            history.push('/');
        });
        
    }

    return ( 
        <div className="create">
            <h1>Add a new blog</h1>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={ (evt) => setTitle(evt.target.value) }
                />
                <label>Blog Body:</label>
                <textarea
                    required
                    value={body}
                    onChange={ evt => setBody(evt.target.value) }
                ></textarea>
                <label>Blog Author:</label>
                <select
                    value={author}
                    onChange={ evt => setAuthor(evt.target.value) }
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                { !isPending && <button>Add Blog</button> }
                { isPending && <button disabled>Adding Blog...</button> }
            </form>
        </div>
     );
}
 
export default Create;