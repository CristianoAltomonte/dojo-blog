// import { useState } from "react";
import BlogList from "./BlogList";
import useFetch from "../UseFetch";

function Home() {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:3000/blogs");
  // const [name, setName] = useState("mario");
  // const [age, setAge] = useState(25);

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // };

  // const handleClick = () => {
  //   setName("luigi");
  //   setAge(30);
  // };

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}

      <h2>Homepage</h2>
      {/* <button onClick={handleClick}>Click me</button>
      <p>
        {name} is {age} years old
      </p> */}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
}

export default Home;
