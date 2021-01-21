import { useState, useEffect } from 'react'
import BlogList from './BlogList'
const Home = (title) => {

    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                if (!res.ok) {
                    throw Error("Server error, the service could no fetch the data from resource")
                }
                return res.json();
            })
            .then((data) => {
                console.log(data)
                setBlogs(data)
                setIsPending(false)
            })
            .catch(err => {
                setError(err.message)
                setIsPending(false)
            })
    }, []);

    return (
        <div className="home">
            { error && <div style={{ "color": "red" }}>{error}</div>}
            { isPending && <div>Loading...</div>}
            { blogs && <BlogList blogs={blogs} title={`Gerardo's Blogs`} />}
        </div >
    );
}

export default Home;