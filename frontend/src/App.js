import React from "react";
import "./App.css";

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import CreatePostPage from "./pages/CreatePostPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/newpost">
          <CreatePostPage />
        </Route>
      </Switch>
      <Redirect from="*" to="/" />
    </BrowserRouter>
  );
}

export default App;
