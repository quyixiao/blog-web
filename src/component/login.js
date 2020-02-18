import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router,Route,Link, Redirect} from "react-router-dom";
import '../css/login.css'
import UserSerivce from '../service/user'
import { observer } from 'mobx-react';
import {message} from 'antd';

import 'antd/lib/message/style';
import { inject } from '../utils';



const service = new UserSerivce();

@inject({service})
@observer
export default class Login extends React.Component{

    handleClick(event){
        event.preventDefault();
        let fm = event.target.form;
        this.props.service.login(fm[0].value,fm[1].value);
    }

    render(){
        if(this.props.service.ret ){
            console.log('observer login .........',this.props.service.ret)
            return <Redirect to="/about"></Redirect>
        }
        if(this.props.service.errMsg){
            message.info(this.props.service.errMsg,5,()=>{
                this.props.service.errMsg = '';
            });
        }
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