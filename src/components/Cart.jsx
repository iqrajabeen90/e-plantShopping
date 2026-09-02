import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="cart-page empty-cart">
        <h1>Your Shopping Cart</h1>

        <p>Your cart is currently empty.</p>

        <Link to="/plants" className="continue-button">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h1>Your Shopping Cart</h1>

        <p>
          Total Plants: <strong>{totalItems}</strong>
        </p>
      </div>

      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <div className="cart-summary">
        <h2>Order Summary</h2>

        <p>
          Total Items: <strong>{totalItems}</strong>
        </p>

        <p className="cart-total">
          Total Price: <strong>${totalPrice.toFixed(2)}</strong>
        </p>

        <div className="cart-actions">
          <Link to="/plants" className="continue-button">
            Continue Shopping
          </Link>

          <button
            className="checkout-button"
            onClick={() => alert("Coming Soon")}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;