import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import plants from "../data/plants";

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const categories = [...new Set(plants.map((plant) => plant.category))];

  const isInCart = (plantId) => {
    return cartItems.some((item) => item.id === plantId);
  };

  return (
    <div className="product-page">
      <div className="product-header">
        <h1>Our Plants</h1>
        <p>
          Discover beautiful plants for your home, garden, and collection.
        </p>
      </div>

      {categories.map((category) => {
        const categoryPlants = plants.filter(
          (plant) => plant.category === category
        );

        return (
          <section className="category-section" key={category}>
            <h2>{category}</h2>

            <div className="product-grid">
              {categoryPlants.map((plant) => (
                <div className="product-card" key={plant.id}>
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="product-image"
                  />

                  <div className="product-info">
                    <h3>{plant.name}</h3>

                    <p className="category-name">
                      {plant.category}
                    </p>

                    <p className="product-price">
                      ${plant.price.toFixed(2)}
                    </p>

                    <button
                      className="add-button"
                      disabled={isInCart(plant.id)}
                      onClick={() => dispatch(addToCart(plant))}
                    >
                      {isInCart(plant.id)
                        ? "Added to Cart"
                        : "Add to Cart"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default ProductList;