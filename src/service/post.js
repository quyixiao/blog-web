import axios from "axios"
import store from 'store';
import {observable} from 'mobx';



store.addPlugin(require('store/plugins/expire')); // 过期插件


export default class PostService {
    constructor(){
        this.instance = axios.create({
            baseURL:'/api/post/'
        });
    }

     @observable done = false;
     @observable errMsg = '';

    pub(title,content){ //header 中的token 问题
        this.instance.post('pub',{
            title,content
        },{
            headers:{'Jwt':store.get('token')}
        }
        ).then(response=>{
            console.log(response);
            console.log(response.data);
            console.log(response.status);
            this.errMsg = '文章发布成功';
        }).catch(
            error=>{
                console.log(error);
                this.errMsg = '文章发布失败' + Math.random() * 10000;
            }
        );
    }

}   