import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import Login from './component/login'
import Reg from './component/reg'


const Home = ()=>(
  <div>
    <h2>Home !!!</h2>
  </div>
  );


const About = ()=>(
  <div>
    <h2>About ---</h2>
  </div>
);

// Route 负责静态路由
// path 是匹配路径，没有path 的总共
// 
class Root extends React.Component{
    render(){
      return (
        <div>
          <Router>
           <div>
             <ul>
               <li><Link to="/">主页</Link> </li>
               <li><Link to="/about">关于</Link></li>
               <li><Link to="/login">登陆</Link></li>
               <li><Link to="/reg">注册</Link></li>
             </ul>
                <Route path="/login" component={Login}></Route>
                <Route path="/reg" component={Reg}></Route>
                <Route exact path="/" component={Home}></Route>
                <Route path="/about" component={About}></Route>
           </div>
          </Router>
        </div>
      );
    }
}


ReactDom.render(<Root />,document.getElementById('root'))