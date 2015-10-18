const React = require("react");
let {products,cartItem} = require("../data.js");
let QuantityControl = require("./QuantityControl.js");
let CartItem = React.createClass({
  render: function() {
  	let {id,quantity} = this.props.cartItem;
  	let  {name,price,imagePath} = products[id];
  	let priceStr = quantity>1?""+price+" x "+quantity:price;
    return (
      <div className="cart-item">
        <div className="cart-item__top-part">
          <div className="cart-item__image">
            <img src={imagePath} />
          </div>
          <div className="cart-item__top-part__middle">
            <div className="cart-item__title">
              {name}
            </div>
            <div className="cart-item__price">
              {priceStr}
            </div>
          </div>
          <img className="cart-item__trash" src="img/trash-icon.svg" />
        </div> {/* cart-item__top-part */}
        <QuantityControl item={this.props.cartItem}/>
      </div>
    );
  }
});