import React, {useState, useEffect} from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter( blog => blog.id!==id );
        setBlogs(newBlogs);
    }

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setBlogs(data);
                setIsLoading(false);
            })
    }, []);

    return (
        <div className="home">
            { isLoading && <div>Loading...</div> }
            { blogs && <BlogList blogs={blogs} title={'All blogs'} handleDelete={handleDelete} /> }
        </div>
    );
}
 
export default Home;