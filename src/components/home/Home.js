import React from "react";
import Poster from "../../pages/posts";
import Order from "../../pages/order";
import Category from "../../pages/category";
import Product from "../../pages/product";

const Home=({addToCart,addToFavorites,searchQuery})=>{
    return(
        <div>
            <Poster />
            <Order />
            <Category />
            <Product  addToCart={addToCart} addToFavorites={addToFavorites} searchQuery={searchQuery} />
        </div>
    );
}

export default Home