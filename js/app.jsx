/*产品全局变量*/
let products = {

  "jameson-vulc": {
    id: "jameson-vulc",
    name: "Jameson Vulc",
    price: 64.99,
    imagePath: "img/shoes/jameson-vulc-brown-gum-orig.png",
    gender: "man",
  },

  "marana-x-hook-ups": {
    id: "marana-x-hook-ups",
    name: "Marana X Hook-Up",
    price: 79.99,
    imagePath: "img/shoes/marana-x-hook-ups-black-orig.png",
    gender: "man",
  },

  "jameson-e-lite": {
    id: "jameson-e-lite",
    name: "Jameson E-Lite",
    price: 69.99,
    imagePath: "img/shoes/jameson-e-lite-maroon-orig.png",
    gender: "man",
  },

  "jameson-e-lite-julian-davidson-4": {
    id: "jameson-e-lite-julian-davidson-4",
    name: "Jameson E-Lite Julian Davidson",
    price: 74.99,
    imagePath: "img/shoes/jameson-e-lite-julian-davidson-4-black-gum-orig.png",
    gender: "man",
  },

  "scout-womens-6": {
    id: "scout-womens-6",
    name: "Scout Women's",
    imagePath: "img/shoes/scout-womens-6-teal-orig.png",
    price: 59.99,
    gender: "woman",
  },

  "scout-womens-coco-ho-5": {
    id: "scout-womens-coco-ho-5",
    name: "Scout Women's Coco Ho",
    imagePath: "img/shoes/scout-womens-coco-ho-5-olive-white-orig.png",
    price: 59.99,
    gender: "woman",
  },

  "jameson-2-womens-8": {
    id: "jameson-2-womens-8",
    name: "Jameson 2 Women's",
    imagePath: "img/shoes/jameson-2-womens-8-black-white-gum-orig.png",
    price: 59.99,
    gender: "woman",
  },

  "corby-womens-2": {
    id: "corby-womens-2",
    name: "Corby Women's",
    imagePath: "img/shoes/corby-womens-2-tan-white-orig.png",
    price: 44.99,
    gender: "woman",
  },
};

let cartItems = {
  "jameson-vulc": {
    id: "jameson-vulc",
    quantity: 1,
  },

  "marana-x-hook-ups": {
    id: "marana-x-hook-ups",
    quantity: 2,
  },

  "scout-womens-6": {
    id: "scout-womens-6",
    quantity: 2,
  },

  "scout-womens-coco-ho-5": {
    id: "scout-womens-coco-ho-5",
    quantity: 1,
  },

  "jameson-2-womens-8": {
    id: "jameson-2-womens-8",
    quantity: 1,
  },

  "corby-womens-2": {
    id: "corby-womens-2",
    quantity: 1,
  },
};

let SiteTitle = React.createClass({
  render: function (){
    return (
        <div className="title">
          <h2>Buy me Shoes</h2>
          <img className="title__heart" src="img/heart.svg"/>
        </div>
      );
  }
});

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

let AddCart = React.createClass({
		  render: function() {
		    return (

		        <a className="product__add">
		          <img className="product__add__icon" src="img/cart-icon.svg" />
		        </a>
		    );
		  }
		}); 
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

let  App = React.createClass({

  render: function() {
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


window.onload = ()=>{
	React.render(<App/>, document.querySelector("#root"));
	//React.render(<SiteTitle/>,document.querySelector(".site__left-sidebar"));
}