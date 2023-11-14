import React, { useState } from "react";
import { AiOutlinePlusCircle, AiFillHeart, AiOutlineClose } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi"
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

import "./productcart.css"; // Import a CSS file for styling

export const ProductCart = ({ data, key, id, cover, name, price, cartitems, favitems, addToCart, addToFavorites }) => {
 
  const [isProductDetailsOpen, setIsProductDetailsOpen] = useState(false);

  const handleAddToCart = () => {
    addToCart(data);
 
  };

  const handleAddToFavorites = () => {
    addToFavorites(data);
   
  };

  const handleProductDetailsClick = () => {
    setIsProductDetailsOpen(true);
  };

  const closeProductDetails = () => {
    setIsProductDetailsOpen(false);
  };

  const isItemInCart = () => {
    // Assuming data.id is unique for each product
    return cartitems.some(item => item.id === data.id);
  };

  const isItemInFavorites = () => {
    // Assuming data.id is unique for each product
    return favitems.some(item => item.id === data.id);
  };

  return (
    <>
      <div className="box boxItems" id="product">
        <div className="img" onClick={handleProductDetailsClick}>
          <Link>
            <img src={cover} alt="cover" />
          </Link>
        </div>
        <div className="details">
          <h3>${price}</h3>
          <p>{name}</p>
          <button onClick={handleAddToCart}>
            <BiShoppingBag style={{ color: isItemInCart() ? 'red' : 'black' }} />
          </button>
          <button onClick={handleAddToFavorites}>
            <AiFillHeart style={{ color: isItemInFavorites() ? 'red' : 'black' }} />
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
              <AiOutlinePlusCircle style={{ color: isItemInCart() ? 'red' : 'black' }} />
            </button>
            <button onClick={handleAddToFavorites}>
              <AiFillHeart style={{ color: isItemInFavorites() ? 'red' : 'black' }} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
