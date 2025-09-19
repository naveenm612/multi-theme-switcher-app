import React from "react";
import "./ProductCard.css";
import { useCart } from "../../components/Contexts/CartContext";

interface Props {
  product: {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: { rate: number; count: number };
  };
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <span className="category">{product.category}</span>
      <img src={product.image} alt={product.title} className="product-image" />
      <h3 className="product-title">{product.title}</h3>
      <p className="desc">{product.description.slice(0, 80)}...</p>
      <div className="rating">
        ⭐ {product.rating.rate} <span>({product.rating.count})</span>
      </div>
      <div className="price">${product.price}</div>
      <button
        className="add-to-cart"
        onClick={() =>
          addToCart({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            quantity: 1,
          })
        }
      >
        🛒 Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
