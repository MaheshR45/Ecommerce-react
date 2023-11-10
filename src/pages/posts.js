import React from "react"
import "./Poster.css"
import { slide } from "../assets/data/data"

 const Poster = () => {
  return (
    <>
      <div className='slider'>
        <div className='container grid'>
          {slide.map((item, i) => (
            <div className='box' key={i}>
              <div className='img'>
                <img src={item.image} alt='' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
export default Poster;
