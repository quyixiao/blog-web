import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";


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
                <Route exact path="/" component={Home}></Route>
                <Route path="/about" component={About}></Route>
           </div>
          </Router>
        </div>
      );
    }
}


ReactDom.render(<Root />,document.getElementById('root'))