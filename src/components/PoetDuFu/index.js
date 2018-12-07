import React, { Component } from "react";
import "./style.scss";

//import { Router, Route , Link,BrowserRouter, HashRouter, Switch } from 'react-router-dom';

class index extends Component {
  componentDidMount(){
    console.log(this.props.history,this.props.match)
  }
  render() {
    return (
      <div className="poet-content">
        <div className="box">
          <p className="title">《绝句》</p>
          <p className="desc">两个黄鹂鸣翠柳,一行白鹭上青天。<br/> 窗含西岭千秋雪,门泊东吴万里船。 </p>
        </div>
      </div>
    );
  }
}

export default index;
