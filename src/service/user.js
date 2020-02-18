import axios from "axios"
import store from 'store';
import {observable} from 'mobx';
import {observer} from 'mobx-react';

store.addPlugin(require('store/plugins/expire')); // 过期插件
 export default class UserService {
     @observable ret = -1 

    login(email,password,obj){
        console.log('-----------',email,password,'xxxxxxxxxxxxx')
        axios.post('/api/user/login',{
            'email':email,
            'password':password,
        }).then(response=>{
            // eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxNSwiZXhwIjoxNTgyMDI5MTE1fQ.m0JZ_vl4_CC5KKAKOeUmeUQhqrCMLtiwVWDoCPON6dU
            console.log('++++++++++++++++++++++++',response);
            console.log(this)

            //obj.setState({ret:1000})
            this.ret = Math.random() * 1000;
            store.set('token',response.data.token,(new Date()).getTime() * (8 * 3600 * 1000 ))

        }).catch(
            error=>{
                console.log(error)
            }
        );

        
    }
}   