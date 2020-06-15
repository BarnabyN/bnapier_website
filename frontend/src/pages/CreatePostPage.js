import React from "react";
import { useHistory } from "react-router-dom";
import CustomNavbar from "../components/CustomNavbar";
import { Button, Form, Input } from "reactstrap";
import dbstring from "../constants.js";

// CKEditor imports
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import CKFinder from "@ckeditor/ckeditor5-ckfinder";

require("dotenv").config();

export default function HomePage() {
  const history = useHistory();

  const [title, setTitle] = React.useState("");
  const [subtitle, setSubtitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [tags, setTags] = React.useState([]);
  const [tagslist, setTagslist] = React.useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    fetch(dbstring + "/newpost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        subtitle,
        tags,
        content,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      })
      .then(history.push("/newpost"));
  }

  React.useEffect(() => {
    fetch(dbstring + "/tags")
      .then((res) => res.json())
      .then((data) => data.alltags)
      .then((data) => {
        setTagslist(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="reactWrapper">
      <CustomNavbar />
      <div className="content">
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            placeholder="Subtitle"
            onChange={(e) => setSubtitle(e.target.value)}
          />
          <Input
            placeholder="Tags"
            onChange={(e) => setTags(e.target.value.split(","))}
          />
          <ul>
            {tagslist.map((t) => (
              <li>{t}</li>
            ))}
          </ul>
          <div style={{ marginTop: "20px", marginBottom: "20px" }}>
            <CKEditor
              editor={ClassicEditor}
              // config={editorConfig}
              data={content}
              onChange={(event, editor) => {
                const data = editor.getData();
                setContent(data);
              }}
            />
            {/* <textarea id="#editor" /> */}
          </div>
          <Button variant="contained" type="submit">
            Post
          </Button>
        </Form>
        {content}
      </div>
    </div>
  );
}
