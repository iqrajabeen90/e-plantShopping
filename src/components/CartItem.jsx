import { useSelector, useDispatch } from "react-redux";
import { updateQuantity, removeItem } from "../redux/CartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const itemTotal = item.price * item.quantity;

  const totalAmount = cartItems.reduce(
    (total, cartItem) =>
      total + cartItem.price * cartItem.quantity,
    0
  );

  const increase = () => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  const decrease = () => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: Math.max(1, item.quantity - 1),
      })
    );
  };

  const remove = () => {
    dispatch(removeItem(item.id));
  };

  return (
    <div className="cart-item">
      <img
        src={item.image}
        alt={item.name}
        className="cart-item-image"
      />

      <div className="cart-item-details">
        <h3>{item.name}</h3>

        <p>
          Unit Price: ${item.price.toFixed(2)}
        </p>

        <p>
          Quantity: {item.quantity}
        </p>

        <p>
          Item Total: ${itemTotal.toFixed(2)}
        </p>

        <div className="quantity-controls">
          <button onClick={decrease}>
            −
          </button>

          <span>{item.quantity}</span>

          <button onClick={increase}>
            +
          </button>
        </div>

        <button
          className="delete-button"
          onClick={remove}
        >
          Delete
        </button>

        <p className="cart-total">
          Total Cart Amount: ${totalAmount.toFixed(2)}
        </p>
      </div>
    </div>
  );
}

export default CartItem;