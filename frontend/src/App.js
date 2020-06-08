import React from "react";
import "./App.css";

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BooksPage from "./pages/BooksPage";
import CreatePostPage from "./pages/CreatePostPage";
import CreateProblemPage from "./pages/CreateProblemPage";
import PostPage from "./pages/PostPage";
import PostsPage from "./pages/PostPage";
import ProblemsPage from "./pages/ProblemsPage";
import ProblemPage from "./pages/ProblemPage";
import ProjectsPage from "./pages/ProjectsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/newpost">
          <CreatePostPage />
        </Route>
        <Route path="/newproblem">
          <CreateProblemPage />
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
          <PostsPage />
        </Route>
        <Route path="/problems">
          <ProblemsPage />
        </Route>
        <Route path="/projects">
          <ProblemsPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
      <Redirect from="*" to="/" />
    </BrowserRouter>
  );
}
