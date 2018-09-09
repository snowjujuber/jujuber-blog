import JUJUBERCSS3SECRET from "../src/route/CSS3/JUJUBERCSS3SECRET.js";
import JUJUBERWEBSOCKET from "../src/route/Node.js/JUJUBERWEBSOCKET.js";
import JUJUBERWEBSOCKET2 from "../src/route/Node.js/JUJUBERWEBSOCKET2.js";
import JUJUBERWEBSOCKET1 from "../src/route/Nodeaa.js/JUJUBERWEBSOCKET1.js";

let json = [{"title":"WebSocket的学习","category":"Node.js","time":"Sat, 08 Sep 2018 13:07:45 GMT","timestamp":1536412065000,"className":"JUJUBERWEBSOCKET","content":"\r\n\r\n# 序\r\n\r\n这几天在学习`Node.js`的时候，在学习到引入`net`库并建立`TCP`服务器的时候，我因为自己的知识储备不足犯下了利用浏览器访问`TCP`服务器的愚蠢的错误。在后来学习到构建`HTTP`服务器的时候，也了解到了`HTTP`协议的原理。\r\n\r\n简要的说`TCP`通过著名的三次握手和四次挥手，通过Socket，完成客户端和服务器的交互；`HTTP`则是无状态的，通过`Re","path":"/Node.js/websocket/"},{"title":"WebSocket的学习","category":"Nodeaa.js","time":"Sat, 08 Sep 2018 13:07:45 GMT","timestamp":1536412065000,"className":"JUJUBERWEBSOCKET1","content":"\r\n\r\n# 序\r\n\r\n这几天在学习`Node.js`的时候，在学习到引入`net`库并建立`TCP`服务器的时候，我因为自己的知识储备不足犯下了利用浏览器访问`TCP`服务器的愚蠢的错误。在后来学习到构建`HTTP`服务器的时候，也了解到了`HTTP`协议的原理。\r\n\r\n简要的说`TCP`通过著名的三次握手和四次挥手，通过Socket，完成客户端和服务器的交互；`HTTP`则是无状态的，通过`Re","path":"/Nodeaa.js/websocket1/"},{"title":"WebSocket的学习","category":"Node.js","time":"Sat, 08 Sep 2018 13:07:45 GMT","timestamp":1536412065000,"className":"JUJUBERWEBSOCKET2","content":"\r\n\r\n# 序\r\n\r\n这几天在学习`Node.js`的时候，在学习到引入`net`库并建立`TCP`服务器的时候，我因为自己的知识储备不足犯下了利用浏览器访问`TCP`服务器的愚蠢的错误。在后来学习到构建`HTTP`服务器的时候，也了解到了`HTTP`协议的原理。\r\n\r\n简要的说`TCP`通过著名的三次握手和四次挥手，通过Socket，完成客户端和服务器的交互；`HTTP`则是无状态的，通过`Re","path":"/Node.js/websocket2/"},{"title":"CSS3 探究","category":"CSS3","time":"Sun, 09 Sep 2018 04:09:28 GMT","timestamp":1536466168000,"className":"JUJUBERCSS3SECRET","content":"\n# 序\n\n\n探究CSS\n\n```\nlet a = 1;\nlet b = 2;\n```\n\n\n标题 | 属性\n--------------|-----------------\n1 | 2","path":"/CSS3/css3secret/"}]; 

import Home from './component/Home/Home';
import ArticleEntry from './component/ArticleEntry/ArticleEntry'; 
import CategoryContent from './component/CategoryContent/CategoryContent';
import AboutMe from './component/AboutMe/AboutMe'



import Category from './component/Category/Category';
import CategoryItem from './component/CategoryItem/CategoryItem';
let categories = ['CSS3','Node.js','Nodeaa.js'] 
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import React, {Component} from 'react';

export  default class AppRouter extends Component {
  render() {
    return (
      <Switch>
       <Route path='/CSS3/css3secret' exact component={JUJUBERCSS3SECRET} />
<Route path='/Node.js/websocket' exact component={JUJUBERWEBSOCKET} />
<Route path='/Node.js/websocket2' exact component={JUJUBERWEBSOCKET2} />
<Route path='/Nodeaa.js/websocket1' exact component={JUJUBERWEBSOCKET1} />
        <Route path='/' exact render={()=>{
           return (<Home json={JSON.stringify(json)}>

            </Home>)}} /> 

        {
          categories.map(category => {
            let filteredArray = json.filter(item => item.category === category);
            return (
              <Route exact path={'/category/' + category} render={() => {
                return (
                  <CategoryContent title={category} num={filteredArray.length}>
                    {filteredArray.map(item => (
                      <ArticleEntry title={item.title} category={item.category} time={item.time}
                                    path={item.path} content={item.content}/>))}
                  </CategoryContent>
                )
              }}></Route>
            )
          })
        }
<Route path='/category' render={()=>{
       return     (<Category num='1'>
              {categories.map(item => (<CategoryItem path={'/category/' + item} name={item}/>))}
            </Category>)
          }}></Route>
<Route path='/about' component={AboutMe}></Route>0      </Switch>
    )
  }
}