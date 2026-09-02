import { useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../redux/CartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  const itemTotal = item.price * item.quantity;

  return (
    <div className="cart-item">
      <img
        src={item.image}
        alt={item.name}
        className="cart-item-image"
      />

      <div className="cart-item-details">
        <h3>{item.name}</h3>

        <p>Unit Price: ${item.price.toFixed(2)}</p>

        <p>
          Item Total: ${itemTotal.toFixed(2)}
        </p>

        <div className="quantity-controls">
          <button
            onClick={() =>
              dispatch(decreaseQuantity(item.id))
            }
          >
            −
          </button>

          <span>{item.quantity}</span>

          <button
            onClick={() =>
              dispatch(increaseQuantity(item.id))
            }
          >
            +
          </button>
        </div>

        <button
          className="delete-button"
          onClick={() =>
            dispatch(removeFromCart(item.id))
          }
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default CartItem;