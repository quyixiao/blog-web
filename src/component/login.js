import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import '../css/login.css'

export default class Login extends React.Component{
    render(){
        return (
            <div className="login-page">
                <div className="form">
                    <input type="text" placeholder="邮箱"></input>
                    <input type="password" placeholder="密码"></input>
                    <button >登陆</button>
                    <p className="message">如果没有注册?<a href="/reg">创建一个新的账户</a></p>
                </div>
            </div>
        );
    }
}