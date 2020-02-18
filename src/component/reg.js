import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router,Route,Link, Redirect} from "react-router-dom";
import '../css/login.css'
import UserSerivce from '../service/user'
import { observer } from 'mobx-react';
import { inject } from '../utils';

const service = new UserSerivce();

@inject({ service })
@observer
export default class Reg extends React.Component{
  
    handleClick(event){
        event.preventDefault();
        let fm = event.target.form;
        this.props.service.reg(fm[0].value,fm[1].value,fm[2].value);
    }

    render(){
        if(this.props.service.regged){
            console.log('注册成功')
            return (<Redirect to="/"/>)
        }
        return (
           <div className="login-page">
               <div className="form">
                   <form className="register-form">
                       <input type="text" placeholder="姓名"></input>
                       <input type="text" placeholder="邮箱"></input>
                       <input type="password" placeholder="密码"></input>
                       <input type="comform_password" placeholder="确认密码"></input>
                       <button onClick={this.handleClick.bind(this)}>注册</button>
                       <p className="message" >如果已经注册<Link to="/login"> 去登陆</Link></p>
                   </form>
               </div>
           </div>
        );
    }
}