import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router,Route,Link, Redirect} from "react-router-dom";
import '../css/login.css'

import { observer } from 'mobx-react';
import {message ,List} from 'antd';

import 'antd/lib/message/style';
import { inject,parse_qs} from '../utils';
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

    handleChange(pageNo,pageSize){
        //console.log(pageNo,pageSize);
        let search = '?page='+pageNo+'&size='+pageSize;
        this.props.service.getall(search);
        //window.location.href='/list' + search;
    }
   
    geturl(pageNo){
        const {location:{search}} = this.props;
        let {size=10} = parse_qs(search);
        return '/list?page='+pageNo + '&size=' + size;
    }

    // list list?page=1 
    itemRender(current,type,originalElement){
        if(current == 0){
            return originalElement;
        }
        if(type ==='page'){
            console.log(11111111111,current)
            return <Link to={this.geturl(current)}>{current}</Link>
        }
        if(type === 'prev'){
            return <Link to={this.geturl(current)} className='ant-pagination-item-link'></Link>
        }
        if(type === 'next'){
            return <Link to={this.geturl(current)} className='ant-pagination-item-link'></Link>
        }
        return originalElement;
    }

    render(){
       const data = this.props.service.posts;
       const pagination = this.props.service.pagination;
        return (
            <List itemLayout="horizontal" bordered
                dataSource={data}
                renderItem={
                    item=>(
                        <List.Item>
                            <List.Item.Meta 
                                title={<Link to={'/post/' + item.post_id}>{item.title}</Link>}
                            />  
                        </List.Item>
                    )
                }
                pagination={
                    {
                        onChange:this.handleChange.bind(this),
                        pageSize:pagination.size,
                        total:pagination.totalCount,
                        current:pagination.page,
                        itemRender:this.itemRender.bind(this),
                    }
                }
            />
        );
    }
}