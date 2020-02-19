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
     @observable posts = [];
     @observable post = {} ;
     @observable pagination = {page:1,size:10,pages:1,totalCount:0}

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

    getall(serach){
        this.instance.get(serach).then(response=>{
            console.log(response);
            console.log(response.data);
            console.log(response.status);
            this.errMsg = '文章发布查询失败';
            this.posts = response.data.posts;
            this.pagination = response.data.pagination;

        }).catch(
            error=>{
                console.log(error);
                this.errMsg = '文章查询失败' + Math.random() * 10000;
            }
        );
    }


    getpost(id){
        this.instance.get(id).then(response=>{
            console.log(response);
            console.log(response.data);
            console.log(response.status);
            this.errMsg = '文章发布查询失败';
            this.post = response.data.post;

        }).catch(
            error=>{
                console.log(error);
                this.errMsg = '文章查询失败' + Math.random() * 10000;
            }
        );
    }

}   