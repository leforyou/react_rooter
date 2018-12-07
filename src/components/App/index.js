import React, { Component } from "react";
import "./style.scss";
//var  router = require('react-router-dom');//CommonJS
//import { Router, Route } from 'react-router-dom';//ES6
//import * as routerDom from 'react-router-dom';
//console.log(1111,router,routerDom)


//BrowserRouter,HashRouter,Link,MemoryRouter,NavLink,Prompt,Redirect,Route,Router,StaticRouter,Switch,generatePath,matchPath,withRouter
import {
  NavLink,
  Route,
  Switch
} from 'react-router-dom';



import PoetLiBai from './../PoetLiBai';
import PoetDuFu from './../PoetDuFu';
import PoetLiShangYin from './../PoetLiShangYin';

/*
import LiBai1 from './../LiBai1';
import LiBai2 from './../LiBai2';
import LiBai3 from './../LiBai3';
*/

import NoMatch from './../NoMatch';



//import Header from "./../Header"; //  import Header from "../Header"    <Header />
//import OrderList from "../OrderList";

/*
 <div className="App">
        <h1 className="big-title">Simple SAP</h1>
        <ul className="name">
          <li>
            <Link to="/Header" activeClassName="active">李白</Link>
          </li>
          <li>
            <Link to="/Header" activeClassName="active">杜甫</Link>
          </li>
          <li>
            <Link to="/Header" activeClassName="active">李商隐</Link>
          </li>
        </ul>
        <div className="content">
          {this.props.children}
        </div>
      </div>
*/

class App extends Component {
 

  render() {
    return (
      <div className="app-container">
        <h1>Simple SPA!</h1>
        <div className="nav">
          <ul>
            <li><NavLink activeClassName="selected" to="/PoetLiBai/138">李白</NavLink></li>
            <li><NavLink activeClassName="selected" to="/PoetDuFu">杜甫</NavLink></li>
            <li><NavLink activeClassName="selected" to="/PoetLiShangYin">李商隐</NavLink></li>
            <li><span>一级路由</span></li>
          </ul>
        </div>
        {/* Link、NavLink负责路由选择，Route负责视图展示。 */}
        <Switch>
            <Route exact path={"/"} component={PoetLiBai}></Route>
            <Route exact path={"/PoetLiBai/:id"} component={PoetLiBai}>
              {/*<Route exact path="/LiBai1" component={LiBai1}/>
              <Route exact path="/LiBai2" component={LiBai2}/>
              <Route exact path="/LiBai3" component={LiBai3}/>*/}
            </Route>
            <Route exact path="/PoetDuFu" component={PoetDuFu}/>
            <Route exact path="/PoetLiShangYin" component={PoetLiShangYin}/>
            <Route component={NoMatch}/>
        </Switch>
      </div>
     
    );
  }
}

export default App;
