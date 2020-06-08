import React from "react";
import { useHistory, Link } from "react-router-dom";
import CustomNavbar from "../components/CustomNavbar";
require("dotenv").config();

export default function HomePage() {
  const history = useHistory();

  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((p) => {
        setPosts(p.posts.reverse());
        console.log(p);
      });
  }, []);

  return (
    <div>
      <CustomNavbar />
      <div className="main">
        {posts.map((p) => {
          return (
            <div style={{ borderBottom: "1px solid lightgrey", padding: 10 }}>
              {/* <Link to={`/post/${p.id}`}>{p.title}</Link> */}
              <br />
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to={`/post/${p.id}`}
              >
                <h2>{p.title}</h2>
              </Link>
              <h5>
                <i>{p.subtitle}</i>
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
}
