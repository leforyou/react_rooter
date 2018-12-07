import React, { Component , Fragment } from "react";
import "./style.scss";

import { Router, Route , Link,NavLink,BrowserRouter, HashRouter, Switch } from 'react-router-dom';

class index extends Component {
  componentDidMount(){
    console.log(this.props.history,this.props.match)
  }
  render() {
    return (
      <Fragment>
        <p className="title">《赠汪伦》</p>
        <p className="desc">日李白乘舟将欲行，忽闻岸上踏歌声。<br/> 桃花潭水深千尺，不及汪伦送我情。</p>
      </Fragment>
    );
  }
}

export default index;
