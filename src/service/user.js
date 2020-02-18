import axios from "axios"
import store from 'store';
import {observable} from 'mobx';
import {observer} from 'mobx-react';

store.addPlugin(require('store/plugins/expire')); // 过期插件
 export default class UserService {
     @observable ret = false;

     @observable regged = false;

     @observable errMsg = '';

    login(email,password){
        console.log('-----------',email,password,'xxxxxxxxxxxxx')
        axios.post('/api/user/login',{
            'email':email,
            'password':password,
        }).then(response=>{
            console.log('++++++++++++++++++++++++',response);
            console.log(this)
            this.ret = true;
            store.set('token',response.data.token,(new Date()).getTime() * (8 * 3600 * 1000 ))

        }).catch(
            error=>{
                console.log(error);
                this.errMsg = '用户名或者密码错误' + Math.random() * 10000;
            }
        );
    }

    reg(name,email,password){
        console.log('-----------',name,email,password,'xxxxxxxxxxxxx')
        axios.post('/api/user/reg',{
            name,email,password
        }).then(response=>{
            console.log('++++++++++++++++++++++++',response);
            this.regged = true;
            store.set('token',response.data.token,(new Date()).getTime() * (8 * 3600 * 1000 ))
        }).catch(
            error=>{
                console.log(error);
                this.errMsg = '注册失败';
            }
        );
    }

}   