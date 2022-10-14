import React from "react";

const Home = () => {
    const clickMeHandler = () => {
        console.log('Hello world!');
    }
    const clickMeAgainHandler = (name) => {
        console.log('Hello ' + name);
    }
    return (
        <div className="home">
            <h2>Home page</h2>
            <button onClick={clickMeHandler}>Click Me</button>
            <button onClick={()=>{clickMeAgainHandler('Iron Man')}}>Click Me Again</button>
        </div>
    );
}
 
export default Home;