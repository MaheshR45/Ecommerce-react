import React, { useState } from "react"
import { BiShoppingBag } from "react-icons/bi"
import { AiOutlineClose } from "react-icons/ai"
import { FavList } from "./favlist"
import { FaHeart } from "react-icons/fa";


const Fav = ({favitems,setFavitems,cardOpenf,setCardOpenf}) => {
 
  const closeCard = () => {
    setCardOpenf(null)
  }
  const favquantity =favitems.length;

  return (
    <>
      <div className='card' style={{marginRight:"10px"}} onClick={() => setCardOpenf(!cardOpenf)}>
        <FaHeart className='cardIcon' /> 
        <span className='flexCenter'>{favquantity}</span>
      </div>
      <div className={cardOpenf ? "overlay" : "nonoverlay"}></div>

      <div className={cardOpenf ? "cartItem" : "cardhide"}>
        <div className='title flex'>
          <h2>Favourite List</h2>
          <button onClick={closeCard}>
            <AiOutlineClose className='icon' />
          </button>
        </div>
          <FavList favitems={favitems} setFavitems={setFavitems}  />
      </div>
    </>
  )
}
export default Fav
