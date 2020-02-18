import axios from "axios"

 export default class UserService {
    login(email,password,obj){
        console.log('-----------',email,password,obj)
        axios.post('/api/user/login',{
            'email':email,
            'password':password,
        }).then(response=>{
            // eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxNSwiZXhwIjoxNTgyMDI5MTE1fQ.m0JZ_vl4_CC5KKAKOeUmeUQhqrCMLtiwVWDoCPON6dU
            console.log(response)
        }).catch(
            function(error){
                console.log(error)
            }
        );

        
    }
}   