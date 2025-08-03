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
      <p className="home-subtext">
        Explore our hand-picked selection of top-rated items. Each product is crafted to deliver exceptional value, style, and quality for your everyday needs.
      </p>
      <p className="home-subtext">
        At ThemeVerse, we believe shopping should be both stylish and seamless. That's why our curated collection blends functionality with aesthetics, ensuring you always find something that matches your vibe.
      </p>
      <p className="home-subtext">
        Whether you're revamping your space, updating your wardrobe, or finding the perfect gift, our featured products section is a great place to begin. Quality, affordability, and design all in one place.
      </p>
      <p className="home-subtext">
        Scroll down, get inspired, and discover your next favorite find. And when you're ready, hit "View All" to explore our full catalog.
      </p>


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
