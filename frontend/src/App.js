import React from "react";
import "./App.css";

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import AboutPage from "./pages/AboutPage";
import BooksPage from "./pages/BooksPage";
import BookPage from "./pages/BookPage";
import CreateBookPage from "./pages/CreateBookPage";
import CreatePostPage from "./pages/CreatePostPage";
import CreateProblemPage from "./pages/CreateProblemPage";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import ProblemsPage from "./pages/ProblemsPage";
import ProblemPage from "./pages/ProblemPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectPage from "./pages/ProjectPage";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/newpost">
          <CreatePostPage />
        </Route>
        <Route path="/newbook">
          <CreateBookPage />
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
        <Route path="/problems">
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
