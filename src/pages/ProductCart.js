import React, { useState } from "react";
import { AiOutlinePlusCircle, AiFillHeart ,AiOutlineClose} from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

import "./productcart.css"; // Import a CSS file for styling

export const ProductCart = ({ data, key, id, cover, name, price, addToCart, addToFavorites }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [iscart, setIsCart] = useState(false);
  const [isProductDetailsOpen, setIsProductDetailsOpen] = useState(false);

  const handleAddToCart = () => {
    addToCart(data);
    setIsCart(true);
  };

  const handleAddToFavorites = () => {
    addToFavorites(data);
    setIsFavorite(true);
  };

  const handleProductDetailsClick = () => {
    setIsProductDetailsOpen(true);
  };

  const closeProductDetails = () => {
    setIsProductDetailsOpen(false);
  };

  return (
    <>
      <div className="box boxItems" id="product">
        <div className="img"  onClick={handleProductDetailsClick}>
          <Link>
            <img src={cover} alt="cover" />
          </Link>
        </div>
        <div className="details">
          <h3>${price}</h3>
          <p>{name}</p>
          <button onClick={handleAddToCart}>
            {iscart ? <AiOutlinePlusCircle style={{ color: "red" }} /> : <AiOutlinePlusCircle />}
          </button>
          <button onClick={handleAddToFavorites}>
            {isFavorite ? <AiFillHeart style={{ color: "red" }} /> : <FaHeart />}
          </button>
        </div>
      </div>

      {/* Product Details Pop-up */}
      {isProductDetailsOpen && (
        <div className="product-details-popup">
          <div className="product-details-content">
            <div className="product-details-header">
              <h3>{name}</h3>
              <button onClick={closeProductDetails}>
                <AiOutlineClose className='icon' />
              </button>
            </div>
            <img src={cover} alt="cover" />
            <button onClick={handleAddToCart}>
            {iscart ? <AiOutlinePlusCircle style={{ color: "red" }} /> : <AiOutlinePlusCircle />}
          </button>
          <button onClick={handleAddToFavorites}>
            {isFavorite ? <AiFillHeart style={{ color: "red" }} /> : <FaHeart />}
          </button>
          </div>
        </div>
      )}
    </>
  );
};
