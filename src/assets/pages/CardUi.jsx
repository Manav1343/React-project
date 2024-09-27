import React from 'react';
import data from './Data'

import { NavLink } from 'react-router-dom';
import Data2 from './Data2';

const CardUi = ({title,para,image,price,id})=>{
    const cardimg ={
      // aspectRatio: 135 / 76,
      objectFit:'contain',
     
    }
    return (
        <>
        <div className="card">
          <img src={image??"vite.svg"} height={150} alt="" style={cardimg}/>
          <div className="card-body">
              <h6 className="text-center ">{title??"no title!"}</h6>
              <p className='text-center fw-bolder'>{para??"no para!"}</p>
              <p className=' fw-light'>{price??"no price"}</p>
              <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i><br></br>
              <button className="btn btn-outline-info mt-2">Buy Now</button>
              {/* <NavLink to={`/view/${id}`}  className="btn btn-outline-dark mt-1">Read More...</NavLink> */}

          </div>
        </div>
        </>
    );
}

export default CardUi;