const React = require("react");
const Ps = require("perfect-scrollbar");
let {products,cartItems} = require("../data.js");
let CartItem = require("./CartItem.js");
let Cart = React.createClass({
	componentDidMount(){
		let $content = React.findDOMNode(this.refs.cart__content);
		Ps.initialize($content);
	},

	render : function(){
		let children = [];

		for(var key in cartItems){
			children.push(<CartItem cartItem={cartItems[key]} />);
		}

		return (
				<div className="cart">
			      <div className="cart__content" ref="cart__content">
			        <h3 className="cart__title cart__title--spacer">Shopping Cart</h3>
			        {children}
			      </div>  
        		</div>
			);
	}
});