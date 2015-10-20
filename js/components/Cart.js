const React = require("react");
const Ps = require("perfect-scrollbar");
let {products,cartItems} = require("../data");
let CartItem = require("./CartItem");
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
				<h3 className="cart__title">Shopping Cart</h3>
			      <div className="cart__content" ref="cart__content">
			        {children}
			      </div>  
        		</div>
			);
	}
});



module.exports = Cart;