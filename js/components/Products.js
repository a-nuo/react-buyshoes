const React = require("react");
let {products,cartItems} = require("../data.js");
let Product = require("./Product.js");
let Products = React.createClass({

	render:function(){
		let children = [];

		for(var product in products){
			if(cartItems[product]){
				children.push(<Product product={products[product]} key={product} />);
			}else {
				children.push(<Product product={products[product]} key={product} />);
			}

		}
		return (
				<div className="products">
					{children}
				</div>
			);
	}
});

module.exports = Products;