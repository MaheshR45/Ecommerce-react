import React, { useState } from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Account from "./pages/account";
import Login from "./pages/login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS first
// import 'mdb-react-ui-kit/css/mdb.min.css'; // Then import MDB CSS

function App() {
  const [cartitems, setCartitems] = useState([])
  const [favitems, setFavitems] = useState([])
  const [isLoggIn, setisLoggIn] = useState(false)
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
      setSearchQuery(e.target.value)
    };
  const addToCart = (item) => {
    const isitemexist = cartitems.some((cartitems) => cartitems.id === item.id)
    if (isitemexist) {
      toast.error("Item is already in the cart. Cannot add duplicate items.");
    } else {
      const updatedCart = [...cartitems, item];
      setCartitems(updatedCart);
    }

  };
  const addToFavorites = (item) => {
    const isitemexist = favitems.some((favitems) => favitems.id === item.id)
    if (isitemexist) {
      toast.error("Item is already in the Favlist. Cannot add duplicate items.");
    } else {
      const updatedFav = [...favitems, item];
      setFavitems(updatedFav);
    }
  };
  return (
    <div className="App">
      {isLoggIn && (
        <BrowserRouter>
          <Header cartitems={cartitems} setCartitems={setCartitems} favitems={favitems} setFavitems={setFavitems} setisLoggIn={setisLoggIn} handleSearch={handleSearch} />
          <Home setCartitems={setCartitems} addToCart={addToCart} addToFavorites={addToFavorites} searchQuery={searchQuery} />
          <ToastContainer />
          {/* <Routes>
          <Route index path='/' element={Home}  />
          <Route path='/account' element={Account} />
          <Route path='/login' element={Login} />
        </Routes> */}
          <Footer />
        </BrowserRouter>
      )}
      {!isLoggIn && <Login setisLoggIn={setisLoggIn} />}
    </div>
  );
}

export default App;
