const React = require("react");
/*数量调整组件*/
let QuantityControl = React.createClass({
  render: function() {
  	let quantity = this.props.item.quantity;
  	let variant = this.props.variant;
  	let className ="adjust-qty";
  	if(variant){
  		className=className+" adjust-qty--"+variant;
  	}
    return (

      <div className="cart-item__qty">
        <div className={className}>
          <a className="adjust-qty__button">-</a>
          <div className="adjust-qty__number">{quantity}</div>
          <a className="adjust-qty__button">+</a>
        </div>
      </div>
    );
  }
});
