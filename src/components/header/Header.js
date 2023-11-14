import React,{useState} from "react"
import Medicine from "../../assets/images/Medicine.svg"
import "./header.css"
import { AiOutlineSearch } from "react-icons/ai"
import { Link } from "react-router-dom"
import Cart from "./cart"
import { User } from "./user"
import Fav from "./fav"

 const Header = ({userName,cartitems,setCartitems,favitems,setFavitems,setisLoggIn,handleSearch,setIsFavorite}) => {
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header")
    header.classList.toggle("active", this.window.scrollY > 100)
  })
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })

  const [cardOpenf, setCardOpenf] = useState(false)
  const [cardOpenc, setCardOpenc] = useState(false)
 

  return (
    <>
      <header className='header'>
        <div className='scontainer flex'>
          <div className='logo'>
            <Link to='/'>
              <img src={Medicine} alt='Medicine' />
            </Link>
          </div>
          <div className='search flex'>
            <AiOutlineSearch className='searchIcon' />
            <input type='text'  onChange={handleSearch} placeholder='Search...' />
          </div>
          <div className='account flexCenter'>
          <Fav favitems={favitems} setFavitems={setFavitems} cardOpenf={cardOpenf} setCardOpenf={setCardOpenf} setIsFavorite={setIsFavorite} />
          <Cart cartitems={cartitems} setCartitems={setCartitems} cardOpenc={cardOpenc} setCardOpenc={setCardOpenc} />
          <User userName={userName} setisLoggIn={setisLoggIn} setCardOpenf={setCardOpenf} setCardOpenc={setCardOpenc} />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
