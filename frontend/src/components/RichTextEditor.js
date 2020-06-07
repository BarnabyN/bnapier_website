import React from "react";
import ReactDOM from "react-dom";
import "draft-js/dist/Draft.css";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import MUIRichTextEditor from "mui-rte";

export default function RichTextEditor(props) {
  const defaultTheme = createMuiTheme();

  Object.assign(defaultTheme, {
    overrides: {
      MUIRichTextEditor: {
        root: {
          marginTop: 20,
          marginBottom: 20,
        },
        editor: {
          borderBottom: "1px solid gray",
          borderTop: "1px solid gray",
          height: "100px",
        },
      },
    },
  });
  return (
    <div>
      <MuiThemeProvider theme={defaultTheme}>
        <MUIRichTextEditor
          label="Type something here..."
          editorState={props.editorState}
          onChange={props.onChange}
        />
      </MuiThemeProvider>
    </div>
  );
}
