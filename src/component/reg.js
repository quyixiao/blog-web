import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import '../css/login.css'
import UserSerivce from '../service/user'

const service = new UserSerivce();

export default class Reg extends React.Component{
    render(){
        return <_Reg service={service}></_Reg>;
    }
}

class _Reg extends React.Component{
  
    handleClick(event){
        event.preventDefault();
        let fm = event.target.form
        let email = fm[0].value;
        let password = fm[1].value;
        console.log(email,password)

        let ret = this.props.service.login(email,password)

    }


    render(){
        console.log('11111111111111111111111111')
        return (
           <div className="login-page">
               <div className="form">
                   <form className="register-form">
                       <input type="text" placeholder="姓名"></input>
                       <input type="text" placeholder="邮箱"></input>
                       <input type="password" placeholder="密码"></input>
                       <input type="password" placeholder="确认密码"></input>
                       <button onClick={this.handleClick.bind(this)}>注册</button>
                       <p className="message" >如果已经注册<Link to="/login"> 去登陆</Link></p>
                   </form>
               </div>
           </div>
        );
    }
}