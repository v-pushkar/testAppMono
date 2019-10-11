import React, { Component } from "react";
import { Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Paginati.scss";

class Paginati extends Component {
  render() {
    let items2 = [];
    for (let number = 1; number <= this.props.numbers; number++) {
      items2.push(
        <li
          className={`page-item ${
            number - 1 === this.props.active ? "active" : ""
          }`}
          key={number}
          active={number === this.props.active}
        >
          <Link className="page-link" to={`/news/:${number}`}>
            {number}
          </Link>
        </li>
      );
    }
    return (
      <div className="paginationWrapp">
        <nav aria-label="Page navigation example" className="pagination-sm">
          <ul className="pagination justify-content-center">{items2}</ul>
        </nav>
      </div>
    );
  }
}

export default Paginati;
