import { useState } from "react";
import BlogList from "./BlogList";

function Home() {
  const [name, setName] = useState("mario");
  const [age, setAge] = useState(25);

  const [blogs, setBlogs] = useState([
    {
      title: "My new Website",
      body: "lorem ipsum dolor sit amet, consectetur adip",
      author: "mario",
      id: 1,
    },
    {
      title: "Welcome to the Party",
      body: "lorem ipsum dolor sit amet, consectetur adip",
      author: "cristiano",
      id: 2,
    },
    {
      title: "My new Website",
      body: "lorem ipsum dolor sit amet, consectetur adip",
      author: "andrea",
      id: 3,
    },
  ]);

  const handleClick = () => {
    setName("luigi");
    setAge(30);
  };
  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click me</button>
      <p>
        {name} is {age} years old
      </p>
      <BlogList blogs={blogs} title="All Blogs" />
    </div>
  );
}

export default Home;
