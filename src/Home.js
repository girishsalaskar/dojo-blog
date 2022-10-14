import React, {useState} from "react";

const Home = () => {
    const [name, setName] = useState('Mario');
    const [age, setAge] = useState(30);
    const clickMeHandler = (e) => {
        setName('Contra');
        setAge(33);
    }

    return (
        <div className="home">
            <h2>Home page</h2>
            { name } - { age }
            <button onClick={clickMeHandler}>Click Me</button>
        </div>
    );
}
 
export default Home;