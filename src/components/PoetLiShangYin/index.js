import React, { Component } from "react";
import "./style.scss";

//import { Router, Route , Link,BrowserRouter, HashRouter, Switch } from 'react-router-dom';

class index extends Component {
  componentDidMount(){
    console.log(this.props.history,this.props.match)
  }
  
  componentWillUnmount(){
    alert('componentWillUnmount 组件销毁！')
  }
  render() {
    return (
      <div className="poet-content">
        <div className="box">
          <p className="title">《夜雨寄北》</p>
          <p className="desc">君问归期未有期，巴山夜雨涨秋池。<br/>何当共剪西窗烛，却话巴山夜雨时。 </p>
        </div>
      </div>
    );
  }
}

export default index;
