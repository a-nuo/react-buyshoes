const React = require("react");
let {products,cartItem} = require("../data.js");

let Checkout = React.createClass({
  render: function() {
  	let count = 0;
  	for(var key in cartItems){

  		count+=products[key].price * cartItems[key].quantity;

  	}
  	count="$"+count;
    return (

      <div className="checkout">
        <hr className="checkout__divider" />
        <input type="text" className="checkout__coupon-input" placeholder="coupon code" />

        <div className="checkout__line">
          <div className="checkout__line__amount checkout__line__amount--omg-savings">
            {count}
          </div>
        </div>
        <a className="checkout__button">
          <img className="checkout__button__icon" src="img/cart-icon.svg" />
          <div className="checkout__button__label">
            Checkout
          </div>
        </a>
      </div>
    );
  }
});