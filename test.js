d1 = new Date();
for (var d = new Date();new Date() -d < 1000;);

console.log('--------------------------------------')
d2 = new Date();
console.log(d2-d1);


// 使用了LocalStorege来存储token
// LocalStarage 是浏览器端持久化方案之一，HTML5标准增加的技术
// LocalStoreage为了存储得到的数据，例如json
// 数据存储就是键值对
// 数据会存储在不同的域名下面
// 不同的浏览器对单个域名下存储数据长度支持不同，有的最多支持2M
// SEssionStoreage 和LocalStoreage差不多
// 



url = '?page=1&size=20&name=小明';


function parse_qs (search){
    let re = /(\w+)=([^&]+)/;
    if (search[0]=='?'){
        search = search.substr(1);
    }
    ret = {};
    search.split('&').forEach(element=>{
        match = re.exec(element);
        if(match){
            ret[match[1]] = match[2];
        }
    });
    return ret;
}

console.log(parse_qs(url));