import React, { Component ,Fragment } from "react";
import "./style.scss";

import { Router, Route , Link,NavLink,BrowserRouter, HashRouter, Switch } from 'react-router-dom';

class index extends Component {
  componentDidMount(){
    console.log(this.props.history,this.props.match)
  }
  render() {
    return (
      <Fragment>
        <p className="title">《早发白帝城》</p>
        <p className="desc">朝辞白帝彩云间，千里江陵一日还。<br/> 两岸猿声啼不住，轻舟已过万重山。</p>
      </Fragment>
    );
  }
}

export default index;
