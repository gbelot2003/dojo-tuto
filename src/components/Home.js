
export const Home = (title) => {

    const handelClick = (e) => {
        console.log("hello", e)
    }

    const handleAgain = (name, e) => {
        console.log(`hello ${name}`, e)
    }

    return (
        <div className="home">
            <h2>This is home</h2>
            <button onClick={handelClick}>Click me</button>
            <button onClick={(e) => { handleAgain("Mario", e) }}>Click me Again</button>
        </div>
    );
}

export default Home;