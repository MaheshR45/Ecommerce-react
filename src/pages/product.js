import React from "react";
import { product } from "../assets/data/data";
import "./product.css";
import { ProductCart } from "./ProductCart";

const Product = ({ addToCart, addToFavorites, searchQuery }) => {
  // Filter products based on the searchQuery
  const filteredProducts = product.filter((item) => {
    const itemName = item.name.toLowerCase();
    const query = searchQuery.toLowerCase();
    return (
      itemName.includes(query) || // Match in name
      item.id.toString().includes(query) || // Match in id (converted to string)
      item.price.toString().includes(query) // Match in price (converted to string)
    );
  });

  return (
    <>
      <section className="product">
        <div className="container grid3">
          {filteredProducts.map((item) => (
            <ProductCart
              data={item}
              key={item.id}
              id={item.id}
              cover={item.cover}
              name={item.name}
              price={item.price}
              addToCart={addToCart}
              addToFavorites={addToFavorites}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Product;
