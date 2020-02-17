import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import '../css/login.css'
import UserSerivce from '../service/user'

export default class Login extends React.Component{
    constructor(props){
        super();
        this.service = new UserSerivce();
    }
    handleClick(event){
        event.preventDefault();
        console.log('----------------------')
        console.log(event.target)
        console.log(event.target.form)
        console.log(event.target.form[0])
        console.log(event.target.form[1])
        console.log('++++++++++++++++++++++')
        let fm = event.target.form
        let email = fm[0].value;
        let password = fm[1].value;
        console.log(email,password)
        let ret = this.service.login(email,password)
        

    }


    render(){
        console.log('11111111111111111111111111')
        return (
            <div className="login-page">
                <div className="form">
                   <form className="login-form">
                        <input type="text" placeholder="邮箱"></input>
                        <input type="password" placeholder="密码"></input>
                        <button onClick={this.handleClick.bind(this)}>登陆</button>
                        <p className="message">如果没有注册?<a href="/reg">创建一个新的账户</a></p>
                   </form>
                </div>
            </div>
        );
    }
}