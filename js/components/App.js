const React = require("react");
let SiteTitle = require("./SiteTitle.js");
let Products = require("./Products.js");
let Cart = require("./Cart.js");
let Checkout = require("./Checkout.js");

let App = React.createClass({
	render() {
	    return (
	      <div className="site">
	        <div className="bg">
	          <div className="bg__img">
	          </div>
	        </div>
	        <div className="site__main">
	          <div className="site__left-sidebar">
	            <SiteTitle/>
	          </div>
	          <div className="site__content">
	          	<Products />
	            {/* <Products/> */}
	          </div> {/* site__content */}
	        </div> {/* site__main */}
	        <div className="site__right-sidebar">
	        	<Cart />
	        	<Checkout />
	          {/* <Cart/> */}
	          {/* <Checkout/> */}
	        </div> {/* site__right-sidebar */}
	        <a className="site__right-sidebar-toggle">
	          <img src="img/arrow-icon.svg" />
	        </a>
	      </div>
	    );
	 }
});
module.exports = App;