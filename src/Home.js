import React from "react";

const Home = () => {
    const clickMeHandler = (e) => {
        console.log('Hello world!', e);
    }
    const clickMeAgainHandler = (name, e) => {
        console.log('Hello ' + name, e);
    }
    return (
        <div className="home">
            <h2>Home page</h2>
            <button onClick={clickMeHandler}>Click Me</button>
            <button onClick={(e)=>{clickMeAgainHandler('Iron Man', e)}}>Click Me Again</button>
        </div>
    );
}
 
export default Home;