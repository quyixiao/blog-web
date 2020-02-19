import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router,Route,Link, Redirect} from "react-router-dom";
import '../css/login.css'
import UserSerivce from '../service/user'
import { observer } from 'mobx-react';
import {message,Form,Input, Button} from 'antd';

import 'antd/lib/message/style';
import 'antd/lib/input/style';
import 'antd/lib/form/style';
import 'antd/lib/button/style';


import { inject } from '../utils';
import PostService from '../service/post';
import FormItem from 'antd/lib/form/FormItem';

const {TextArea} = Input;


const service = new PostService();

@inject({service})
@observer
export default class Pub extends React.Component{

    handleSubmit(event){
        event.preventDefault();
        console.log('------------------------')

        let fm = event.target;
        console.log(fm[0].value)
        this.props.service.pub(fm[0].value,fm[1].value)
    }

    render(){
        if(this.props.service.errMsg){
            message.info(this.props.service.errMsg,5,()=>{
                this.props.service.errMsg = '';
            });
            return <Redirect to="/list"></Redirect>
        }
        
        return (
                <Form onSubmit={this.handleSubmit.bind(this)} >
                    <Form.Item label="标题"  wrapperCol={{span:10}} labelCol={{span:4}}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="内容" wrapperCol={{span:15}} labelCol={{span:4}}>
                        <TextArea rows={20} />
                    </Form.Item>
                    <Form.Item wrapperCol={{span:10,offset:17}}>
                        <Button type="primary" htmlType="submit" >发布博文</Button>
                    </Form.Item>
                </Form>
        );
    }
}