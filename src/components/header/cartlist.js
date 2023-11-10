import React from "react"
import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const CartItems = ({cartitems,setCartitems }) => {
  
    const incCartitems = (data) => {
        const updatedCart = cartitems.map((item) => {
          if (item.id === data.id) {
            return {
              ...item,
              qty: item.qty + 1,
            //   price: item.price + data.price ,
            };
          }
          return item;
        });
        setCartitems(updatedCart);
      };
    
      const descCartitems = (data) => {
        const updatedCart = cartitems
          .map((item) => {
            if (item.id === data.id) {
              return {
                ...item,
                qty: item.qty - 1,
                // price: item.price -data.price ,
              };
            }
            return item;
          })
          .filter((item) => item.qty > 0);
    
        setCartitems(updatedCart);
      };
      const removeFromcart=(id)=>{
        const afterremove=cartitems.filter((item)=>item.id!=id)
        setCartitems(afterremove)
        toast.error(`Item ${id} is deleted from the cart`);
      }
  return (
    <>
      {cartitems.map((item) => (
      <div className='cardList' key={item.id}>
        <div className='cartContent'>
          <div className='img'>
            <img src={item.cover} alt='' />
            <button className='remove flexCenter' onClick={()=>removeFromcart(item.id)}>
              <AiOutlineClose />
            </button>
          </div>
          <div className='details'>
            <p>{item.name}</p>
            <label htmlFor=''>Unit Price ${item.price}</label>

            <div className='price'>
              <div className='qty flexCenter'>
                <button className='plus' onClick={()=>incCartitems(item)}>
                  <AiOutlinePlus />
                </button>
                <button className='num'>{item.qty}</button>
                <button className='minus' onClick={()=>descCartitems(item)}>
                  <AiOutlineMinus />
                </button>
              </div>
              <div className='priceTitle'> ${item.price * item.qty}</div>
            </div>
          </div>
        </div>
      </div>
       ))}
    </>
  )
}
