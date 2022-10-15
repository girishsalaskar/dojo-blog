import React from "react";
import { Link } from "react-router-dom";

const BlogList = ({blogs, title, handleDelete}) => {
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            { blogs.map((blog) => {
                return (<div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <Link to={ `/blog/${blog.id}` }>Read</Link>
                </div>);
            }) }
        </div>
     );
}
 
export default BlogList;