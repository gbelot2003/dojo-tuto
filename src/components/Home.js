import { useState } from 'react'
export const Home = (title) => {

    const [name, setName] = useState('Mario');
    const [age, setAge] = useState(15);

    const handelClick = (e) => {
        setName('Gerardo')
        setAge(30)
    }

    return (
        <div className="home">
            <h2>This is home</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handelClick}>Click me</button>
        </div>
    );
}

export default Home;