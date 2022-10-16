import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return ( <div className="not-found">
        <h2>Sorry, not found</h2>
        <p>The requested page cannot found</p>
        <Link to="/">Go to Home</Link>
    </div> );
}
 
export default NotFound;