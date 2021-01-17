import React from "react";
// import { Counter } from './features/counter/Counter';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Post } from "./features/post/Post";
import { EditPost } from "./features/post/EditPost";
import { AddPost } from "./features/post/AddPost";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <h1>Crud Post</h1>
          <p>
          <Link to={"/post"}><button>Tambah Sawah</button></Link>
          <Link to={"/"}><button>Home</button></Link>
          </p>
          <Switch>
            {/* <Counter /> */}
            {/* <Post /> */}
            <Route exact path={["/"]} component={Post} />
            <Route exact path={["/post"]} component={AddPost} />
            <Route exact path={["/post/:id"]} component={EditPost} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
