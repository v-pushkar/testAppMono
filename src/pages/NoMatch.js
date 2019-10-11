import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";

function NoMatch() {
  let location = useLocation();

  return (
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">404</h1>
        <p class="lead">
          Not found page: <code>{location.pathname}</code>
        </p>
      </div>
    </div>
  );
}
export default NoMatch;
