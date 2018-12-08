import React, { Component , Fragment} from "react";
import "./style.scss";

//import { Router, Route , Link,NavLink,BrowserRouter, HashRouter, Switch } from 'react-router-dom';

class index extends Component {
  componentDidMount(){
    console.log(this.props.history,this.props.match)
  }
  render() {
    return (
      <Fragment>
        <p className="title">《望庐山瀑布》</p>
        <p className="desc">日照香炉生紫烟，遥看瀑布挂前川。<br/> 飞流直下三千尺，疑是银河落九天。</p>
      </Fragment>
    );
  }
}

export default index;
