import React from "react"
import { AiOutlineClose } from "react-icons/ai"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const FavList = ({ favitems,setFavitems,setCardOpenf }) => {

  const removefav = (data) => {
    const updatedfavdata=favitems.filter((item)=>item.id!=data.id)
    setFavitems(updatedfavdata);
    toast.error(`Item ${data.id} is deleted from the Wishlist`);
    if(favitems.length<=1){
      setCardOpenf(false)
    }
  }
  return (
    <>
    {favitems.map((item) => (
      <div className='cardList' key={item.id}>
        <div className='cartContent'>
          <div className='img'>
            <img src={item.cover} alt='' />
            <button className='remove flexCenter'  onClick={()=>removefav(item)}>
              <AiOutlineClose />
            </button>
          </div>
          <div className='details'>
            <p>{item.name}</p>
            <label htmlFor=''>Unit Price ${item.price}</label>
            <div className='price'>
              <div className='qty flexCenter'>
                {/* <button className='num'></button> */}
                <button className='' onClick={()=>removefav(item)}>
                  <AiOutlineClose />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
       ))}
    </>
  )
}

