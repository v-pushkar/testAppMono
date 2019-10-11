import React, { Component } from "react";
import { ListGroup, Alert } from "react-bootstrap";
import "./List.scss";

class List extends Component {
  render() {
    const List = this.props.data ? (
      this.props.data.map((i, k) => (
        <ListGroup.Item key={k} variant={!(k % 2 == 0) ? "info" : ""}>
          <div className="newsCard">
            <div className="newsText">
              <div>
                <strong>{i.title}</strong>
              </div>
              <div>{i.description}</div>
              <div>
                <a href={i.url} target="_blanck">
                  read more...
                </a>
              </div>
            </div>
            <div className="imgWrapp">
              <img src={i.urlToImage} />
            </div>
          </div>
        </ListGroup.Item>
      ))
    ) : (
      <Alert variant="primary">No news</Alert>
    );
    return <ListGroup>{List}</ListGroup>;
  }
}

export default List;
