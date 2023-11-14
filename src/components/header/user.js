import React, { useState } from "react"
import { IoSettingsOutline } from "react-icons/io5"
import { BsBagCheck } from "react-icons/bs"
import { AiOutlineHeart } from "react-icons/ai"
import { GrHelp } from "react-icons/gr"
import { BiLogOut } from "react-icons/bi"
import { Link } from "react-router-dom"
import { MdCancel } from "react-icons/md"; // Import cancel icon


export const User = ({userName,setisLoggIn,setCardOpenf,setCardOpenc}) => {
   // Inline CSS in a variable
   const popupStyles = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "#5a5a5ad4",
    padding: "20px",
    border: "1px solid #ccc",
    zIndex: 1000,
    width: "100%",
    height:"100%"
  };

  const cancelIconStyles = {
    position: "absolute",
    top: "10px",
    right: "10px",
    cursor: "pointer",
    fontSize:"40px"
  };
  const user = true
  const [profileOpen, setProfileOpen] = useState(false)
  const [regOpen, setregOpen] = useState(false)

  const close = () => {
    setProfileOpen(null)
  }

//   const dispatch = useDispatch()
//   const logoutHandler = (e) => {
//     dispatch(authActions.logout())
//   }

  const logoutHandler = (e) => {
    setProfileOpen(false)
    setisLoggIn(false)
  }
  const openRegPopup=()=>{
    setregOpen(true)
  }

  return (
    <>
      <div className='profile'>
        {user ? (
          <>
            <button className='img' onClick={() => setProfileOpen(!profileOpen)}>
              <img src='https://cdn-icons-png.flaticon.com/512/2202/2202112.png' alt='' />
            </button>

            {profileOpen && (
              <div className='openProfile boxItems' onClick={close}>
                <div className='image'>
                  {/* <Link to='/account'> */}
                    <div className='img'>
                      <img src='https://cdn-icons-png.flaticon.com/512/2202/2202112.png' alt='' />
                    </div>
                  {/* <Lin/k> */}
                  <div className='text'>
                    <h4>{userName}</h4>
                    <label htmlFor=''>Los Angeles,CA</label>
                  </div>
                </div>
                {/* <Link to='/login'> */}
                  <button className='box' onClick={()=>openRegPopup()}>
                    <IoSettingsOutline className='icon' />
                    <h4>My Account</h4>
                  </button>
                {/* <Link/> */}
                <button className='box' onClick={()=>setCardOpenc(true)}>
                  <BsBagCheck className='icon' />
                  <h4>My Order</h4>
                </button>
                <button className='box' onClick={()=>setCardOpenf(true)}>
                  <AiOutlineHeart className='icon' />
                  <h4>Wishlist</h4>
                </button>
                <button className='box'>
                  <GrHelp className='icon' />
                  <h4>Help</h4>
                </button>
                <button className='box' onClick={logoutHandler}>
                  <BiLogOut className='icon' />
                  <h4>Log Out</h4>
                </button>
              </div>
            )}
          </>
        ) : (
          <button>My Account</button>
        )}
        {regOpen && (
          <div style={popupStyles}>
              <MdCancel style={cancelIconStyles} onClick={()=>setregOpen(false)} />
            <form>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" value={userName} />

              <label htmlFor="address">Address:</label>
              <input type="text" id="address" name="address" />

              <label htmlFor="image">Upload Image:</label>
              <input type="file" id="image" name="image" />

              <button type="submit" onClick={()=>setregOpen(false)}>Register</button>
            </form>
          </div>
        )}
      </div>
    </>
  )
}
