import React from "react";
import Poster from "../../pages/posts";
import Order from "../../pages/order";
import Category from "../../pages/category";
import Product from "../../pages/product";

const Home=({cartitems,favitems,addToCart,addToFavorites,searchQuery})=>{
    return(
        <div>
            <Poster />
            <Order />
            <Category />
            <Product cartitems={cartitems} favitems={favitems}  addToCart={addToCart} addToFavorites={addToFavorites} searchQuery={searchQuery} />
        </div>
    );
}

export default Home