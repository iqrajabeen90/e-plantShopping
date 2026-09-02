import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import AboutUs from "./components/AboutUs";
import "./App.css";
import Cart from "./components/Cart";

function Home() {
  return (
    <div className="home-page">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Paradise Nursery</h1>

          <h2>Bring Nature Into Your Home</h2>

          <p>
            Discover beautiful plants, brighten your space, and create your
            own little paradise.
          </p>

          <Link to="/plants" className="get-started-button">
            Get Started
          </Link>
        </div>
      </div>

      <AboutUs />
    </div>
  );
}


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;