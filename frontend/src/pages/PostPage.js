import React from "react";
import { useParams } from "react-router-dom";
import CustomNavbar from "../components/CustomNavbar";

export default function PostPage() {
  const { id } = useParams();
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    fetch(`http://localhost:5000/post/${id}`)
      .then((res) => res.json())
      .then((p) => {
        setPost(p);
      });
  }, []);

  if (post === null) {
    return (
      <div>
        <CustomNavbar />
        <div className="main">Loading post...</div>
      </div>
    );
  }

  if (post.error) {
    return (
      <div>
        <CustomNavbar />
        <div>Error: {post.error}</div>
      </div>
    );
  }

  return (
    <div>
      <CustomNavbar />
      <div style={{ color: "white", background: "darkslategrey", padding: 40 }}>
        {post.title}
        <br />
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
}
