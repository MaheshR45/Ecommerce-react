import React from "react"
import { AiOutlineClose } from "react-icons/ai"


export const FavList = ({ favitems,setFavitems }) => {

  const removefav = (data) => {
    const updatedfavdata=favitems.filter((item)=>item.id!=data.id)
    setFavitems(updatedfavdata);
  }
  return (
    <>
    {favitems.map((item) => (
      <div className='cardList' key={item.id}>
        <div className='cartContent'>
          <div className='img'>
            <img src={item.cover} alt='' />
            <button className='remove flexCenter'>
              <AiOutlineClose />
            </button>
          </div>
          <div className='details'>
            <p>{item.name}</p>
            <label htmlFor=''>Unit Price ${item.price}</label>
            <div className='price'>
              <div className='qty flexCenter'>
                <button className='num'>{item.qty}</button>
                <button className='minus' onClick={()=>removefav(item)}>
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

