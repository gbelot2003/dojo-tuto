import { useState } from 'react'
export const Home = (title) => {

    const [blogs, setBlogs] = useState([
        { title: 'My new Blog', body: "loream ipsum...", author: "Gerardo", id: 1 },
        { title: 'Welcome Party', body: "loream ipsum...", author: "Gerardo", id: 2 },
        { title: 'New Dev Tipos', body: "loream ipsum...", author: "Gerardo", id: 3 },
    ]);
    return (
        <div className="home">
            <h2>Homepage</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
    );
}

export default Home;