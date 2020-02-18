import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router,Route,Link, Redirect} from "react-router-dom";
import '../css/login.css'

import { observer } from 'mobx-react';
import {message ,List} from 'antd';

import 'antd/lib/message/style';
import { inject } from '../utils';
import PostService from '../service/post';
import 'antd/lib/list/style';

const service = new PostService();

@inject({service})
@observer
export default class L extends React.Component{

    constructor(props){
        super(props);
        const {location:{search}} = props;
        props.service.getall(search)
    }
   
    render(){
       const data = this.props.service.posts;
        return (
            <List itemLayout="horizontal" bordered
                dataSource={data}
                renderItem={
                    item=>(
                        <List.Item>
                            <List.Item.Meta 
                                title={<Link to={'/api/post/' + item.post_id}>{item.title}</Link>}
                            />  
                        </List.Item>
                    )
                }
            />
        );
    }
}