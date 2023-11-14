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
  const [userName,setuserName]=useState('');

  const handleSearch = (e) => {
      setSearchQuery(e.target.value)
    };
    const addToCart = (item) => {
      const isItemExist = cartitems.some((cartItem) => cartItem.id === item.id);
    
      if (isItemExist) {
        // Remove the existing item from the cart
        const updatedCart = cartitems.filter((cartItem) => cartItem.id !== item.id);
        setCartitems(updatedCart);
      } else {
        // Add the item to the cart
        const updatedCart = [...cartitems, item];
        setCartitems(updatedCart);
      }
    };
    
    const addToFavorites = (item) => {
      const isItemExist = favitems.some((favItem) => favItem.id === item.id);
    
      if (isItemExist) {
        // Remove the existing item from the favorites
        const updatedFav = favitems.filter((favItem) => favItem.id !== item.id);
        setFavitems(updatedFav);
      } else {
        // Add the item to the favorites
        const updatedFav = [...favitems, item];
        setFavitems(updatedFav);
      }
    };
  return (
    <div className="App">
      {isLoggIn && (
        <BrowserRouter>
          <Header userName={userName} cartitems={cartitems} setCartitems={setCartitems} favitems={favitems} setFavitems={setFavitems} setisLoggIn={setisLoggIn} handleSearch={handleSearch} />
          <Home cartitems={cartitems} favitems={favitems} setCartitems={setCartitems} addToCart={addToCart} addToFavorites={addToFavorites} searchQuery={searchQuery} />
          <ToastContainer />
          {/* <Routes>
          <Route index path='/' element={Home}  />
          <Route path='/account' element={Account} />
          <Route path='/login' element={Login} />
        </Routes> */}
          <Footer />
        </BrowserRouter>
      )}
      {!isLoggIn && <Login setisLoggIn={setisLoggIn} setuserName={setuserName} />}
    </div>
  );
}

export default App;
