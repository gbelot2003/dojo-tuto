import { useState, useEffect } from 'react'
import BlogList from './BlogList'
const Home = (title) => {

    const [name, setName] = useState('mario');

    const [blogs, setBlogs] = useState([
        { title: 'My new Blog', body: "loream ipsum...", author: "Gerardo", id: 1 },
        { title: 'Welcome Party', body: "loream ipsum...", author: "Samuel", id: 2 },
        { title: 'New Dev Tipos', body: "loream ipsum...", author: "Gerardo", id: 3 },
        { title: 'Next Step Party', body: "loream ipsum...", author: "Samuel", id: 4 },
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log("uses Effects ran")
        console.log(name)
    }, [name]);

    return (
        <div className="home">
            <button onClick={() => { setName("Gerardo") }}>Change Name</button>
            <BlogList blogs={blogs} title={`${name} Blogs`} handleDelete={handleDelete} />
        </div>
    );
}

export default Home;