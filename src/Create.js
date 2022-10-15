import React, { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');

    return ( 
        <div className="create">
            <h1>Add a new blog</h1>
            <form>
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
                <button>Add Blog</button>
            </form>
        </div>
     );
}
 
export default Create;