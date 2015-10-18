/*产品全局变量*/

const React = require("react");
const Ps = require("perfect-scrollbar");
let  App = require("./components/App.js");

window.onload = ()=>{
	React.render(<App/>, document.querySelector("#root"));
}