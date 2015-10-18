const React = require("react");
let QuantityControl = require("./QuantityControl.js");
let {products,cartItems} = require("../data.js");
let Product = React.createClass({
  render: function() {
	let {id,name,price,imagePath} = this.props.product;
	let item = cartItems[this.props.product.id];
	let displayEle =item ? <QuantityControl item={item} variant="gray"/> : (<a className = "product_add"><img className="product__add__icon" src="img/cart-icon.svg" /></a>);
	
    return (
      <div className="product">
        <div className="product__display">
          <div className="product__img-wrapper">
            <img className="product__img" src={imagePath} />
          </div>
          <div className="product__control">
          	{displayEle}
          </div>
          <div className="product__price">
            {price}
          </div>
        </div>
        <div className="product__description">
          <div className="product__name">
	        {name}
          </div>
          <img className="product__heart" src="img/heart.svg" />
        </div>
      </div>
    );
  }
});

module.exports = Product;