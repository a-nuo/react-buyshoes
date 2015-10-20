/*产品全局变量*/

import  React from  "react";
import Ps from "perfect-scrollbar";
import   App from  "./components/App";

window.onload = ()=>{
	React.render(<App/>, document.querySelector("#root"));
};