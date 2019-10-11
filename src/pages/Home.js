import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";

function Home() {
  let location = useLocation();

  return (
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Home page</h1>
        <p class="lead">
          Hello world!)))
        </p>
      </div>
    </div>
  );
}
export default Home;
