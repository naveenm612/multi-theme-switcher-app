import React from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../Product/ProductCard";
import { products } from "../../pages/dataproducts";
import "./Home.css";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h2 className="home-title">Featured Products</h2>

      <div className="featured-grid">
        {products.slice(0, 5).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <button className="view-all-button" onClick={() => navigate("/product")}>
        View All →
      </button>
    </div>
  );
};

export default Home;
