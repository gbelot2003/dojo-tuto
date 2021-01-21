import { useState } from 'react'
import BlogList from './BlogList'
const Home = (title) => {

    const [blogs, setBlogs] = useState([
        { title: 'My new Blog', body: "loream ipsum...", author: "Gerardo", id: 1 },
        { title: 'Welcome Party', body: "loream ipsum...", author: "Samuel", id: 2 },
        { title: 'New Dev Tipos', body: "loream ipsum...", author: "Gerardo", id: 3 },
    ]);
    return (
        <div className="home">
            <BlogList blogs={blogs.filter((blog) => blog.author === 'Samuel')} title="Samuel Blogs" />
            <BlogList blogs={blogs.filter((blog) => blog.author === 'Gerardo')} title="Gerardo's Homepage" />
        </div>
    );
}

export default Home;