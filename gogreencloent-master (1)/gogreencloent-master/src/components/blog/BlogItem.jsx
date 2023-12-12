import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BlogItem = ({ blogId, title, desc, time }) => {
  const monthName = time
    .slice(5, 7)
    .toLocaleString("default", { month: "long" });
  console.log(time);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const email = userInfo.email;
  const image = userInfo.pic;
  const [comments, setComments] = useState(0);
  const [liked, setLiked] = useState(false);
  const [likedLength, setLikedLength] = useState();
  const [likedItems, setLikedItems] = useState([]);

  useEffect(() => {
    const getLikes = async () => {
      const { data } = await axios.get(
        `http://localhost:3000/api/v1/like/blog/byuser/${email}`
      );
      data.map((value) => {
        if (value.blogId === blogId) {
          setLiked(true);
        }
      });
    };
    getLikes();
  });

  useEffect(() => {
    const fetchLikes = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/api/v1/like/blog/${blogId}`,
          { blogId }
        );
        console.log(data.length);
        setLikedLength(data.length);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchLikes();
  });

  useEffect(() => {
    const fetchComments = async () => {
      const { data } = await axios.get(
        `http://localhost:3000/api/v1/comments/all/${blogId}`
      );
      console.log(data);
      setComments(data.length);
    };
    fetchComments();
  }, []);

  const handleClick = async () => {
    setLiked(!liked);
    if (liked === false) {
      try {
        const { data } = await axios.post(
          "http://localhost:3000/api/v1/like/blog",
          { email, image, blogId }
        );
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    } else {
      try {
        const { data } = await axios.delete(
          "http://localhost:3000/api/v1/like/blog",
          { email, blogId }
        );
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    }
  };
  return (
    <div>
      <section>
        <div
          className="p-1 md:w-1/1 flex flex-col items-start"
          style={{
            marginLeft: "20px ",
            width: "70%",
          }}
        >
          <a className="inline-flex items-center">
            <img
              alt="blog"
              src="https://scontent.fktm12-1.fna.fbcdn.net/v/t39.30808-6/277724083_2781297552177614_4108480607467429418_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Om-r0QKFK08AX8mNC73&_nc_ht=scontent.fktm12-1.fna&oh=00_AT-NHY9kRoUbHkArotAT-KHyuTMz6346w6sIdgQ8iCzoow&oe=62A2B40E"
              className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center "
            />
            <span className="flex-grow flex flex-col pl-4">
              <span className="title-font font-medium text-gray-900">
                Aashish Ghimire
              </span>
              <span
                className="text-gray-700 text-xs tracking-widest mt-0.5"
                style={{ color: "#17B171" }}
              >
                aashish@gmail.com
              </span>
            </span>
          </a>

          <p
            style={{ fontSize: "20px", fontWeight: "400", marginTop: "10px" }}
            className="leading-relaxed mb-1"
          >
            Posted at :
            <span style={{ fontSize: "14px" }}>
              {time.slice(0, 4)}
              {monthName === "01" ? "  January " : null}
              {monthName === "02" ? "  Feb " : null}
              {monthName === "03" ? "  March " : null}
              {monthName === "04" ? "  April " : null}
              {monthName === "05" ? "  May " : null}
              {monthName === "06" ? "  June " : null}
              {monthName === "07" ? "  July " : null}
              {monthName === "08" ? "  August " : null}
              {monthName === "09" ? "  November " : null}
              {monthName === "10" ? "  Oct " : null}
              {monthName === "11" ? "  Sep " : null}
              {monthName === "12" ? "  Dec " : null}
              {time.slice(8, 10)}
            </span>
          </p>
          <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-1 mb-0">
            {title}
          </h2>

          <p className="leading-relaxed mb-8">{desc}</p>
          <div className=" pb-4 mb-4 border-b-2 border-gray-300 mt-auto w-full">
            <span
              className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200"
              onClick={handleClick}
            >
              <h3
                style={{
                  color: "black",
                  padding: "5px",
                  cursor: "pointer",
                  border: "1px solid ",
                  borderRadius: "10px",
                  fontWeight: "600",
                }}
                className={liked ? "liked" : "not__liked"}
              >
                Like
              </h3>
              <h1
                style={{
                  color: "black",
                  marginLeft: "3px",
                  fontSize: "18px",
                  fontWeight: "600",
                }}
                className={liked ? "likedd" : "not__liked"}
              >
                {likedLength}
              </h1>
            </span>
            <Link to={`/comment/${blogId}`}>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <h3
                  style={{
                    color: "black",
                    padding: "5px",
                    cursor: "pointer",
                    border: "1px solid ",
                    borderRadius: "10px",
                    fontWeight: "600",
                  }}
                  className="Comment"
                >
                  comment
                </h3>
                <h1
                  style={{
                    color: "black",
                    marginLeft: "5px",
                    fontSize: "18px",
                    fontWeight: "500",
                  }}
                >
                  {comments}
                </h1>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogItem;
