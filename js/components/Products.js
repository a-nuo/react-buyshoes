const React = require("react");
let {products,cartItems} = require("../data");
let Product = require("./Product");
let Products = React.createClass({

	render:function(){
		let children = [];

		for(var product in products){
				children.push(<Product product={products[product]} key={product} />);
		}
		return (
				<div className="products">
					{children}
				</div>
			);
	}
});

module.exports = Products;