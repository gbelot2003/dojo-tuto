import { useState } from 'react'
import BlogList from './BlogList'
const Home = (title) => {

    const [blogs, setBlogs] = useState([
        { title: 'My new Blog', body: "loream ipsum...", author: "Gerardo", id: 1 },
        { title: 'Welcome Party', body: "loream ipsum...", author: "Samuel", id: 2 },
        { title: 'New Dev Tipos', body: "loream ipsum...", author: "Gerardo", id: 3 },
        { title: 'Next Step Party', body: "loream ipsum...", author: "Samuel", id: 2 },
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }
    return (
        <div className="home">
            <BlogList blogs={blogs} title="Samuel Blogs" handleDelete={handleDelete} />
        </div>
    );
}

export default Home;