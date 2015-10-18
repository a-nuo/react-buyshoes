const React = require("react");

let AddCart = React.createClass({
		  render: function() {
		    return (

		        <a className="product__add">
		          <img className="product__add__icon" src="img/cart-icon.svg" />
		        </a>
		    );
		  }
		}); 
module.exports = AddCart;