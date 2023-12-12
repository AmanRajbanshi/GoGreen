import React, { useEffect, useState } from "react";
import "./Blog.css";
import Typewriter from "typewriter-effect";
import BlogItem from "./BlogItem";
import axios from "axios";
import Spinner from "../Spinner";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    const fetchBlogs = async () => {
      setLoader(true);
      const { data } = await axios.get("http://localhost:3000/api/v1/blog");
      try {
        console.log(data);
        setBlogs(data);
        setLoader(false);
      } catch (error) {
        console.log(error.message);
        setLoader(false);
      }
    };

    fetchBlogs();
  }, []);

  console.log(blogs);

  return (
    <div>
      {/* Blog Intro*/}
      {loader && <Spinner />}
      <div className="container">
        <h1
          className="PMS__title__main"
          style={{
            color: "rgb(23, 177, 113)",
            fontSize: "36px",
            marginTop: "50px",
            marginBottom: "50px",
          }}
        >
          <Typewriter
            options={{
              strings: ["Blogs"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
      </div>
      {/* Blogs */}
      {blogs.length === 0 && (
        <h1 style={{ fontSize: "20px", textAlign: "center" }}>
          No blogs to show!!!
        </h1>
      )}
      {blogs
        ? blogs.map((value) => {
            return (
              <>
                <BlogItem
                  blogId={value._id}
                  title={value.title}
                  desc={value.description}
                  time={value.dateOfUpload}
                />
              </>
            );
          })
        : null}
    </div>
  );
};

export default Blog;
