import React, { Component } from "react";
import "./style.scss";

import { Route ,NavLink, Switch } from 'react-router-dom';

import LiBai1 from './../LiBai1';
import LiBai2 from './../LiBai2';
import LiBai3 from './../LiBai3';

class index extends Component {
  constructor(props){
    super(props);
    let url = this.props.match.path;
    url = url.replace(/\/:id/,"");
    this.state = {
      url:url
    }
  }
  componentDidMount(){
    console.log(this.props.history,this.props.match)
  }
  render() {
    return (
      <div className="poet-content">
        <div className="titles">
          <NavLink activeClassName="selected" to={`${this.state.url}/LiBai1`}>《望庐山瀑布》</NavLink>
          <NavLink activeClassName="selected" to="/PoetLiBai/LiBai2">《早发白帝城》</NavLink>
          <NavLink activeClassName="selected" to="/PoetLiBai/LiBai3">《赠汪伦》</NavLink>
          <span>二级路由</span>
        </div>
        <div className="box">
          <Switch>
              <Route exact path="/PoetLiBai/LiBai1" component={LiBai1}/>
              <Route exact path="/PoetLiBai/LiBai2" component={LiBai2}/>
              <Route exact path="/PoetLiBai/LiBai3" component={LiBai3}/>
          </Switch>{/**/}
        </div>
      </div>
    );
  }
}

export default index;
