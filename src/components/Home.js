import { useState, useEffect } from "react";
import BlogList from "./BlogList";

function Home() {
  const [name, setName] = useState("mario");
  const [age, setAge] = useState(25);

  const [blogs, setBlogs] = useState(null);

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
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
      });
  }, []);

  return (
    <div className="home">
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
