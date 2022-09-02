import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { blogs } from "./data";
const BlogDetail = () => {
  const { id } = useParams();

  const [author, setauthor] = useState("");
  const [title, settitle] = useState("");
  const [details, setdetails] = useState("");
  useEffect(() => {
    const thisBlog = blogs.find((blog) => {
      return blog.id === parseInt(id);
    });
    settitle(thisBlog.title);
    setauthor(thisBlog.author);
    setdetails(thisBlog.details);
  }, []);
  return (
    <div className="container --p">
      <h1 className="--text-center">Title:{title}</h1>
      <hr></hr>
      <p>Author:{author}</p>
      <p>{details}</p>
      <p>
        <Link to="/blogs" className=" --color-primary">
          {`<<<Back to blogs`}
        </Link>{" "}
      </p>
    </div>
  );
};

export default BlogDetail;
