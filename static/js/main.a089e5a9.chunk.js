(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{140:function(e,t,a){},177:function(e,t,a){e.exports=a(373)},182:function(e,t,a){},183:function(e,t,a){},369:function(e,t,a){},371:function(e,t,a){},373:function(e,t,a){"use strict";function n(e){return l.a.createElement("div",null,l.a.createElement(E.a,{dataSource:e.content.data,renderItem:function(e){return l.a.createElement(E.a.Item,null,l.a.createElement(E.a.Item.Meta,{avatar:l.a.createElement(v.a,{src:e.thumbnail_pic_s}),title:l.a.createElement("a",{href:e.url},e.title),description:e.date+e.author_name}))}}))}a.r(t);var r=a(0),l=a.n(r),c=a(4),i=a.n(c),o=(a(182),a(24)),u=a(25),s=a(27),m=a(26),h=a(28),d=(a(183),a(375)),p=a(37),f=(a(127),a(88)),E=(a(117),a(31)),v=(a(131),a(89)),y=(a(93),a(61)),b=(a(70),a(30)),g=a(39),w=a.n(g),k=a(163),j=a.n(k),N=a(119),I=a(164),O=a.n(I),S=(a(140),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={data:[{},{},{}],pageNum:0,pageSize:20,loading:!0,hasMore:!0},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"gotoDetail",value:function(e){window.location.href=e}},{key:"cloneBtUrl",value:function(e){}},{key:"renderBtn",value:function(e,t){return"blank"===e?l.a.createElement(N.CopyToClipboard,{text:t,onCopy:function(){}},l.a.createElement(b.a,{type:"primary",className:"tool-button",onClick:this.gotoDetail.bind(this,t)},"\u70b9\u51fb\u67e5\u770b\u8be6\u60c5")):l.a.createElement(N.CopyToClipboard,{text:t,onCopy:function(){}},l.a.createElement(b.a,{type:"primary",className:"tool-button",onClick:this.cloneBtUrl.bind(this,t)},"\u70b9\u51fb\u590d\u5236\u4e0b\u8f7d\u94fe\u63a5"))}},{key:"movieLoad",value:function(){this.state.hasMore&&this.getMovieList()}},{key:"render",value:function(){var e=this,t=this.state,a=t.data,n=t.hasMore,r=t.loading;return l.a.createElement("div",{className:"home"},l.a.createElement(y.a,null,l.a.createElement("h2",null,"\u805a\u5408\u7535\u5f71")),l.a.createElement(O.a,{pageStart:0,loadMore:this.movieLoad.bind(this),hasMore:n,initialLoad:!1,threshold:80,loader:l.a.createElement("div",{className:"loader",key:0})},l.a.createElement(E.a,{itemLayout:"horizontal",dataSource:a,renderItem:function(t){return l.a.createElement(E.a.Item,null,e.renderBtn(t.type,t.btUrl),l.a.createElement(j.a,null,l.a.createElement(E.a.Item.Meta,{avatar:l.a.createElement(v.a,{className:"avatar",src:t.postUrl}),title:l.a.createElement("a",{href:"http://imov.herokuapp.com"},t.title),description:t.btUrl})))}}),l.a.createElement("div",{className:"loader"},l.a.createElement(f.a,{spinning:r}))))}},{key:"componentDidMount",value:function(){this.getMovieList()}},{key:"getMovieList",value:function(){var e=this,t=this,a=this.state,n=a.pageNum,r=a.pageSize;t.setState({loading:!0,hasMore:!1},function(){w.a.get("".concat(e.props.host,"/get_movies?page=").concat(n,"&size=").concat(r)).then(function(e){var a=e.data.data;0===n?a&&t.setState({data:a}):a&&t.setState({data:t.state.data.concat(a)}),a.length<r&&t.setState({hasMore:!1}),t.setState({loading:!1,pageNum:n+1,hasMore:!0})}).catch(function(e){}).finally(function(){})})}}]),t}(l.a.Component)),C=(a(158),a(42)),M=(a(159),a(54)),T=(a(160),a(9)),x=(a(287),a(172)),U=a(90),D=a.n(U),L=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={userName:"",pwd:""},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault();var t={userName:this.state.userName,pwd:D()(this.state.pwd)},a=this;w.a.post("".concat(this.props.host,"/login"),t).then(function(e){var t=e.data;0===t.statue&&(x.a.loading(t.msg,.1),a.props.router.push("/home"))}).catch(function(e){}).finally(function(){})}},{key:"handleUserInput",value:function(e){this.setState({userName:e.target.value})}},{key:"handlePwdInput",value:function(e){this.setState({pwd:e.target.value})}},{key:"render",value:function(){return l.a.createElement("div",{className:"login"},l.a.createElement(C.a,{onSubmit:this.handleSubmit.bind(this),className:"login-form"},l.a.createElement(C.a.Item,null,l.a.createElement(M.a,{prefix:l.a.createElement(T.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Username",value:this.state.userName,onChange:this.handleUserInput.bind(this)})),l.a.createElement(C.a.Item,null,l.a.createElement(M.a,{prefix:l.a.createElement(T.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password",value:this.state.pwd,onChange:this.handlePwdInput.bind(this)})),l.a.createElement(b.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"\u767b\u9646")))}},{key:"componentDidMount",value:function(){}}]),t}(l.a.Component),W=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={userName:"",pwd:"",hobby:""},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault();var t={userName:this.state.userName,pwd:D()(this.state.pwd),hobby:this.state.hobby};w.a.post("".concat(this.props.host,"/register"),t).then(function(e){}).catch(function(e){}).finally(function(){})}},{key:"handleUserInput",value:function(e){this.setState({userName:e.target.value})}},{key:"handlePwdInput",value:function(e){this.setState({pwd:e.target.value})}},{key:"handleHobbyInput",value:function(e){this.setState({hobby:e.target.value})}},{key:"render",value:function(){return l.a.createElement("div",{className:"reg"},l.a.createElement(C.a,{onSubmit:this.handleSubmit.bind(this),className:"login-form"},l.a.createElement(C.a.Item,null,l.a.createElement(M.a,{prefix:l.a.createElement(T.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Username",value:this.state.userName,onChange:this.handleUserInput.bind(this)})),l.a.createElement(C.a.Item,null,l.a.createElement(M.a,{prefix:l.a.createElement(T.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password",value:this.state.pwd,onChange:this.handlePwdInput.bind(this)})),l.a.createElement(C.a.Item,null,l.a.createElement(M.a,{prefix:l.a.createElement(T.a,{type:"info-circle",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"\u559c\u6b22\u7684\u7535\u5f71\u7c7b\u578b",value:this.state.hobby,onChange:this.handleHobbyInput.bind(this)})),l.a.createElement(b.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"\u6ce8\u518c")))}}]),t}(l.a.Component),_=(a(369),a(53)),P=a(170),B=a(174),H=Object(_.c)(Object(B.a)({},{news:function(e,t){var a=0<arguments.length&&void 0!==e?e:{data:[1,2]},n=1<arguments.length?t:void 0;switch(n.type){case"GET_NEWS":return n.data;case"MINUS":return[2];case"MULTIPLY":return[3];case"DIVIDE":return[4];default:return a}},counter:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:1;switch((1<arguments.length?arguments[1]:void 0).type){case"INCREMENT":return{state:5};case"DECREMENT":return{state:3};default:return e}},weather:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=1<arguments.length?arguments[1]:void 0;switch(t.type){case"GET_WEATHER":return t.data;case"GET_CITYS":default:return e}}})),A=Object(_.d)(function(e,t){return H(e,t)},Object(_.a)(P.a)),G=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={data:[],loading:!0,city:"\u5b81\u6ce2",num1:1,num2:1,type:"plus",weatherInfo:A.getState().weather.data},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state.weatherInfo;return l.a.createElement("div",{className:"home"},l.a.createElement(y.a,null,l.a.createElement("h2",null,"\u4eca\u65e5\u5929\u6c14")),l.a.createElement("div",{className:"computer-box"},e?this.renderWeather(e.realtime):"",l.a.createElement("div",{className:"weather-list"},e?this.renderList(e.future):"")))}},{key:"onNum1Change",value:function(e){this.setState({num1:e})}},{key:"onNum2Change",value:function(e){this.setState({num2:e})}},{key:"fnChange",value:function(e){this.setState({type:e.target.value})}},{key:"renderWeather",value:function(e){if(e)return l.a.createElement("ul",{className:"real-time"},l.a.createElement("li",null,l.a.createElement("span",null,"\u5f53\u524d"),l.a.createElement("span",null,e.info)),l.a.createElement("li",null,l.a.createElement("span",null,"AQI"),l.a.createElement("span",null,e.aqi)),l.a.createElement("li",null,l.a.createElement("span",null,"\u6c14\u6e29"),l.a.createElement("span",null,e.temperature,"\u2103")),l.a.createElement("li",null,l.a.createElement("span",null,e.direct),l.a.createElement("span",null,e.power)))}},{key:"renderList",value:function(e){return l.a.createElement(E.a,{dataSource:e,renderItem:function(e){return l.a.createElement(E.a.Item,null,l.a.createElement("h4",null,e.date),l.a.createElement("p",null,l.a.createElement("span",null,e.weather),l.a.createElement("span",null,e.temperature),l.a.createElement("span",null,e.direct)))}})}},{key:"componentDidMount",value:function(){var e=this;A.dispatch(function(e){w.a.get("/get_weatherInfo?city=".concat("\u5b81\u6ce2")).then(function(t){e({type:"GET_WEATHER",data:t.data})}).catch(function(e){}).finally(function(){})}),A.subscribe(function(){e.setState({weatherInfo:A.getState().weather.data},function(){})})}},{key:"componentWillUpdate",value:function(){}}]),t}(l.a.Component),z=(a(129),a(47)),R=a(91),J=(a(371),z.a.Option),V=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={data:[],loading:!0,type:"top",newsType:[{name:"\u5934\u6761",val:"top"},{name:"\u793e\u4f1a",val:"shehui"},{name:"\u56fd\u5185",val:"guonei"},{name:"\u56fd\u9645",val:"guoji"},{name:"\u5a31\u4e50",val:"yule"},{name:"\u4f53\u80b2",val:"tiyu"},{name:"\u519b\u4e8b",val:"junshi"},{name:"\u79d1\u6280",val:"keji"},{name:"\u8d22\u7ecf",val:"caijing"},{name:"\u65f6\u5c1a",val:"shishang"}]},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"news"},l.a.createElement(y.a,null,l.a.createElement("h2",null,"\u4eca\u65e5\u8981\u95fb")),l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement(z.a,{defaultValue:this.state.newsType[0].name,onChange:this.newTypeChange.bind(this),style:{width:190,marginTop:10}},this.renderSelect(this.state.newsType))),l.a.createElement("div",{className:"news-box"},l.a.createElement(n,{content:this.props.data,title:"fdjdsfjkh"})))}},{key:"componentDidMount",value:function(){this.props.getInitData(this.state.type)}},{key:"componentWillUpdate",value:function(){}},{key:"renderSelect",value:function(e){var t=[];return e.forEach(function(e,a){t.push(l.a.createElement(J,{key:a,value:e.val},e.name))}),t}},{key:"newTypeChange",value:function(e){var t=this;this.setState({type:e},function(){t.props.getInitData(t.state.type)})}}]),t}(l.a.Component),Y=Object(R.b)(function(e){return{data:e.news}},function(e){return{getInitData:function(t){e(function(e){return function(t){w.a.get("/get_news?type=".concat(e)).then(function(e){t({type:"GET_NEWS",data:e.data})}).catch(function(e){}).finally(function(){})}}(t))}}})(V),q=Object(p.a)(),Q=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={userName:"",pwd:"",loggedIn:!1,apiHost:""},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"handleClick",value:function(){q.push("/home",{some:"state"})}},{key:"render",value:function(){var e=this.state,t=e.loggedIn,a=e.apiHost;return l.a.createElement("div",{className:"App"},l.a.createElement(d.c,{history:q},l.a.createElement(d.b,{exact:!0,path:"/",render:function(){return t?l.a.createElement(d.a,{to:"/dashboard"}):l.a.createElement(S,{router:q,host:a})}}),l.a.createElement(d.b,{path:"/login",exact:!0,render:function(){return l.a.createElement(L,{router:q,host:a})}}),l.a.createElement(d.b,{path:"/home",exact:!0,render:function(){return l.a.createElement(S,{router:q,host:a})}}),l.a.createElement(d.b,{path:"/register",exact:!0,render:function(){return l.a.createElement(W,{router:q,host:a})}}),l.a.createElement(d.b,{path:"/Weather",exact:!0,render:function(){return l.a.createElement(G,{router:q,host:a})}}),l.a.createElement(d.b,{path:"/News",exact:!0,render:function(){return l.a.createElement(Y,{router:q,host:a})}})))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)),i.a.render(l.a.createElement(R.a,{store:A},l.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[177,1,2]]]);