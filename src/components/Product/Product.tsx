import React, { useState, useMemo } from "react";
import ProductCard from "./ProductCard";
import { products } from "../../pages/dataproducts";
import { useTheme } from "../../contexts/ThemeContext";
import { useCart } from "../Contexts/CartContext";
import { ShoppingCart } from "lucide-react";
import CancelIcon from '@mui/icons-material/Cancel';
import "./ProductCard.css";
import "../../styles/themes.css";
import { Tooltip } from "@mui/material";

const categories = ["All Categories", ...Array.from(new Set(products.map((p) => p.category)))];
const sortOptions = ["Name A-Z", "Price: Low to High", "Price: High to Low", "Highest Rated"];

const Product: React.FC = () => {
  const { theme } = useTheme();
  const { cart } = useCart();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [sortBy, setSortBy] = useState("Name A-Z");
  const [view] = useState<"grid" | "list">("grid");
  const [showCart, setShowCart] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (category !== "All Categories") {
      result = result.filter((p) => p.category === category);
    }

    if (search.trim()) {
      result = result.filter((p) => p.title.toLowerCase().includes(search.toLowerCase()));
    }

    switch (sortBy) {
      case "Price: Low to High":
        result.sort((a, b) => a.price - b.price);
        break;
      case "Price: High to Low":
        result.sort((a, b) => b.price - a.price);
        break;
      case "Highest Rated":
        result.sort((a, b) => b.rating.rate - a.rating.rate);
        break;
      default:
        result.sort((a, b) => a.title.localeCompare(b.title));
    }

    return result;
  }, [search, category, sortBy]);

  return (
    <div className={`product-page ${theme}`}>
      {/* Header with Cart */}
      <div className="header1">
        <h2>All Products</h2>
        <div className="cart-icon" onClick={() => setShowCart(!showCart)}>
          <ShoppingCart size={28} />
          {cart.length > 0 && (
            <span className="cart-count">
              {cart.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          )}
        </div>
      </div>

      <h4>Discover our curated collection of amazing products</h4>

      <div className="controls">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          {sortOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Products */}
      <div className={`product-grid ${view}`}>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {showCart && (
        <div className="cart-drawer">
          <div className="cart-drawer-header">
            <h3>Your Cart</h3>

            <button className="cart-close" onClick={() => setShowCart(false)}>
              <Tooltip title="close" placement="top">
                <CancelIcon />
              </Tooltip>
            </button>
          </div>
          {cart.length === 0 ? (
            <p>No items in cart.</p>
          ) : (
            <ul>
              {cart.map((item) => (
                <li key={item.id}>
                  <img src={item.image} alt={item.title} />
                  <span className="cart-item-title">{item.title}</span>
                  <span className="cart-item-qty">x {item.quantity}</span>
                  <span className="cart-item-total">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Product;
