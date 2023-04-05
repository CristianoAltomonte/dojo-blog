import { useState, useEffect } from "react";
import BlogList from "./BlogList";

function Home() {
  const [name, setName] = useState("mario");
  const [age, setAge] = useState(25);
  const [blogs, setBlogs] = useState(null);
  const [isPending, setPending] = useState(true);
  const [error, setError] = useState(null);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  const handleClick = () => {
    setName("luigi");
    setAge(30);
  };

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        if (!res.ok) {
          // error coming back from server
          throw Error("could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setPending(false);
        setError(null);
      })
      .catch((err) => {
        // auto catches network / connection error
        setPending(false);
        setError(err.message);
      });
  }, []);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}

      <h2>Homepage</h2>
      <button onClick={handleClick}>Click me</button>
      <p>
        {name} is {age} years old
      </p>
      {blogs && (
        <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      )}
    </div>
  );
}

export default Home;
