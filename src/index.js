import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import Login from './component/login';
import Reg from './component/reg';
import { Layout,Menu,Icon,LocaleProvider} from 'antd';
import 'antd/lib/menu/style'
import 'antd/lib/icon/style'
import 'antd/lib/layout/style'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import Pub from './component/pub';
import L from './component/list';
import Post from './component/post';


const {Header,Content,Footer} = Layout;


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
            <Layout>
                <Header>
                    <Menu mode="horizontal" theme="dark" >
                      <Menu.Item key="home">
                        <Link to="/"><Icon type="home" />主页</Link>
                      </Menu.Item>
                      <Menu.Item key="login">
                        <Link to="/login"><Icon type="login" />登陆</Link>
                      </Menu.Item>
                      <Menu.Item key="reg">
                        <Link to="/reg">注册</Link>
                      </Menu.Item>
                      <Menu.Item key="pub">
                        <Link to="/pub">发布</Link>
                      </Menu.Item>
                      <Menu.Item key="list">
                       <Link to="/list"> <Icon type="bars" />列表</Link>
                      </Menu.Item>
                      <Menu.Item key="about">
                        <Link to="/about">关于</Link>
                      </Menu.Item>
                    </Menu>
                </Header>
                <Content style={{padding:'10px 50px'}}>
                  <div style={{background:'#fff',padding:24,minHeight:280}}>
                      <Route exact path="/" component={Home}></Route>
                      <Route path="/login" component={Login}></Route>
                      <Route path="/reg" component={Reg}></Route>
                      <Route path="/pub" component={Pub}></Route>
                      <Route path="/list" component={L}></Route>
                      <Route path="/post/:id" component={Post}></Route>
                      <Route path="/about" component={About}></Route>
                  </div>
                </Content>
                <Footer style={{textAlign:'center'}}>
                  马哥教育 @ 2008
                </Footer>
                </Layout>
          </Router>
        </div>
      );
    }
}


ReactDom.render(<LocaleProvider locale={zhCN}>
  <Root />
</LocaleProvider>,document.getElementById('root'))