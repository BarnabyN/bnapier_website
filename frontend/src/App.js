import React from "react";

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import AboutPage from "./pages/AboutPage";
import BooksPage from "./pages/BooksPage";
import CreatePostPage from "./pages/CreatePostPage";
import PostPage from "./pages/PostPage";
import AllPostsPage from "./pages/AllPostsPage";
import AdminLoginPage from "./pages/AdminLoginPage";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/newpost">
          <CreatePostPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/books">
          <BooksPage />
        </Route>
        <Route path="/post/:id">
          <PostPage />
        </Route>
        <Route path="/posts">
          <AllPostsPage />
        </Route>
        <Route path="/admin-login">
          <AdminLoginPage />
        </Route>
        <Redirect from="*" to="/posts" />
      </Switch>
    </BrowserRouter>
  );
}
