import React, { Component } from "react";
import { Form, Alert } from "react-bootstrap";
import Paginati from "./../../components/Paginati";
import List from "./../../components/List";
import Axios from "axios";
import "./Main.scss";

const URL =
  "http://newsapi.org/v2/top-headlines?apiKey=3d601e38e873486c8424ef45825eee0f&country=pl";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serchResalts: 0,
      serchStart: false,
      activlist: 0,
      resData: [],
      data: [],
      listPages: 1
    };
    this.handleSerch = this.handleSerch.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (
      nextProps.match.params.number !== this.props.match.params.number &&
      nextProps.match.params.number !== undefined
    ) {
      this.setState({
        activlist: Number(nextProps.match.params.number.replace(":", "") - 1)
      });
    }
  }

  componentDidMount() {
    Axios({
      method: "GET",
      url: URL,
      headers: {
        "Content-Type": "application/json, charset=utf-8"
      }
    })
      .then(res => {
        const dt = res.data.articles;
       
        let array = dt;
        let size = 5;
        let subarray = [];
        for (let i = 0; i < Math.ceil(array.length / size); i++) {
          subarray[i] = array.slice(i * size, i * size + size);
        }
        

        this.setState({
          resData: res.data.articles,
          data: subarray,
          listPages: subarray.length
        });
        console.log("dsts", this.state.data[0]);
      })
      .catch(error => {
        console.log(error);
      });    
  }

  handleSerch(e) {
    console.log("input:", e.target.value);
    let text = e.target.value;
    let arr = this.state.resData;
    let res = arr.filter(it => new RegExp(text, "i").test(it.description));    
    let array = res;
    let size = 5;
    let subarray = [];
    for (let i = 0; i < Math.ceil(array.length / size); i++) {
      subarray[i] = array.slice(i * size, i * size + size);
    }

    this.setState({
      serchStart: text.length,
      serchResalts: res.length,
      data: subarray,
      listPages: subarray.length
    });
  }
  render() {
    return (
      <div className="mainContent">
        <div className="container">
          <Paginati
            numbers={this.state.listPages}
            active={this.state.activlist}
          />
          <div className="serchBlock">
            <div className="serchWrap">
              <Form.Control
                type="text"
                placeholder="Enter text hear"
                onChange={this.handleSerch}
              />
            </div>
            <div className="alertWrap">
              {this.state.serchStart ? (
                this.state.serchResalts ? (
                  <Alert variant="primary">
                    Found {this.state.serchResalts} news
                  </Alert>
                ) : (
                  ""
                )
              ) : (
                ""
              )}
            </div>
          </div>

          <List
            data={this.state.data[this.state.activlist]}
            active={this.state.activlist}
            lists={this.state.listPages}
          />
          <Paginati
            numbers={this.state.listPages}
            active={this.state.activlist}
          />
        </div>
      </div>
    );
  }
}

export default Main;
