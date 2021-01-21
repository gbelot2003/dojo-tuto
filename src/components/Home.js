import { useState } from 'react'
import BlogList from './BlogList'
const Home = (title) => {

    const [blogs, setBlogs] = useState([
        { title: 'My new Blog', body: "loream ipsum...", author: "Gerardo", id: 1 },
        { title: 'Welcome Party', body: "loream ipsum...", author: "Gerardo", id: 2 },
        { title: 'New Dev Tipos', body: "loream ipsum...", author: "Gerardo", id: 3 },
    ]);
    return (
        <div className="home">
            <BlogList blogs={blogs} title="Blogs Homepage" />

        </div>
    );
}

export default Home;